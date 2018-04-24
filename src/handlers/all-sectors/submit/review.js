'use strict';

const MasterDataService = require('../../../service/master-data');
const Submission = require('../../../lib/submission');
const cacheHelper = require('../common').cacheHelper;
const cacheNames = require('../../../lib/user-cache-policies').names;
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const errHdlr = require('../../../lib/utils').generalErrorHandler;

const TaskListService = require('../../../service/task-list');
const allSectorsTaskList = require('../../../model/all-sectors/task-list');
const isNumeric = require('../../../lib/utils').isNumeric;
const setConfirmation = require('../common').setConfirmation;
const statusHelper = require('../common').statusHelper;
const enrichWasteTransferObject = require('../report/waste').enrichWasteTransferObject;

/**
 * Route handlers for check your submission
 */
const logger = require('../../../lib/logging').logger;

const internals = {

    // Create release element of message
    releasesObj: async (task, release) => {
        try {
            if (isBrt(task.releases[release].value)) {
                return {
                    substance_name: (await MasterDataService.getParameterById(Number.parseInt(release))).nomenclature,
                    method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                    below_reporting_threshold: true
                };
            } else if (isNumeric(task.releases[release].value)) {
                return {
                    substance_name: (await MasterDataService.getParameterById(Number.parseInt(release))).nomenclature,
                    value: Number.parseFloat(task.releases[release].value),
                    units: (await MasterDataService.getUnitById(task.releases[release].unitId)).nomenclature,
                    method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                    below_reporting_threshold: false,
                    notifiable: task.releases[release].notifiable ? {
                        value: task.releases[release].notifiable.value,
                        units: (await MasterDataService.getUnitById(task.releases[release].notifiable.unitId)).nomenclature
                    } : null
                };
            } else {
                throw new CacheKeyError('Malformed release object: ' + JSON.stringify(release));
            }
        } catch (err) {
            logger.log('error', 'Error creating view object: ' + err);
            throw err;
        }
    }
};

module.exports = {
    /**
     * Confirm submission handler.
     *
     * This page operates in two basic modes - view only or review mode
     * depending on weather the situation
     *
     *              Open    Complete    Submitted   Approved
     *              ----    --------    ---------   --------
     * Operator |   View    Review      View        View
     * Internal |                       Review      View
     *
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */
    review: async (request, h) => {
        try {
            const {route, submissionContext, eaId, year, isOperator} = await cacheHelper(request, 'review');
            const { challengeStatus, invalid, completed } = statusHelper(submissionContext);
            const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            const regimeTree = await MasterDataService.getRegimeTreeById(eaId.regime.id);

            // Get appropriate the task list
            const tasks = TaskListService.getTaskList(allSectorsTaskList, regimeTree);

            // Everything except submit is required to be evaluated
            const required = Object.keys(tasks).filter(k => !['SUBMIT'].includes(k));

            const routes = required.filter(r => challengeStatus.find(c => c === r))
                .filter(r => completed.find(c => c === r))
                .filter(r => !invalid.find(c => c === r));

            // Determine the mode View / Review
            const reviewMode = ((submissionContext, required) => {
                if (isOperator) {
                    if (!required.filter(r => r !== 'REVIEW').every(r => completed.includes(r))) {
                        return false;
                    }

                    if (submissionContext.status === Submission.submissionStatusCodes.SUBMITTED ||
                        submissionContext.status === Submission.submissionStatusCodes.APPROVED
                    ) {
                        return false;
                    }

                    return true;
                } else {
                    if (!required.filter(r => r !== 'REVIEW').every(r => completed.includes(r))) {
                        return false;
                    }

                    if (submissionContext.status === Submission.submissionStatusCodes.UNSUBMITTED ||
                        submissionContext.status === Submission.submissionStatusCodes.APPROVED) {
                        return false;
                    }

                    return true;
                }
            })(submissionContext, required);

            if (request.method === 'get') {
                await setConfirmation(request, submissionContext, route, false);

                // Build the display objects
                const reviewObject = {};
                reviewObject.applicableYear = year;
                reviewObject.permitNumber = eaId.nomenclature;
                reviewObject.site = eaId.site.nomenclature;
                const routeObligations = {};

                for (const rte of routes) {
                    // We need to se the current task in the eaId
                    submissionContext.currentTask = rte;
                    await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
                    const task = await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).get(request);

                    const obligation = regimeTree.obligations.find(o => o.route.id === tasks[rte].routeId);
                    if (obligation) {
                        routeObligations[rte] = {
                            route: tasks[rte].name,
                            description: obligation.description
                        };
                    }

                    switch (rte) {

                        case 'NACE_CODE':
                            if (task.nace && task.nace.id) {
                                reviewObject.nace = await MasterDataService.getNaceClassById(task.nace.id);
                            }

                            break;

                        case 'NOSE_CODES':
                            if (task.nose && task.nose.noseIds) {
                                reviewObject.noses = await Promise.all(task.nose.noseIds.map(async p => {
                                    return MasterDataService.getNoseProcessById(p);
                                }));
                            }

                            break;

                        case 'RELEASES_TO_AIR':
                            if (task.releases) {
                                reviewObject.releases_to_air = reviewObject.releases_to_air || [];
                                for (const release of Object.keys(task.releases)) {
                                    reviewObject.releases_to_air.push(await internals.releasesObj(task, release));
                                }
                            }
                            break;

                        case 'RELEASES_TO_LAND':
                            if (task.releases) {
                                reviewObject.releases_to_land = reviewObject.releases_to_land || [];
                                for (const release of Object.keys(task.releases)) {
                                    reviewObject.releases_to_land.push(await internals.releasesObj(task, release));
                                }
                            }
                            break;

                        case 'RELEASES_TO_CONTROLLED_WATERS':
                            if (task.releases) {
                                reviewObject.releases_to_controlled_water = reviewObject.releases_to_controlled_water || [];
                                for (const release of Object.keys(task.releases)) {
                                    reviewObject.releases_to_controlled_water.push(await internals.releasesObj(task, release));
                                }
                            }
                            break;

                        case 'OFFSITE_TRANSFERS_IN_WASTE_WATER':
                            if (task.releases) {
                                reviewObject.releases_to_waste_water = reviewObject.releases_to_waste_water || [];
                                for (const release of Object.keys(task.releases)) {
                                    reviewObject.releases_to_waste_water.push(await internals.releasesObj(task, release));
                                }
                            }
                            break;

                        case 'WASTE_TRANSFERS':
                            if (task.transfers) {
                                reviewObject.transfers = reviewObject.transfers || [];
                                for (const transfer of task.transfers) {
                                    reviewObject.transfers.push(await enrichWasteTransferObject(userContext, transfer));
                                }
                            }
                            break;

                        default:
                            throw new CacheKeyError('Unknown route object: ' + rte);
                    }
                }

                return h.view('all-sectors/submit/review', {
                    review: reviewObject,
                    review_mode: reviewMode,
                    is_operator: isOperator,
                    submission_status: submissionContext.status,
                    routeObligations: routeObligations
                });

            } else {

                if (reviewMode && isOperator) {
                    await setConfirmation(request, submissionContext, route, true);
                    return h.redirect('/task-list');
                } else if (!reviewMode && isOperator) {
                    return h.redirect('/task-list');
                } else if (reviewMode && !isOperator) {

                    if (Object.keys(request.payload).includes('notApprove')) {
                        await Submission.setStatusForSubmission(request, 'Unsubmitted');
                    } else {
                        await Submission.setStatusForSubmission(request, 'Approved');
                    }

                    return h.redirect('/');
                } else {
                    return h.redirect('/');
                }
            }
        } catch (err) {
            return errHdlr(err, h);
        }
    }
};

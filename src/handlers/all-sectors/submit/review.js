'use strict';

const MasterDataService = require('../../../service/master-data');
const Submission = require('../../../lib/submission');
const cacheHelper = require('../common').cacheHelper;
const cacheNames = require('../../../lib/user-cache-policies').names;
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const allSectorsTaskList = require('../../../model/all-sectors/task-list');
const required = require('../../../service/task-list').required(allSectorsTaskList).map(n => n.name);
const isNumeric = require('../../../lib/utils').isNumeric;
const isBrt = require('../../../lib/validator').isBrt;
const setConfirmation = require('../common').setConfirmation;

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
                    substance_name: (await MasterDataService.getSubstanceById(Number.parseInt(release))).name,
                    method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                    below_reporting_threshold: true
                };
            } else if (isNumeric(task.releases[release].value)) {
                return {
                    substance_name: (await MasterDataService.getSubstanceById(Number.parseInt(release))).name,
                    value: Number.parseFloat(task.releases[release].value),
                    units: (await MasterDataService.getUnitById(task.releases[release].unitId)).name,
                    method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                    below_reporting_threshold: false
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
            const { route, submissionContext, eaId, year, isOperator } = await cacheHelper(request, 'review');

            const challengeStatus = Object.keys(submissionContext.challengeStatus).filter(p => submissionContext.challengeStatus[p]);
            const valid = Object.keys(submissionContext.valid).filter(p => submissionContext.valid[p]);
            const completed = Object.keys(submissionContext.completed).filter(p => submissionContext.completed[p]);

            const routes = required.filter(r => {
                return challengeStatus.find(c => c === r) &&
              valid.find(v => v === r) &&
              completed.find(d => d === r);
            });

            // Determine teh mode View / Review
            const reviewMode = ((submissionContext, required) => {
                if (isOperator) {
                    if (!required.filter(r => r !== 'REVIEW').every(r => completed.includes(r))) {
                        return false;
                    }

                    if (submissionContext.submission.status === Submission.submissionStatusCodes.SUBMITTED ||
                        submissionContext.submission.status === Submission.submissionStatusCodes.APPROVED
                    ) {
                        return false;
                    }

                    return true;
                } else {
                    if (!required.filter(r => r !== 'REVIEW').every(r => completed.includes(r))) {
                        return false;
                    }

                    if (submissionContext.submission.status === Submission.submissionStatusCodes.UNSUBMITTED ||
                    submissionContext.submission.status === Submission.submissionStatusCodes.APPROVED) {
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
                reviewObject.permitNumber = eaId.name;
                reviewObject.site = eaId.site.name;

                for (const rte of routes) {
                    // We need to se the current task in the eaId
                    submissionContext.currentTask = rte;
                    await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
                    const task = await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).get(request);

                    switch (rte) {
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
                                    const x = await internals.releasesObj(task, release);
                                    console.log(JSON.stringify(x));
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

                        case 'OFFSITE_WASTE_TRANSFERS':
                            if (task.transfers) {
                                reviewObject.offsite_waste_transfers = reviewObject.offsite_waste_transfers || [];
                                for (const transfer of task.transfers) {
                                    if (transfer.wfd.disposalId) {
                                        reviewObject.offsite_waste_transfers.push({
                                            ewc_chapter: (await MasterDataService.getEwcChapterById(Number.parseInt(transfer.ewc.chapterId))),
                                            ewc_sub_chapter: (await MasterDataService.getEwcSubChapterById(Number.parseInt(transfer.ewc.subChapterId))),
                                            ewc_activity: (await MasterDataService.getEwcActivityById(Number.parseInt(transfer.ewc.activityId))),
                                            wfd_disposal: (await MasterDataService.getDisposalById(transfer.wfd.disposalId)).code,
                                            tonnage: transfer.value
                                        });

                                    } else if (transfer.wfd.recoveryId) {
                                        reviewObject.offsite_waste_transfers.push({
                                            ewc_chapter: (await MasterDataService.getEwcChapterById(Number.parseInt(transfer.ewc.chapterId))),
                                            ewc_sub_chapter: (await MasterDataService.getEwcSubChapterById(Number.parseInt(transfer.ewc.subChapterId))),
                                            ewc_activity: (await MasterDataService.getEwcActivityById(Number.parseInt(transfer.ewc.activityId))),
                                            wfd_recovery: (await MasterDataService.getRecoveryById(transfer.wfd.recoveryId)).code,
                                            tonnage: transfer.value
                                        });

                                    } else {
                                        throw new CacheKeyError('Malformed review object' + JSON.stringify(transfer, null, 2));
                                    }
                                }
                            }
                            break;

                        case 'OVERSEAS_WASTE_TRANSFERS':
                            break;

                        default:
                            throw new CacheKeyError('Unknown route object: ' + rte);
                    }
                }

                return h.view('all-sectors/submit/review', {
                    review: reviewObject,
                    review_mode: reviewMode,
                    is_operator: isOperator,
                    submission_status: submissionContext.submission.status
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
            logger.log('error', err);
            return h.redirect('/');
        }
    }
};
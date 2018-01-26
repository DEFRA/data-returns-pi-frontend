'use strict';

const MasterDataService = require('../../../service/master-data');
const Submission = require('../../../lib/submission');

const cacheHelper = require('../common').cacheHelper;
const cacheNames = require('../../../lib/user-cache-policies').names;
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const allSectorsTaskList = require('../../../model/all-sectors/task-list');
const required = require('../../../service/task-list').required(allSectorsTaskList);
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
     * depending on weather the status is submitted
     *
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    review: async (request, reply) => {
        try {
            const { route, permitStatus, submissionStatus } = await cacheHelper(request, 'review');

            if (request.method === 'get') {

                const challengeStatus = Object.keys(permitStatus.challengeStatus).filter(p => permitStatus.challengeStatus[p]);
                const valid = Object.keys(permitStatus.valid).filter(p => permitStatus.valid[p]);
                const completed = Object.keys(permitStatus.completed).filter(p => permitStatus.completed[p]);

                const routes = required.filter(r => {
                    return challengeStatus.find(c => c === r) &&
                    valid.find(v => v === r) &&
                    completed.find(d => d === r);
                });

                await setConfirmation(request, permitStatus, route, false);

                // Determine the mode
                const reviewMode = !!((
                    request.app.info.submission.status === Submission.submissionStatusCodes.UNSUBMITTED ||
                (request.app.info.submission.status === Submission.submissionStatusCodes.SUBMITTED && request.app.info.user.roles.includes('SITE_OFFICER'))
                )) && required.filter(r => r !== 'REVIEW').every(r => completed.includes(r));

                // Build the display objects
                const reviewObject = {};
                reviewObject.applicableYear = 2017;
                reviewObject.permitNumber = submissionStatus.name;
                reviewObject.site = submissionStatus.site.name;

                for (const rte of routes) {
                    // We need to se the current task in the eaId
                    permitStatus.currentTask = rte;
                    await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
                    const task = await request.server.app.userCache.cache(cacheNames.TASK_STATUS).get(request);

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

                reply.view('all-sectors/submit/review', { review: reviewObject, mode: reviewMode });
            } else {
                await setConfirmation(request, permitStatus, route, true);
                reply.redirect('/task-list');
            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/');
        }
    }
};

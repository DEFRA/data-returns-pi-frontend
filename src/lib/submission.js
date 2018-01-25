'use strict';

/*
 * This module contains functions for the final submission stage to the API.
 * It converts the contents of the redis cache and produces the final message
 */
const Joi = require('joi');
const Hoek = require('hoek');

const MasterDataService = require('../service/master-data');

const cacheNames = require('./user-cache-policies').names;
const CacheKeyError = require('./user-cache-policies').CacheKeyError;
const Api = require('./api-client');
const allSectorsTaskList = require('../model/all-sectors/task-list');
const required = require('../service/task-list').required(allSectorsTaskList);

const isNumeric = require('./utils').isNumeric;
const isBrt = require('../lib/validator').isBrt;
const logger = require('./logging').logger;

// Allowable submission status codes
const submissionStatusCodes = {
    UNSUBMITTED: 'Unsubmitted',
    SUBMITTED: 'Submitted',
    APPROVED: 'Approved'
};

const releaseSchema = Joi.object({
    substance_id: Joi.number().integer().required(),
    below_reporting_threshold: Joi.boolean().required(),
    method: Joi.valid(['Measurement', 'Calculation', 'Estimation']),
    value: Joi.alternatives().when('below_reporting_threshold', {
        is: true, then: Joi.forbidden(), otherwise: Joi.number().required()
    }),
    unit_id: Joi.alternatives().when('below_reporting_threshold', {
        is: true, then: Joi.forbidden(), otherwise: Joi.number().integer().required()
    })
});

const offsiteWasteTransfersSchema = Joi.alternatives().try(Joi.object({
    ewc_activity_id: Joi.number().integer(),
    wfd_disposal_id: Joi.number().integer().required(),
    wfd_recovery_id: Joi.forbidden(),
    tonnage: Joi.number()
}), Joi.object({
    ewc_activity_id: Joi.number().integer(),
    wfd_disposal_id: Joi.forbidden(),
    wfd_recovery_id: Joi.number().integer().required(),
    tonnage: Joi.number()
})
).optional();

const transmissionSchema = Joi.object({
    applicable_year: Joi.number().integer().required(),
    reporting_reference: Joi.number().integer().required().optional(),
    status: Joi.string().valid([submissionStatusCodes.UNSUBMITTED, submissionStatusCodes.SUBMITTED, submissionStatusCodes.APPROVED]),
    releases_to_land: Joi.array().items(releaseSchema).optional(),
    releases_to_controlled_water: Joi.array().items(releaseSchema).optional(),
    releases_to_waste_water: Joi.array().items(releaseSchema).optional(),
    releases_to_air: Joi.array().items(releaseSchema).optional(),
    offsite_waste_transfers: Joi.array().items(offsiteWasteTransfersSchema).optional()
});

const internals = {

    /**
     * Retrieve the submission states for a given set of permit identifiers
     * @param eaIdIds - an array of the permit id's
     * @return {Promise.<void>}
     */
    getSubmissionStatusForEaIdsAndYear: async (eaIdIds, year) => {
        const query = 'applicable_year=' + year.toString() + '&reporting_references=' + eaIdIds.join(',');
        const response = await Api.request('SUB', 'GET', 'submissions/search/findByReportingReferenceInAndApplicableYear', query);
        return response;
    },

    /**
     * Singular version of the above
     * @param eaIdIds
     * @param year
     * @return {Promise.<*>}
     */
    getSubmissionStatusForEaIdAndYear: async (eaIdId, year) => {
        const query = 'applicable_year=' + year.toString() + '&reporting_reference=' + eaIdId;
        const response = await Api.request('SUB', 'GET', 'submissions/search/getByReportingReferenceAndApplicableYear', query);
        return response;
    },

    // Create release element of message
    releasesObj: async (task, release) => {
        if (isBrt(task.releases[release].value)) {
            return {
                substance_id: Number.parseInt(release),
                method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                below_reporting_threshold: true
            };
        } else if (isNumeric(task.releases[release].value)) {
            return {
                substance_id: Number.parseInt(release),
                value: Number.parseFloat(task.releases[release].value),
                unit_id: task.releases[release].unitId,
                method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                below_reporting_threshold: false
            };
        } else {
            throw new CacheKeyError('Malformed release object: ' + JSON.stringify(release));
        }
    },

    statusHelper: (permitStatus) => {
        const result = {};
        result.challengeStatus = Object.keys(permitStatus.challengeStatus).filter(p => permitStatus.challengeStatus[p]);
        result.valid = Object.keys(permitStatus.valid).filter(p => permitStatus.valid[p]);
        result.completed = Object.keys(permitStatus.completed).filter(p => permitStatus.completed[p]);
        return result;
    },

    /*
     * Reads the redis cache objects and generates the JSON payload for the submission message
     * @param request
     * @return {Promise.<void>}
     */
    createSubmissionMessage: async (request) => {
        const submission = await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).get(request);
        const eaId = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

        const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

        const { challengeStatus, valid, completed } = internals.statusHelper(permitStatus);

        const routes = required.filter(r => {
            return challengeStatus.find(c => c === r) &&
                valid.find(v => v === r) &&
                completed.find(d => d === r);
        });

        const transmissionObject = {
            applicable_year: 2017,
            reporting_reference: submission.id,
            status: 'Submitted'
        };

        for (const route of routes) {
            // We need to se the current task in the eaId
            eaId.currentTask = route;
            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, eaId);
            const task = await request.server.app.userCache.cache(cacheNames.TASK_STATUS).get(request);

            switch (route) {
                case 'RELEASES_TO_AIR':
                    if (task.releases) {
                        transmissionObject.releases_to_air = transmissionObject.releases_to_air || [];
                        for (const release of Object.keys(task.releases)) {
                            transmissionObject.releases_to_air.push(await internals.releasesObj(task, release));
                        }
                    }
                    break;

                case 'RELEASES_TO_LAND':
                    if (task.releases) {
                        transmissionObject.releases_to_land = transmissionObject.releases_to_land || [];
                        for (const release of Object.keys(task.releases)) {
                            transmissionObject.releases_to_land.push(await internals.releasesObj(task, release));
                        }
                    }
                    break;

                case 'RELEASES_TO_CONTROLLED_WATERS':
                    if (task.releases) {
                        transmissionObject.releases_to_controlled_water = transmissionObject.releases_to_controlled_water || [];
                        for (const release of Object.keys(task.releases)) {
                            transmissionObject.releases_to_controlled_water.push(await internals.releasesObj(task, release));
                        }
                    }
                    break;

                case 'OFFSITE_TRANSFERS_IN_WASTE_WATER':
                    if (task.releases) {
                        transmissionObject.releases_to_waste_water = transmissionObject.releases_to_waste_water || [];
                        for (const release of Object.keys(task.releases)) {
                            transmissionObject.releases_to_waste_water.push(await internals.releasesObj(task, release));
                        }
                    }
                    break;

                case 'OFFSITE_WASTE_TRANSFERS':
                    if (task.transfers) {
                        transmissionObject.offsite_waste_transfers = transmissionObject.offsite_waste_transfers || [];
                        for (const transfer of task.transfers) {
                            if (transfer.wfd.disposalId) {
                                transmissionObject.offsite_waste_transfers.push({
                                    ewc_activity_id: transfer.ewc.activityId,
                                    wfd_disposal_id: transfer.wfd.disposalId,
                                    tonnage: transfer.value
                                });

                            } else if (transfer.wfd.recoveryId) {
                                transmissionObject.offsite_waste_transfers.push({
                                    ewc_activity_id: transfer.ewc.activityId,
                                    wfd_recovery_id: transfer.wfd.recoveryId,
                                    tonnage: transfer.value
                                });

                            } else {
                                throw new CacheKeyError('Malformed transfer object' + JSON.stringify(transfer, null, 2));
                            }
                        }
                    }
                    break;

                case 'OVERSEAS_WASTE_TRANSFERS':
                    break;

                default:
                    throw new CacheKeyError('Unknown route object: ' + route);
            }
        }

        return transmissionObject;
    },

    /**
     * Calculate completed status - the status required to make the submission for a given route
     * @param permitStatus
     * @param name
     */
    setCompletedStatus: (permitStatus, name) => {
        permitStatus.completed = permitStatus.completed || {};

        // Calculate the permit status completed flag for each route
        permitStatus.completed[name] = false;

        // Deemed valid if no validity status or validity status true
        const valid = permitStatus.valid[name] === undefined || permitStatus.valid[name];

        // Completed if confirmed and challenged no - in this case there may or may not be a validation
        if (permitStatus.confirmation[name] && !permitStatus.challengeStatus[name] && valid) {
            permitStatus.completed[name] = true;
        }

        // Completed if confirmed and challenged yes and valid
        if (permitStatus.confirmation[name] && permitStatus.challengeStatus[name] && valid) {
            permitStatus.completed[name] = true;
        }
    },

    /**
     * Remove the cache entries after a (successful) submission
     * @param request
     * @return {Promise.<void>}
     */
    remove: async (request) => {
        const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

        const { challengeStatus, valid, completed } = internals.statusHelper(permitStatus);

        const routes = required.filter(r => {
            return challengeStatus.find(c => c === r) &&
                valid.find(v => v === r) &&
                completed.find(d => d === r);
        });

        for (const route of routes) {
            permitStatus.currentTask = route;
            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
            await request.server.app.userCache.cache(cacheNames.TASK_STATUS).drop(request);
        }
        await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).drop(request);
    },

    getReleasesToControlledWater: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/releasesToControlledWater`);
        return result._embedded.releasesToControlledWater;
    },

    getOverseasWasteTransfers: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/overseasWasteTransfers`);
        return result._embedded.overseasWasteTransfers;
    },

    getReleasesToWasteWater: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/releasesToWasteWater`);
        return result._embedded.releasesToWasteWater;
    },

    getOffsiteWasteTransfers: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/offsiteWasteTransfers`);
        return result._embedded.offsiteWasteTransfers;
    },

    getReleasesToAir: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/releasesToAir`);
        return result._embedded.releasesToAir;
    },

    getReleasesToLand: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/releasesToLand`);
        return result._embedded.releasesToLand;
    },

    /**
     * Set the task and permit status caches for releases
     * @param id
     * @return {Promise.<void>}
     */
    setReleasesCache: async (request, releases, releaseType) => {
        // Initialize a new permit status
        let permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

        if (!permitStatus) {
            permitStatus = {};
            permitStatus.confirmation = {};
            permitStatus.challengeStatus = {};
            permitStatus.valid = {};
            permitStatus.completed = {};
        }

        const methods = await MasterDataService.getMethods();

        if (releases.length) {
            const tasks = {};
            tasks.releases = {};

            permitStatus.currentTask = releaseType;
            permitStatus.confirmation[releaseType] = true;
            permitStatus.challengeStatus[releaseType] = true;
            permitStatus.valid[releaseType] = true;
            internals.setCompletedStatus(permitStatus, releaseType);

            for (const release of releases) {
                if (release.below_reporting_threshold) {
                    tasks.releases[release.substance_id] = {
                        methodId: methods.find(m => m.name === release.method).id,
                        value: 'BRT'
                    };
                } else {
                    tasks.releases[release.substance_id] = {
                        methodId: methods.find(m => m.name === release.method).id,
                        value: release.value,
                        unitId: release.unit_id
                    };
                }
            }

            // Set the caches
            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
            await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);
        } else {
            permitStatus.currentTask = releaseType;
            permitStatus.confirmation[releaseType] = true;
            permitStatus.challengeStatus[releaseType] = false;
            internals.setCompletedStatus(permitStatus, releaseType);

            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
        }
    },

    /**
     * Set the task and permit status caches for transfers
     * @param request
     * @param transfers
     * @param transferType
     * @return {Promise.<void>}
     */
    setTransfersCache: async (request, transfers, transferType) => {
        // Initialize a new permit status
        let permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

        if (!permitStatus) {
            permitStatus = {};
            permitStatus.confirmation = {};
            permitStatus.challengeStatus = {};
            permitStatus.valid = {};
            permitStatus.completed = {};
        }

        if (transfers.length) {
            const tasks = {};
            tasks.transfers = [];

            permitStatus.currentTask = transferType;
            permitStatus.confirmation[transferType] = true;
            permitStatus.challengeStatus[transferType] = true;
            permitStatus.valid[transferType] = true;
            internals.setCompletedStatus(permitStatus, transferType);

            for (const transfer of transfers) {
                const activity = await MasterDataService.getEwcActivityById(transfer.ewc_activity_id);
                const subChapter = await MasterDataService.getEwcSubChapterById(activity.ewc_subchapter);
                const chapter = await MasterDataService.getEwcChapterById(subChapter.ewc_chapter);

                tasks.transfers.push({
                    ewc: {
                        chapterId: chapter.id,
                        subChapterId: subChapter.id,
                        activityId: activity.id
                    },
                    wfd: {
                        disposalId: transfer.wfd_disposal_id ? transfer.wfd_disposal_id : null,
                        recoveryId: transfer.wfd_recovery_id ? transfer.wfd_recovery_id : null
                    },
                    value: Number.parseFloat(transfer.tonnage)
                });
            }

            // Set the caches
            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
            await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);
        } else {
            permitStatus.currentTask = transferType;
            permitStatus.confirmation[transferType] = true;
            permitStatus.challengeStatus[transferType] = false;
            internals.setCompletedStatus(permitStatus, transferType);
            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
        }
    },

    /**
     * Restore the redis cache from the submissions database
     * @param request
     * @param eaId
     * @return {Promise.<null>}
     */
    restore: async (request, eaId) => {
        try {
            Hoek.assert(['Submitted', 'Approved'].includes(eaId.status), 'Cannot restore un-persisted cache state');
            Hoek.assert(eaId.submissionId, 'Required for restore persisted cache: submission id');

            // Releases
            const releasesToAir = await internals.getReleasesToAir(eaId.submissionId);
            const releasesToLand = await internals.getReleasesToLand(eaId.submissionId);
            const releasesToControlledWater = await internals.getReleasesToControlledWater(eaId.submissionId);
            const releasesToWasteWater = await internals.getReleasesToWasteWater(eaId.submissionId);

            await internals.setReleasesCache(request, releasesToAir, 'RELEASES_TO_AIR');
            await internals.setReleasesCache(request, releasesToLand, 'RELEASES_TO_LAND');
            await internals.setReleasesCache(request, releasesToControlledWater, 'RELEASES_TO_CONTROLLED_WATERS');
            await internals.setReleasesCache(request, releasesToWasteWater, 'OFFSITE_TRANSFERS_IN_WASTE_WATER');

            // Transfers
            const offsiteWasteTransfers = await internals.getOffsiteWasteTransfers(eaId.submissionId);
            await internals.setTransfersCache(request, offsiteWasteTransfers, 'OFFSITE_WASTE_TRANSFERS');

            // When restoring the submitted and checked tasks are also always complete
            const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

            ['REVIEW', 'SUBMIT'].forEach(e => {
                permitStatus.confirmation[e] = true;
                permitStatus.challengeStatus[e] = true;
                internals.setCompletedStatus(permitStatus, e);
            });

            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
        } catch (err) {
            logger.error(err);
            throw err;
        }
    }

};

module.exports = {

    // Expose redis cache restore
    restore: internals.restore,

    // Expose the prepare stage for unit testing
    setCompletedStatus: internals.setCompletedStatus,

    // Expose the function for setting completed status - used by the task list
    createSubmissionMessage: internals.createSubmissionMessage,

    // The submission status codes
    submissionStatusCodes: submissionStatusCodes,

    /**
     * Append the submission status to each permit object
     * @param eaIds
     * @return {Promise.<*>}
     */
    addStatusToEaIds: async (eaIds) => {
        // We need to get the submission status for each permit and map it to the permit
        const submissionResponse = await internals.getSubmissionStatusForEaIdsAndYear(eaIds.map(e => e.id), 2017);

        if (submissionResponse) {

            const submissionStatus = submissionResponse._embedded.submissions
                .map(s => { return { eaIdId: s.reporting_reference, status: s.status }; });

            return eaIds.map(e => {
                // We don't want to write the status into the map so clone
                const newObject = Object.assign(e);
                const status = submissionStatus.find(s => s.eaIdId === e.id);
                newObject.status = status ? status.status : null;
                return newObject;
            });

        }

        return eaIds;
    },

    /**
     * Singular version of the above
     * @param eaId
     * @return {Promise.<*>}
     */
    addStatusToEaId: async (eaId) => {
        const submissionResponse = await internals.getSubmissionStatusForEaIdAndYear(eaId.id, 2017);

        if (submissionResponse) {
            const newObject = Object.assign(eaId);
            newObject.status = submissionResponse.status;
            newObject.submissionId = submissionResponse.id;
            return newObject;
        } else {
            const newObject = Object.assign(eaId);
            newObject.status = submissionStatusCodes.UNSUBMITTED;
            return newObject;
        }
    },

    /**
     * Prepare the final submission JSON message and submit to the submissions API
     * @param request
     * @return {Promise.<void>}
     */
    submit: async (request) => {
        // Create the transmission message
        const message = await internals.createSubmissionMessage(request);

        // Log message in debug mode
        logger.debug('Submission message: ' + JSON.stringify(message, null, 2));

        // Validate that we have a properly formed submission message
        Joi.assert(message, transmissionSchema);

        if (process.env.NODE_ENV !== 'localtest') {

            // Submit the validated message to the API
            if (request.app.info.status === submissionStatusCodes.UNSUBMITTED) {
                await Api.request('SUB', 'POST', 'submissions', null, message);
            } else if (request.app.info.status === submissionStatusCodes.SUBMITTED) {
                await Api.request('SUB', 'PUT', 'submissions', null, message);
            } else {
                throw new Error('Illegal submission status: ' + request.app.info.status);
            }

            // Remove the current cache entries for this submission
            await internals.remove(request);
        }
    }

};

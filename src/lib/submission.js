'use strict';

/*
 * This module contains functions for the final submission stage to the API.
 * It converts the contents of the redis cache and produces the final message
 */
const Joi = require('joi');
const MasterDataService = require('../service/master-data');

const cacheNames = require('./user-cache-policies').names;
const CacheKeyError = require('./user-cache-policies').CacheKeyError;
const Api = require('./api-client');
const allSectorsTaskList = require('../model/all-sectors/task-list');
const required = require('../service/task-list').required(allSectorsTaskList);
const isNumeric = require('./utils').isNumeric;
const isBrt = require('../lib/validator').isBrt;
const logger = require('./logging').logger;

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
    applicableYear: Joi.number().integer().required(),
    reportingReference: Joi.number().integer().required().optional(),
    releases_to_land: Joi.array().items(releaseSchema).optional(),
    releases_to_controlled_water: Joi.array().items(releaseSchema).optional(),
    releases_to_waste_water: Joi.array().items(releaseSchema).optional(),
    releases_to_air: Joi.array().items(releaseSchema).optional(),
    offsite_waste_transfers: Joi.array().items(offsiteWasteTransfersSchema).optional()
});

const internals = {

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

    /*
     * Reads the redis cache objects and generates the JSON payload for the submission message
     * @param request
     * @return {Promise.<void>}
     */
    createSubmissionMessage: async (request) => {
        const submission = await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).get(request);
        const eaId = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

        const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);
        const challengeStatus = Object.keys(permitStatus.challengeStatus).filter(p => permitStatus.challengeStatus[p]);
        const valid = Object.keys(permitStatus.valid).filter(p => permitStatus.valid[p]);
        const completed = Object.keys(permitStatus.completed).filter(p => permitStatus.completed[p]);

        const routes = required.filter(r => {
            return challengeStatus.find(c => c === r) &&
              valid.find(v => v === r) &&
              completed.find(d => d === r);
        });

        const transmissionObject = {};
        transmissionObject.applicableYear = 2017;
        transmissionObject.reportingReference = submission.id;

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
                    if (task.offSiteTransfers) {
                        transmissionObject.offsite_waste_transfers = transmissionObject.offsite_waste_transfers || [];
                        for (const transfer of task.offSiteTransfers) {
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
    }

};

module.exports = {

    // Expose the prepare stage for unit testing
    createSubmissionMessage: internals.createSubmissionMessage,

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

        // If we are not in test mode then make the submission
        if (process.env.NODE_ENV !== 'localtest') {
            const response = await Api.request('SUB', 'POST', 'submissions', null, message);
            console.log(response);
        }

    }
};

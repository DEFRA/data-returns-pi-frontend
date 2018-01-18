'use strict';

/*
 * This module contains functions for the final submission stage to the API.
 * It converts the contents of the redis cache and produces the final message
 */
const Joi = require('joi');
const logger = require('./logging').logger;
const MasterDataService = require('../service/master-data');
const cacheNames = require('./user-cache-policies').names;
const CacheKeyError = require('./user-cache-policies').CacheKeyError;
const _ = require('lodash');
const isNumeric = require('./utils').isNumeric;

const releaseSchema = Joi.object({
    substanceId: Joi.number().integer().required(),
    value: Joi.number().optional(),
    unit_id: Joi.number().integer().optional(),
    method: Joi.valid(['Measurement', 'Calculation', 'Estimation']),
    below_reporting_threshold: Joi.boolean().required()
});

const offsiteWasteTransfersSchema = Joi.object({
    ewc_activity_id: Joi.number().integer(),
    wfd_disposal_id: Joi.number().integer(),
    wfd_recovery_id: Joi.number().integer(),
    tonnage: Joi.number()
}).optional();

const transmissionSchema = Joi.object({
    applicable_year: Joi.number().integer().required(),
    reporting_reference: Joi.number().integer().required().optional(),
    releases_to_land: Joi.array().items(releaseSchema).optional(),
    releases_to_controlled_water: Joi.array().items(releaseSchema).optional(),
    releases_to_waste_water: Joi.array().items(releaseSchema).optional(),
    releases_to_air: Joi.array().items(releaseSchema).optional(),
    offsite_waste_transfers: Joi.array().items(offsiteWasteTransfersSchema).optional()
});

const internals = {

    // Create release element of message
    releasesObj: async (task, release) => {
        return {
            substanceId: release,
            value: isNumeric(task.releases[release].value) ? task.releases[release].value : null,
            unit_id: task.releases[release].unitId,
            method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
            below_reporting_threshold: task.releases[release].value === 'BRT'
        };
    },

    /*
     * Reads the redis cache objects and generates the JSON payload for the submission message
     * @param request
     * @return {Promise.<void>}
     */
    createSubmissionMessage: async (request) => {
        const submission = await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).get(request);
        const eaId = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

        const completed = Object.keys(eaId.completed).filter(k => eaId.completed[k]);
        const valid = Object.keys(eaId.valid).filter(k => eaId.valid[k]);
        const routes = _.union(completed, valid);

        const transmissionObject = {};
        transmissionObject.applicable_year = 2017;
        transmissionObject.reporting_reference = submission.id;

        for (const route of routes) {
            // We need to se the current task in the eaId
            eaId.currentTask = route;
            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, eaId);
            const task = await request.server.app.userCache.cache(cacheNames.TASK_STATUS).get(request);

            switch (route) {
                case 'RELEASES_TO_AIR':
                    transmissionObject.releases_to_air = transmissionObject.releases_to_air || [];
                    for (const release of Object.keys(task.releases)) {
                        transmissionObject.releases_to_air.push(await internals.releasesObj(task, release));
                    }
                    break;

                case 'RELEASES_TO_LAND':
                    transmissionObject.releases_to_land = transmissionObject.releases_to_land || [];
                    for (const release of Object.keys(task.releases)) {
                        transmissionObject.releases_to_land.push(await internals.releasesObj(task, release));
                    }
                    break;

                case 'RELEASES_TO_CONTROLLED_WATERS':
                    transmissionObject.releases_to_controlled_water = transmissionObject.releases_to_controlled_water || [];
                    for (const release of Object.keys(task.releases)) {
                        transmissionObject.releases_to_controlled_water.push(await internals.releasesObj(task, release));
                    }
                    break;

                case 'OFFSITE_TRANSFERS_IN_WASTE_WATER':
                    transmissionObject.releases_to_waste_water = transmissionObject.releases_to_waste_water || [];
                    for (const release of Object.keys(task.releases)) {
                        transmissionObject.releases_to_waste_water.push(await internals.releasesObj(task, release));
                    }
                    break;

                case 'OFFSITE_WASTE_TRANSFERS':
                    transmissionObject.offsite_waste_transfers = transmissionObject.offsite_waste_transfers || [];
                    for (const transfer of task.offSiteTransfers) {
                        transmissionObject.offsite_waste_transfers.push({
                            ewc_activity_id: transfer.ewc.activityId,
                            wfd_disposal_id: transfer.wfd.disposalId,
                            wfd_recovery_id: transfer.wfd.recoveryId,
                            tonnage: transfer.value
                        });
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

        // Validate that we have a properly formed submission message
        Joi.assert(message, transmissionSchema);

        // new TransmissionMessageError(JSON.stringify(message, null, 2)));

    }
};

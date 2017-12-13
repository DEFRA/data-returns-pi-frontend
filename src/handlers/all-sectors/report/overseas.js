'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const sortSubstances = require('./releases').sortSubstances;
const cacheHelper = require('../common').cacheHelper;
const overseasValidator = require('../../../lib/validator').overseas;

const NEW_TRANSFER_OBJECT = {
    substanceId: null
};

const internals = {
    /**
     * Clear any invalid overseas waste transfers
     * @param request
     * @param tasks
     * @return {Promise.<void>}
     */
    clearInvalid: async (request, tasks) => {},

    /**
     * Get the current overseas waste transfer if it is set
     * otherwise create
     */
    getCurrentOverseasWasteTransfer: async (request, tasks) => {
        if (!tasks.overseasTransfers) {
            tasks.overseasTransfers = [];
            tasks.overseasTransfers.push(NEW_TRANSFER_OBJECT);
            tasks.getCurrentOverseasWasteTransfer = 0;
            await request.server.app.userCache.cache('tasks').set(request, tasks);
        }
        return tasks.overseasTransfers[tasks.getCurrentOverseasWasteTransfer];
    },

    /**
     * Locates the appropriate redirection for a given set of validation errors
     * @param validation
     */
    validationLocationMapper: (validation) => {
        if (validation.map(v => v.key).find(k => k === 'value')) {
            return '/transfers/overseas/detail';
        } else if (validation.map(v => v.key).find(k => k === 'transportation-co-addr')) {
            return '/transfers/overseas/transportation-co-addr';
        } else if (validation.map(v => v.key).find(k => k === 'destination-addr')) {
            return '/transfers/overseas/destination-addr';
        } else {
            return '/transfers/overseas/check';
        }
    },

    /**
     * Request the transportation company address
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    genericOverseasHandler: async (request, reply, getHandler, postHandler) => {
        try {
            const { route, tasks } = await cacheHelper(request, 'overseas');
            const transfer = await internals.getCurrentOverseasWasteTransfer(request, tasks);

            if (request.method === 'get') {
                // Call the page specific functions of the post handler
                await getHandler(route, tasks, transfer);
            } else {

                // Call the page specific functions of the post handler
                await postHandler(route, tasks, transfer);

                // Validation
                const validation = overseasValidator(transfer);

                if (validation) {
                    // Add validation error to the object
                    transfer.errors = validation;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);

                    reply.redirect(internals.validationLocationMapper(validation));
                } else {
                    delete transfer.errors;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);

                    // If the object is valid redirect to the transfer check page
                    reply.redirect('/transfers/overseas/check');
                }

            }
        } catch (err) {
            if (err instanceof CacheKeyError) {
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    }

};

module.exports = {
    /**
     * The challenge page handler
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    confirm: async (request, reply) => {
        try {
            const { route, tasks } = await cacheHelper(request, 'overseas');

            if (request.method === 'get') {

                // Firstly remove any invalid off-site transfer objects due to unexpected navigation
                await internals.clearInvalid(request, tasks);

                // If we have off-site transfers then redirect directly to the summary page
                if (tasks && tasks.offSiteTransfers && tasks.offSiteTransfers.length > 0) {
                    reply.redirect('/transfers/overseas');
                } else {
                    reply.view('all-sectors/report/confirm', {
                        route: route,
                        selected: false
                    });
                }

            } else {
                // Process the confirmation - set the current route and redirect to the releases page
                if (request.payload.confirmation === 'true') {
                    reply.redirect(route.page);
                } else {
                    reply.redirect('/task-list');
                }
            }

        } catch (err) {
            if (err instanceof CacheKeyError) {
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    },

    /**
     * The handler for the overseas waste transfer summary page - it will redirect to the add sequence if there
     * is no existing transfers
     */
    overseas: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'overseas');

            if (request.method === 'get') {
                if (!tasks.overseasTransfers || tasks.overseasTransfers.length === 0) {
                    reply.redirect('/transfers/overseas/add-substance');
                }
            } else {
                reply.view('all-sectors/report/overseas', { transfers: [] });
            }
        } catch (err) {
            if (err instanceof CacheKeyError) {
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    },

    /**
     * The add (substance) sequence
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    add: async (request, reply) => {
        await internals.genericOverseasHandler(request, reply, async (route) => {
            // Get a list of all of the substances from the master data service
            let substances = await MasterDataService.getSubstances();

            substances = substances.sort(sortSubstances);

            // Render the add substances page
            reply.view('all-sectors/report/add-substance', { route: route, substances: substances });
        }, async (route, tasks, transfer) => {
            const substance = await MasterDataService.getSubstanceById(Number.parseInt(request.payload['substanceId']));

            // Add the selected substances to the task if it exists
            if (!substance) {
                throw new Error('Unknown substance requested from page');
            }

            // Assign this substance to the transfer object
            transfer.substanceId = substance.id;
        });
    },

    /**
     * The handler for the detail (quanity/method/purpose) dialog
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    detail: async (request, reply) => {
        await internals.genericOverseasHandler(request, reply, async (route, tasks, transfer) => {
            reply.view('all-sectors/report/overseas-detail', { transfer: transfer });
        }, async (route, tasks, transfer) => {
            transfer.value = request.payload.value;
        });
    },

    /**
     * Handler for the transportation company address
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    transportationCompanyAddress: async (request, reply) => {
        await internals.genericOverseasHandler(request, reply, async (route, tasks, transfer) => {
            reply.view('all-sectors/business-address', {
                action: '/transfers/overseas/transportation-co-addr',
                id: 'TRANSPORTATION_COMPANY_ADDRESS'
            });
        }, async (route, tasks, transfer) => {
            transfer.transportationCompanyAddress = request.payload.value;
        });
    },

    /**
     * Handler for the destination (site) address
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    destinationAddress: async (request, reply) => {
        await internals.genericOverseasHandler(request, reply, async (route, tasks, transfer) => {
            reply.view('all-sectors/business-address', {
                action: '/transfers/overseas/destination-addr',
                id: 'DESTINATION_ADDRESS'
            });
        }, async (route, tasks, transfer) => {
            transfer.destinationAddr = request.payload.value;
        });
    }
};

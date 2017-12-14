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
            tasks.currentOverseasWasteTransferIdx = 0;
            await request.server.app.userCache.cache('tasks').set(request, tasks);
        }
        return tasks.overseasTransfers[tasks.currentOverseasWasteTransferIdx];
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
    overseasStageHandler: async (request, reply, getHandler, postHandler) => {
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

                // Firstly remove any invalid overseas transfer objects due to unexpected navigation
                await internals.clearInvalid(request, tasks);

                // If we have overseas transfers then redirect directly to the summary page
                if (tasks && tasks.overseasTransfers && tasks.overseasTransfers.length > 0) {
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
                } else {
                    reply.view('all-sectors/report/overseas', { transfers: tasks.overseasTransfers });
                }
            } else {
                reply.redirect('/transfers/overseas');
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
        await internals.overseasStageHandler(request, reply, async (route) => {
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
        await internals.overseasStageHandler(request, reply, async (route, tasks, transfer) => {
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
        await internals.overseasStageHandler(request, reply, async (route, tasks, transfer) => {
            reply.view('all-sectors/business-address', {
                action: '/transfers/overseas/transportation-co-addr',
                id: 'TRANSPORTATION_COMPANY_ADDRESS'
            });
        }, async (route, tasks, transfer) => {
            transfer.transportationCompanyAddress = {};
            transfer.transportationCompanyAddress.addressLine1 = request.payload['address-line-1'];
            transfer.transportationCompanyAddress.addressLine2 = request.payload['address-line-2'];
            transfer.transportationCompanyAddress.businessName = request.payload['business-name'];
            transfer.transportationCompanyAddress.country = request.payload['country'];
            transfer.transportationCompanyAddress.townOrCity = request.payload['town-or-city'];
        });
    },

    /**
     * Handler for the destination (site) address
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    destinationAddress: async (request, reply) => {
        await internals.overseasStageHandler(request, reply, async (route, tasks, transfer) => {
            reply.view('all-sectors/business-address', {
                action: '/transfers/overseas/destination-addr',
                id: 'DESTINATION_ADDRESS'
            });
        }, async (route, tasks, transfer) => {
            transfer.destinationAddr = {};
            transfer.destinationAddr.addressLine1 = request.payload['address-line-1'];
            transfer.destinationAddr.addressLine2 = request.payload['address-line-2'];
            transfer.destinationAddr.businessName = request.payload['business-name'];
            transfer.destinationAddr.country = request.payload['country'];
            transfer.destinationAddr.townOrCity = request.payload['town-or-city'];
        });
    },

    /**
     * Check (and allow modification) of overseas waster transfer
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    check: async (request, reply) => {
        await internals.overseasStageHandler(request, reply, async (route, tasks, transfer) => {
            reply.view('all-sectors/report/overseas-check');
        }, async (route, tasks, transfer) => {
            reply.redirect('/transfers/overseas');
        });
    },

    /**
     * Form action
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    action: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'overseas');

            // If we continue we will need to validate the submission
            if (request.payload.continue) {

                reply.redirect('/task-list');

            } else if (Object.keys(request.payload).find(s => s.startsWith('detail'))) {

                const transferIndex = Number.parseInt(Object.keys(request.payload)
                    .find(s => s.startsWith('detail')).substr(7));

                tasks.currentOverseasWasteTransferIdx = transferIndex;
                reply.redirect('/transfers/off-site/detail');

            } else if (Object.keys(request.payload).find(s => s.startsWith('delete'))) {

                const transferIndex = Number.parseInt(Object.keys(request.payload)
                    .find(s => s.startsWith('delete')).substr(7));

                // Send to delete confirmation dialog
                tasks.currentOverseasWasteTransferIdx = transferIndex;

            } else if (request.payload.back) {
                // Save the release information to the cache and return to the main task-list page
                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect('/task-list');
            } else if (request.payload.add) {
                // Save the release information to the cache and redirect to the add-substances page
                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect('/transfers/overseas/add');
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

'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const sortSubstances = require('./releases').sortSubstances;
const cacheHelper = require('../common').cacheHelper;
const overseasValidator = require('../../../lib/validator').overseas;
const cacheNames = require('../../../lib/user-cache-policies').names;
const setCompleted = require('../common').setCompleted;

const NEW_TRANSFER_OBJECT = {
    substanceId: null,
    transportationCompanyAddress: {},
    destinationAddress: {},
    uninitialized: {
        substance: true,
        detail: true,
        transportationAddress: true,
        destinationAddress: true
    }
};

const internals = {
    /**
     * Clear any invalid overseas waste transfers
     * @param request
     * @param tasks
     * @return {Promise.<void>}
     */
    clearInvalid: async (request, tasks) => {
        let haveRemoved = false;

        if (tasks.overseasTransfers) {
            delete tasks.currentOverseasWasteTransferIdx;
            haveRemoved = true;
        }

        if (tasks.overseasTransfers) {
            tasks.overseasTransfers.forEach((overseasTransfer, index) => {
                if (overseasValidator(overseasTransfer)) {
                    tasks.overseasTransfers.splice(index, 1);
                    haveRemoved = true;
                }
            });
        }

        if (haveRemoved) {
            await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);
        }

        return tasks;
    },

    addNewOverseasWasteTransfer: async (request, tasks) => {

        if (!tasks.overseasTransfers) {
            tasks.overseasTransfers = [];
        }

        tasks.overseasTransfers.push(NEW_TRANSFER_OBJECT);
        tasks.currentOverseasWasteTransferIdx = tasks.overseasTransfers.length - 1;
        await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);
    },

    /**
     * Locates the appropriate redirection for a given set of validation errors
     * @param validation
     */
    validationLocationMapper: (validation) => {
        if (validation.find(k => k.key === 'substance')) {
            return '/transfers/overseas/add-substance';
        } else if (validation.find(k => k.key.startsWith('detail'))) {
            return '/transfers/overseas/detail';
        } else if (validation.find(k => k.key.startsWith('transportation-co-address'))) {
            return '/transfers/overseas/transportation-co-address';
        } else if (validation.find(k => k.key.startsWith('destination-address'))) {
            return '/transfers/overseas/destination-address';
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
            const {route, tasks} = await cacheHelper(request, 'overseas');
            const transfer = tasks.overseasTransfers[tasks.currentOverseasWasteTransferIdx];

            if (!tasks.overseasTransfers || tasks.overseasTransfers.length === 0) {
                throw new CacheKeyError('Expected overseas waste transfer object');
            }

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
                    await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);

                    reply.redirect(internals.validationLocationMapper(validation));
                } else {
                    delete transfer.errors;
                    await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);

                    // If the object is valid redirect to the transfer check page
                    reply.redirect('/transfers/overseas/check');
                }

            }
        } catch (err) {
            if (err instanceof CacheKeyError) {
                logger.debug(err);
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    },

    /**
     * Do a fetch on the transfer entities for the main transfer screen
     * @param transfer
     * @returns {Promise.<void>}
     */
    enrich: async (transfer) => {
        transfer.method = await MasterDataService.getMethodById(transfer.methodId);
        transfer.substance = await MasterDataService.getSubstanceById(transfer.substanceId);
        transfer.operation = await MasterDataService.getTransferOperationById(transfer.operationId);
        return transfer;
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
            const { route, tasks, permitStatus } = await cacheHelper(request, 'overseas');

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
                    setCompleted(request, permitStatus, route);
                    reply.redirect(route.page);
                } else {
                    setCompleted(request, permitStatus, route, true);
                    reply.redirect('/task-list');
                }
            }

        } catch (err) {
            if (err instanceof CacheKeyError) {
                logger.debug(err);
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

            // Remove any invalid overseas transfer objects due to unexpected navigation
            await internals.clearInvalid(request, tasks);

            if (request.method === 'get') {
                if (!tasks.overseasTransfers || tasks.overseasTransfers.length === 0) {
                    reply.redirect('/transfers/overseas/add');
                } else {
                    const enrichedTransfers = await Promise.all(tasks.overseasTransfers.map(async t => internals.enrich(t)));
                    reply.view('all-sectors/report/overseas', { transfers: enrichedTransfers });
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
     * The add sequence. Redundant redirection is a deliberate decision to seperate
     * the action of adding a new transfer and selecting the substance
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    add: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'overseas');
            await internals.addNewOverseasWasteTransfer(request, tasks);
            reply.redirect('/transfers/overseas/add-substance');
        } catch (err) {
            if (err instanceof CacheKeyError) {
                logger.debug(err);
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    },

    /**
     * The substance handler
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    substance: async (request, reply) => {
        await internals.overseasStageHandler(request, reply, async (route, tasks, transfer) => {

            // Get a list of all of the substances from the master data service
            let substances = await MasterDataService.getSubstances();
            let substanceErrors = null;

            substances = substances.sort(sortSubstances);

            if (!transfer.uninitialized.substance) {
                if (transfer.errors) {
                    substanceErrors = transfer.errors.filter(k => k.key === 'substance');
                }
            }

            reply.view('all-sectors/report/add-substance', { route: route, substances: substances, errors: substanceErrors });
        }, async (route, tasks, transfer) => {
            transfer.substanceId = null;
            delete transfer.uninitialized.substance;
            if (request.payload.substanceId) {
                const substance = await MasterDataService.getSubstanceById(Number.parseInt(request.payload['substanceId']));

                // Add the selected substances to the task if it exists
                if (substance) {

                    // Assign this substance to the transfer object
                    transfer.substanceId = substance.id;
                }
            }
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

            let detailErrors = null;
            if (!transfer.uninitialized.detail) {
                if (transfer.errors) {
                    detailErrors = transfer.errors.filter(k => k.key.startsWith('detail'));
                }
            }

            reply.view('all-sectors/report/overseas-detail', {
                methods: await MasterDataService.getMethods(),
                operations: await MasterDataService.getTransferOperations(),
                transfer: await internals.enrich(transfer),
                errors: detailErrors
            });

        }, async (route, tasks, transfer) => {
            const { value, operationId, methodId } = request.payload;
            const operation = await MasterDataService.getTransferOperationById(Number.parseInt(operationId));
            const method = await MasterDataService.getMethodById(Number.parseInt(methodId));
            delete transfer.uninitialized.detail;
            transfer.operationId = operation ? operation.id : null;
            transfer.methodId = method ? method.id : null;
            transfer.value = value;
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

            let transportationAddressErrors = null;
            if (!transfer.uninitialized.transportationAddress) {
                if (transfer.errors) {
                    transportationAddressErrors = transfer.errors
                        .filter(k => k.key.startsWith('transportation-co-address'))
                        .map(v => { return { errno: v.errno, key: v.key.split('.')[1] }; });
                }
            }

            reply.view('all-sectors/business-address', {
                action: '/transfers/overseas/transportation-co-address',
                id: 'TRANSPORTATION_COMPANY_ADDRESS',
                errors: transportationAddressErrors,
                address: transfer.transportationCompanyAddress
            });

        }, async (route, tasks, transfer) => {
            delete transfer.uninitialized.transportationAddress;
            transfer.transportationCompanyAddress.addressLine1 = request.payload['address-line-1'].trim();
            transfer.transportationCompanyAddress.addressLine2 = request.payload['address-line-2'].trim();
            transfer.transportationCompanyAddress.businessName = request.payload['business-name'].trim();
            transfer.transportationCompanyAddress.country = request.payload['country'].trim();
            transfer.transportationCompanyAddress.townOrCity = request.payload['town-or-city'].trim();
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

            let destinationAddressErrors = null;
            if (!transfer.uninitialized.destinationAddress) {
                if (transfer.errors) {
                    destinationAddressErrors = transfer.errors
                        .filter(k => k.key.startsWith('destination-address'))
                        .map(v => { return { errno: v.errno, key: v.key.split('.')[1] }; });
                }
            }

            reply.view('all-sectors/business-address', {
                action: '/transfers/overseas/destination-address',
                id: 'DESTINATION_ADDRESS',
                errors: destinationAddressErrors,
                address: transfer.destinationAddress
            });

        }, async (route, tasks, transfer) => {
            delete transfer.uninitialized.destinationAddress;
            transfer.destinationAddress.addressLine1 = request.payload['address-line-1'].trim();
            transfer.destinationAddress.addressLine2 = request.payload['address-line-2'].trim();
            transfer.destinationAddress.businessName = request.payload['business-name'].trim();
            transfer.destinationAddress.country = request.payload['country'].trim();
            transfer.destinationAddress.townOrCity = request.payload['town-or-city'].trim();
        });
    },

    /**
     * Check (and allow modification) of overseas waster transfer
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    check: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'overseas');

            if (!tasks.overseasTransfers || tasks.overseasTransfers.length === 0) {
                throw new CacheKeyError('Expected overseas waste transfer object');
            }

            if (request.method === 'get') {
                const transfer = tasks.overseasTransfers[tasks.currentOverseasWasteTransferIdx];
                await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);
                const enrichedTransfer = await internals.enrich(transfer);
                reply.view('all-sectors/report/overseas-check', { transfer: enrichedTransfer });
            } else {
                reply.redirect('/transfers/overseas');
            }

        } catch (err) {
            if (err instanceof CacheKeyError) {
                logger.debug(err);
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    },

    /**
     * Form action
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    action: async (request, reply) => {
        try {
            const { tasks, permitStatus, route } = await cacheHelper(request, 'overseas');

            // If we continue we will need to validate the submission
            if (request.payload.continue) {

                setCompleted(request, permitStatus, route, true);
                reply.redirect('/task-list');

            } else if (Object.keys(request.payload).find(s => s.startsWith('check'))) {

                const transferIndex = Number.parseInt(Object.keys(request.payload)
                    .find(s => s.startsWith('check')).substr(6));

                tasks.currentOverseasWasteTransferIdx = transferIndex;
                await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);
                reply.redirect('/transfers/overseas/check');

            } else if (Object.keys(request.payload).find(s => s.startsWith('delete'))) {

                const transferIndex = Number.parseInt(Object.keys(request.payload)
                    .find(s => s.startsWith('delete')).substr(7));

                // Send to delete confirmation dialog
                tasks.currentOverseasWasteTransferIdx = transferIndex;
                await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);
                reply.redirect('/transfers/overseas/remove');
            }

        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    },

    /**
     * Remove action
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    remove: async (request, reply) => {
        try {
            const { tasks, route } = await cacheHelper(request, 'overseas');

            if (!tasks.overseasTransfers || tasks.overseasTransfers.length === 0) {
                throw new CacheKeyError('Expected overseas waste transfer object');
            }

            if (request.method === 'get') {
                reply.view('all-sectors/report/confirm-delete', {
                    route: route,
                    transfer: await internals.enrich(tasks.overseasTransfers[tasks.currentOverseasWasteTransferIdx])
                });
            } else {
                tasks.overseasTransfers.splice(tasks.currentOverseasWasteTransferIdx, 1);
                await request.server.app.userCache.cache(cacheNames.TASK_STATUS).set(request, tasks);
                if (tasks.overseasTransfers.length > 0) {
                    reply.redirect('/transfers/overseas');
                } else {
                    reply.redirect('/task-list');
                }
            }

        } catch (err) {
            if (err instanceof CacheKeyError) {
                logger.debug(err);
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    }
};

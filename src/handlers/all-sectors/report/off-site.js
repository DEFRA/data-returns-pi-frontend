'use strict';

/**
 * Route handlers for reporting off-site waste transfers
 */
const _ = require('lodash');
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const cacheHelper = require('../common').cacheHelper;
const Validator = require('../../../lib/validator');

const internals = {
    /**
     * Test if a given offsite waste transfer already exists in the tasks cache
     * @param tasks - The tasks cache
     * @param offsiteTransfer - The
     * @return {*}
     */
    findOffsiteTransfer: (tasks, offsiteTransfer) => {
        try {
            return tasks.offsiteTransfers.findIndex(t =>
                t.ewc.activityId === offsiteTransfer.ewc.activityId &&
                t.ewc.chapterId === offsiteTransfer.ewc.chapterId &&
                t.ewc.subChapterId === offsiteTransfer.ewc.subChapterId &&
                (t.wfd.disposalId === offsiteTransfer.wfd.disposalId ||
                    t.wfd.recoveryId === offsiteTransfer.wfd.recoveryId));
        } catch (err) {
            return false;
        }
    }
};

module.exports = {
    confirm: async (request, reply) => {
        try {
            const { route } = await cacheHelper(request, 'off-site');

            if (request.method === 'get') {
                reply.view('all-sectors/report/confirm', {
                    route: route.name,
                    selected: false
                });
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
     * Handler for offsite waste transfers
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    offSite: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'off-site');

            if (request.method === 'get') {
                if (!tasks.offsiteTransfers || tasks.offsiteTransfers.length === 0) {
                    reply.redirect('/transfers/off-site/add');
                } else {
                    reply.view('all-sectors/report/off-site');
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
     * The off-site add page
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    add: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'off-site');

            if (request.method === 'get') {

                // Display the off site add page (add/change off-site waste transfer)
                reply.view('all-sectors/report/off-site-add');
            } else {

                // Add a new transfers array to the task object if it does not exist
                if (!tasks.offsiteTransfers) {
                    tasks.offsiteTransfers = [];
                }

                let { ewc, wfd, value } = request.payload;
                const ewcCode = await Validator.ewcParse(ewc);

                value = Number.isNaN(Number.parseFloat(value)) ? value : Number.parseFloat(value);

                // Set the disposal and recovery codes
                let disposal = null;
                let recovery = null;

                if (wfd) {
                    disposal = await MasterDataService.getDisposalCode(wfd.toUpperCase());

                    if (!disposal) {
                        recovery = await MasterDataService.getRecoveryCode(wfd.toUpperCase());
                    }
                }

                // Create an off-site waste transfer object
                const offsiteTransfer = {
                    ewc: ewcCode ? {
                        activityId: ewcCode.activityId,
                        chapterId: ewcCode.chapterId,
                        subChapterId: ewcCode.subChapterId
                    } : null,

                    wfd: { disposalId: disposal ? disposal.id : null, recoveryId: recovery ? recovery.id : null },

                    value: value
                };

                const validationErrors = await Validator.offsite(offsiteTransfer);

                let offsiteTransferIdx = internals.findOffsiteTransfer(tasks, offsiteTransfer);

                if (offsiteTransferIdx === -1) {
                    tasks.offsiteTransfers.push(offsiteTransfer);
                    offsiteTransferIdx = 0;
                } else {
                    tasks.offsiteTransfers[offsiteTransferIdx] = _.cloneDeep(offsiteTransfer);
                }

                if (!validationErrors) {
                    // If there are no validation errors saved the tasks and redirect to the off-site waste transfers screen
                    delete tasks.offsiteTransfers[offsiteTransferIdx].error;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect('/transfers/off-site');
                } else {
                    // If there are validation errors saved append the errors to the transfer object and redirect back to the start page
                    tasks.offsiteTransfers[offsiteTransferIdx].error = validationErrors;
                    tasks.currentOffsiteTransferId = offsiteTransferIdx;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect('/transfers/off-site/add');
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

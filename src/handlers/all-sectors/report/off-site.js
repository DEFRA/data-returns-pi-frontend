'use strict';

/**
 * Route handlers for reporting overseas waste transfers
 */
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const cacheHelper = require('../common').cacheHelper;
const Validator = require('../../../lib/validator');

module.exports = {
    confirm: async (request, reply) => {
        try {

            const { route, permitStatus } = await cacheHelper(request, 'off-site');

            if (request.method === 'get') {
                reply.view('all-sectors/report/confirm', {
                    route: route.name,
                    selected: false
                });
            } else {
                // Process the confirmation - set the current route and redirect to the releases page
                if (request.payload.confirmation === 'true') {
                    permitStatus.currentTask = route.name;
                    await request.server.app.userCache.cache('permit-status').set(request, permitStatus);
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
                if (tasks.offsiteTransfers.length === 0) {
                    reply.redirect('/transfers/off-site/detail');
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
     * The off-site detail page
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    detail: async (request, reply) => {
        try {
            // const { tasks } = await cacheHelper(request, 'off-site');

            if (request.method === 'get') {

                // Display the off site detail page (add/change off-site waste transfer)
                reply.view('all-sectors/report/off-site-detail');
            } else {
                const { ewc, wfd, value } = request.payload;
                const ewcCode = await Validator.ewcParse(ewc);

                let disposal = null;
                let recovery = null;

                if (wfd) {
                    disposal = await MasterDataService.getDisposalCode(wfd.toUpperCase());
                    if (!disposal) {
                        recovery = await MasterDataService.getRecoveryCode(wfd.toUpperCase());
                    }
                }

                const offsiteTransfer = {
                    ewc: ewcCode ? { activityId: ewcCode.activityId, chapterId: ewcCode.chapterId, subChapterId: ewcCode.subChapterId } : null,
                    wfd: { disposalId: disposal ? disposal.id : null, recoveryId: recovery ? recovery.id : null },
                    value: value
                };

                const validation = await Validator.offsite(offsiteTransfer);

                reply.redirect('/transfers/off-site/detail');
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

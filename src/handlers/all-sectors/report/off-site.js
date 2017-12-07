'use strict';

/**
 * Route handlers for reporting off-site waste transfers
 */
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const cacheHelper = require('../common').cacheHelper;
const offSiteValidator = require('../../../lib/validator').offSite;

const internals = {

    /**
     * Creates an unvalidated off-site transfer cache object (ids only)
     * @param obj - the page object
     * @return {Promise.<{ewc: {activity: *, chapter: *, subChapter: *}, wfd: {disposal: *, recovery: *}, value}>}
     */
    createOffSiteTransferCacheObject: async (pageObj) => {

        const { ewc, wfd, value } = pageObj;

        let ewcObj;
        let disposal;
        let recovery;

        if (ewc) {
            const expr = new RegExp('^\\s*?(\\d{2})[\\s\\-\\.]*?(\\d{2})[\\s-\\.]*?(\\d{2})\\s*$');
            const matched = ewc.match(expr);

            if (matched) {
                const [, activity, chapter, subChapter] = matched;
                ewcObj = await MasterDataService.getEwc(activity, chapter, subChapter);
            } else {
                ewcObj = null;
            }
        }

        if (wfd) {
            disposal = await MasterDataService.getDisposalCode(wfd.toUpperCase());

            if (!disposal) {
                recovery = await MasterDataService.getRecoveryCode(wfd.toUpperCase());
            }
        }

        return {
            ewc: ewcObj ? {
                activityId: ewcObj.activityId,
                chapterId: ewcObj.chapterId,
                subChapterId: ewcObj.subChapterId
            } : null,

            wfd: disposal || recovery ? {
                disposalId: disposal ? disposal.id : null,
                recoveryId: recovery ? recovery.id : null
            } : null,

            value: Number.isNaN(Number.parseFloat(value)) ? value : Number.parseFloat(value)
        };
    },

    /**
     * Reads the cache (keys and constructs a deep enriched transfer object
     * @param obj - transfer object
     * @return {Promise.<{ewc: {activity: *, chapter: *, subChapter: *}, wfd: {disposal: *, recovery: *}, value}>}
     */
    enrichOffSiteTransferObject: async (obj) => {
        return {
            ewc: {
                activity: await MasterDataService.getEwcActivityById(obj.ewc.activityId),
                chapter: await MasterDataService.getEwcChapterById(obj.ewc.chapterId),
                subChapter: await MasterDataService.getEwcSubChapterById(obj.ewc.subChapterId)
            },

            wfd: {
                disposal: obj.wfd.disposalId ? await MasterDataService.getDisposalById(obj.wfd.disposalId) : null,
                recovery: obj.wfd.recoveryId ? await MasterDataService.getRecoveryById(obj.wfd.recoveryId) : null
            },

            value: obj.value
        };
    },

    /**
     * Sort by the cache object. Relies on the id's to sort. Possibly good enough.
     * @param a
     * @param b
     * @return <number>
     */
    sortOffSiteTransfer: (a, b) => {

        if (a.ewc.activityId < b.ewc.activityId) {
            return -1;
        }

        if (a.ewc.activityId > b.ewc.activityId) {
            return 1;
        }

        if (a.ewc.chapterId < b.ewc.chapterId) {
            return -1;
        }

        if (a.ewc.chapterId > b.ewc.chapterId) {
            return 1;
        }

        if (a.ewc.subChapterId < b.ewc.subChapterId) {
            return -1;
        }

        if (a.ewc.subChapterId > b.ewc.subChapterId) {
            return 1;
        }

        if (a.wfd.disposalId && b.wfd.recoveryId) {
            return -1;
        }

        if (a.wfd.recoveryId && b.wfd.disposalId) {
            return 1;
        }

        if ((a.wfd.disposalId ? a.wfd.disposalId : a.wfd.recoveryId) < (b.wfd.disposalId ? b.wfd.disposalId : b.wfd.recoveryId)) {
            return -1;
        }

        if ((a.wfd.disposalId ? a.wfd.disposalId : a.wfd.recoveryId) > (b.wfd.disposalId ? b.wfd.disposalId : b.wfd.recoveryId)) {
            return 1;
        }

        return 0;
    }
};

module.exports = {

    // Exposed for unit testing
    createOffSiteTransferCacheObject: internals.createOffSiteTransferCacheObject,
    sortOffSiteTransfer: internals.sortOffSiteTransfer,
    enrichOffSiteTransferObject: internals.enrichOffSiteTransferObject,

    /**
     * The challenge page handler
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    confirm: async (request, reply) => {
        try {
            const { route, tasks } = await cacheHelper(request, 'off-site');

            if (request.method === 'get') {
                // If we have off-site transfers then redirect directly to the summary page
                if (tasks && tasks.offSiteTransfers && tasks.offSiteTransfers.length > 0) {
                    reply.redirect('/transfers/off-site');
                } else {
                    reply.view('all-sectors/report/confirm', {
                        route: route.name,
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
     * Handler for off-site waste transfers
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    offSite: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'off-site');

            if (request.method === 'get') {
                if (!tasks.offSiteTransfers || tasks.offSiteTransfers.length === 0) {
                    reply.redirect('/transfers/off-site/add');

                } else {
                    // Enrich the offSiteTransfers object from the master data
                    const transfers = await Promise.all(tasks.offSiteTransfers.map(async t => {
                        return internals.enrichOffSiteTransferObject(t);
                    }));

                    reply.view('all-sectors/report/off-site', { transfers: transfers });
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
                // If we have a transfer then set up the values and any errors
                if (tasks && tasks.currentPageOffSiteTransfer) {

                    // Display the off site add page (add/change off-site waste transfer)
                    reply.view('all-sectors/report/off-site-add', {
                        transfer: tasks.currentPageOffSiteTransfer
                    });
                } else {
                    // Display the off site add page (add/change off-site waste transfer)
                    reply.view('all-sectors/report/off-site-add');
                }

            } else {

                // Add a new transfers array to the task object if it does not exist
                if (!tasks.offSiteTransfers) {
                    tasks.offSiteTransfers = [];
                }

                const { ewc, wfd, value } = request.payload;
                const currentPageOffSiteTransfer = { ewc, wfd, value };
                const currentCacheOffSiteTransferObject = await internals.createOffSiteTransferCacheObject(currentPageOffSiteTransfer);
                const validationErrors = await offSiteValidator(tasks, currentCacheOffSiteTransferObject);

                if (!validationErrors) {
                    // If there are no validation errors saved the tasks and redirect to the off-site waste transfers page
                    tasks.offSiteTransfers.push(currentCacheOffSiteTransferObject);

                    // We need to address this by the array index so we need a deterministic sort
                    tasks.offSiteTransfers.sort(internals.sortOffSiteTransfer);

                    delete tasks.currentPageOffSiteTransfer;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect('/transfers/off-site');
                } else {
                    // If there are validation errors
                    tasks.currentPageOffSiteTransfer = { offSiteTransfer: currentPageOffSiteTransfer, errors: validationErrors };
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

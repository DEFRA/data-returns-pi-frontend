'use strict';

/**
 * Route handlers for reporting off-site waste transfers
 */
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const cacheHelper = require('../common').cacheHelper;
const Validator = require('../../../lib/validator');

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

            value: obj.value,

            errors: obj.errors
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
    },

    /**
     * Save the off-site transfers in the cache
     * @param request
     * @param tasks
     * @returns {Promise.<void>}
     */
    save: (request, tasks) => {
        if (tasks.offSiteTransfers) {
            tasks.offSiteTransfers.forEach((offSiteTransfer, index) => {
                offSiteTransfer.value = request.payload['value-' + index];
            });
        }
    },

    /**
     * Validate the offsite transfers
     * @param request
     * @param tasks
     * @returns {Promise.<boolean>}
     */
    validate: (request, tasks) => {
        if (tasks.offSiteTransfers) {
            let isValid = true;
            tasks.offSiteTransfers.forEach((offSiteTransfer, index) => {
                const validationErrors = Validator.offSite(offSiteTransfer);
                if (validationErrors) {
                    tasks.offSiteTransfers[index].errors = validationErrors;
                    isValid = false;
                } else {
                    delete tasks.offSiteTransfers[index].errors;
                }
            });
            return isValid;
        }

        return true;
    },

    /**
     * Determine if a transfer can be deleted
     * (a) Without warning
     * (b) With warning
     * @param the transfer
     * @return NO_WARN, WARN
     */
    canDelete: (tasks, transfer) => {
        if (Validator.offSite(transfer)) {
            return 'NO_WARN';
        } else {
            return 'WARN';
        }
    },

    /**
     * Remove any invalid off-site transfer objects from the cache
     * @param tasks
     * @param transfer
     * @return {*}
     */
    clearInvalid: async (request, tasks) => {
        let haveRemoved = false;

        if (tasks.currentPageOffSiteTransfer) {
            delete tasks.currentPageOffSiteTransfer;
            haveRemoved = true;
        }

        if (tasks.offSiteTransfers) {
            tasks.offSiteTransfers.forEach((offSiteTransfer, index) => {
                if (Validator.offSite(offSiteTransfer)) {
                    tasks.offSiteTransfers.splice(index, 1);
                    haveRemoved = true;
                }
            });
        }

        if (haveRemoved) {
            await request.server.app.userCache.cache('tasks').set(request, tasks);
        }

        return tasks;
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

                // Firstly remove any invalid off-site transfer objects due to unexpected navigation
                await internals.clearInvalid(request, tasks);

                // If we have off-site transfers then redirect directly to the summary page
                if (tasks && tasks.offSiteTransfers && tasks.offSiteTransfers.length > 0) {
                    reply.redirect('/transfers/off-site');
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
                const validationErrors = await Validator.offSiteAdd(tasks, currentCacheOffSiteTransferObject);

                if (!validationErrors) {
                    // If there are no validation errors saved the tasks and redirect to the off-site waste transfers page
                    delete currentCacheOffSiteTransferObject.errors;
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
    },

    // The submit actions on the form
    action: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'off-site');

            // Save the submission
            await internals.save(request, tasks);

            // If we continue we will need to validate the submission
            if (request.payload.continue) {

                // Test if the releases are valid
                if (internals.validate(request, tasks)) {
                    // Write the (removed) validations to the cache
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect('/task-list');
                } else {
                    // Update the cache with the validation objects and redirect back to the page
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect('/transfers/off-site');
                }

            } else if (Object.keys(request.payload).find(s => s.startsWith('detail'))) {
                const transferIndex = Number.parseInt(Object.keys(request.payload)
                    .find(s => s.startsWith('detail')).substr(7));

                tasks.currentoffSiteTransferIndex = transferIndex;

                // Save the changes to the transfers and redirect to the detail page
                await request.server.app.userCache.cache('tasks').set(request, tasks);

                reply.redirect('/transfers/off-site/detail');

            } else if (Object.keys(request.payload).find(s => s.startsWith('delete'))) {
                const transferIndex = Number.parseInt(Object.keys(request.payload)
                    .find(s => s.startsWith('delete')).substr(7));

                switch (internals.canDelete(tasks, tasks.offSiteTransfers[transferIndex])) {

                    case 'NO_WARN':
                        // Save the current substance
                        tasks.offSiteTransfers.splice(transferIndex, 1);
                        await request.server.app.userCache.cache('tasks').set(request, tasks);
                        reply.redirect('/transfers/off-site');
                        break;

                    case 'WARN':
                        // Send to delete confirmation dialog
                        tasks.currentoffSiteTransferIndex = transferIndex;
                        await request.server.app.userCache.cache('tasks').set(request, tasks);
                        reply.redirect('/transfers/off-site/remove');
                        break;

                    default:
                        reply.redirect('/task-list');
                        break;
                }

            } else if (request.payload.back) {
                // Save the release information to the cache and return to the main task-list page
                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect('/task-list');
            } else if (request.payload.add) {
                // Save the release information to the cache and redirect to the add-substances page
                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect('/transfers/off-site/add');
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
     * Remove an off-site transfer
     * @param request
     * @param reply
     * @returns {Promise.<void>}
     */
    remove: async (request, reply) => {
        try {
            const { route, tasks } = await cacheHelper(request, 'off-site');

            if (request.method === 'get') {
                reply.view('all-sectors/report/confirm-delete', {
                    route: route,
                    transfer: await internals.enrichOffSiteTransferObject(tasks.offSiteTransfers[tasks.currentoffSiteTransferIndex])
                });
            } else {
                tasks.offSiteTransfers.splice(tasks.currentoffSiteTransferIndex, 1);
                await request.server.app.userCache.cache('tasks').set(request, tasks);
                if (tasks.offSiteTransfers.length > 0) {
                    reply.redirect('/transfers/off-site');
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
     * Show the detail page of off-site transfer
     * @param request
     * @param reply
     * @returns {Promise.<void>}
     */
    detail: async (request, reply) => {
        try {
            const { tasks } = await cacheHelper(request, 'off-site');
            const transfer = await internals.enrichOffSiteTransferObject(tasks.offSiteTransfers[tasks.currentoffSiteTransferIndex]);

            if (request.method === 'get') {
                reply.view('all-sectors/report/off-site-detail', { transfer: transfer });
            } else {
                tasks.offSiteTransfers[tasks.currentoffSiteTransferIndex].value = request.payload.value;
                const validation = Validator.offSite(tasks.offSiteTransfers[tasks.currentoffSiteTransferIndex]);
                if (validation) {
                    tasks.offSiteTransfers[tasks.currentoffSiteTransferIndex].errors = validation;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect('/transfers/off-site/detail');
                } else {
                    delete tasks.offSiteTransfers[tasks.currentoffSiteTransferIndex].errors;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect('/transfers/off-site');
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

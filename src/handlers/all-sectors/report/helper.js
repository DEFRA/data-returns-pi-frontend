'use strict';

/**
 * Common functions for route handlers
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Process the confirmation pages
     * @param request
     * @param task
     * @param stageStatus - the
     * @return {Promise.<boolean>}
     */
    processConfirmations: async (request, reply, task) => {
        try {
            const stageStatus = await request.server.app.userCache.cache('permit-status').get(request);
            if (request.method === 'get') {
                // Display the releases to air confirmation page
                reply.view('all-sectors/report/confirm', { task: task.name, selected: stageStatus[task.name].supplied });
            } else {
                // Process the confirmation
                if (request.payload.confirmation === 'true') {
                    if (!stageStatus[task.name].supplied) {
                        stageStatus[task.name].supplied = true;
                        stageStatus.currentTask = task.name;
                        await request.server.app.userCache.cache('permit-status').set(request, stageStatus);
                    }
                    reply.redirect(task.uri);
                } else {
                    if (stageStatus[task.name].supplied) {
                        stageStatus[task.name].supplied = false;
                        await request.server.app.userCache.cache('permit-status').set(request, stageStatus);
                    }
                    reply.redirect('/all-sectors');
                }
            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    },

    /**
     * Handler for the main substance submission page
     * @param request
     * @param reply
     * @param task
     * @return {Promise.<void>}
     */
    substances: async (request, reply, task) => {
        try {
            // Get the submission status object or create a new one
            const eaId = await request.server.app.userCache.cache('submission-status').get(request);

            if (!eaId) {
                throw new Error('No cached status object found');
            }

            reply.view('all-sectors/report/substances', { task: task.name, eaId: eaId.name });
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

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
                return reply.view('all-sectors/report/confirm', { task: task.name, selected: stageStatus[task.name].supplied });
            } else {
                // Process the confirmation
                if (request.payload.confirmation === 'true') {
                    if (!stageStatus[task.name].supplied) {
                        stageStatus[task.name].supplied = true;
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
    }
};

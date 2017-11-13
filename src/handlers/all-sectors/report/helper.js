'use strict';

/**
 * Common functions for route handlers
 */
const logger = require('../../../lib/logging').logger;

let internals = {};

module.exports = internals = {
    /**
     * Used to identify the current submission task type
     */
    tasks: {
        RELEASES_TO_AIR: { uri: '/air' },
        RELEASES_TO_LAND: { uri: '/land' },
        OFFSITE_TRANSFERS_IN_WASTE_WATER: { uri: '/waste-water' },
        RELEASES_TO_CONTROLLED_WATERS: { uri: '/water' }
    },

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

            if (!stageStatus) {
                throw new Error('Unexpected cache error reading stage status');
            }

            if (request.method === 'get') {
                // Display the releases to air confirmation page
                reply.view('all-sectors/report/confirm', { task: task, selected: stageStatus[task].supplied });
            } else {
                // Process the confirmation
                if (request.payload.confirmation === 'true') {
                    if (!stageStatus[task].supplied) {
                        stageStatus[task].supplied = true;
                        stageStatus.currentTask = task;
                        await request.server.app.userCache.cache('permit-status').set(request, stageStatus);
                    }
                    reply.redirect(internals.tasks[task].uri);
                } else {
                    if (stageStatus[task].supplied) {
                        stageStatus[task].supplied = false;
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
            // Get the task-status object or create a new one
            const eaId = await request.server.app.userCache.cache('submission-status').get(request);

            if (!eaId) {
                throw new Error('No cached status object found');
            }

            const tasks = await request.server.app.userCache.cache('tasks').get(request);

            if (!tasks) {
                request.server.app.userCache.cache('tasks').set(request, { substances: {} });
            }

            reply.view('all-sectors/report/substances', { task: task, eaId: eaId.name });
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

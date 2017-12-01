'use strict';

/**
 * Route handlers for reporting overseas waste transfers
 */
const logger = require('../../../lib/logging').logger;
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const TaskListService = require('../../../service/task-list');
const AllSectorsTaskList = require('../../../model/all-sectors/task-list');

const route = TaskListService.mapByPathParameter(AllSectorsTaskList).get('off-site');

module.exports = {
    confirm: async (request, reply) => {
        try {
            const permitStatus = await request.server.app.userCache.cache('permit-status').get(request);
            const eaId = await request.server.app.userCache.cache('submission-status').get(request);

            if (!permitStatus || !eaId) {
                throw new CacheKeyError('invalid cache state');
            }

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

            const tasks = await request.server.app.userCache.cache('tasks').get(request) ||
                await TaskListService.newTasksObject(AllSectorsTaskList, request);

            console.log(tasks);
            /*
             *
             * tasks.offsiteTransfers
             * console.log(tasks);
             */

            reply.view('all-sectors/report/off-site');
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

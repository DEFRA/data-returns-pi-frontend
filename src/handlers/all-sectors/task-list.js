'use strict';

const MasterDataService = require('../../service/master-data');
const allSectorsTaskList = require('../../model/all-sectors/task-list');
const TaskListService = require('../../service/task-list');
// const taskListNames = require('../../service/task-list').names(allSectorsTaskList);
const setCompletedStatus = require('./common').setCompletedStatus;
const errHdlr = require('../../lib/utils').generalErrorHandler;

const CacheKeyError = require('../../lib/user-cache-policies').CacheKeyError;
const cacheNames = require('../../lib/user-cache-policies').names;

/**
 * Route handlers for the all-sectors journey
 */
module.exports = {
    /**
     * All sectors task-list handler
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */
    taskList: async (request, h) => {
        try {
            // Get the submission status object or create a new one
            const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);

            // If no permit is selected redirect back to the start page
            if (!userContext) {
                throw new CacheKeyError('Expected permit');
            }

            const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

            const regimeTree = await MasterDataService.getRegimeTreeById(userContext.eaId.regime.id);

            // Get appropriate the task list
            const tasks = TaskListService.getTaskList(allSectorsTaskList, regimeTree);

            // Always re-calculate the completed status
            submissionContext.completed = {};
            for (const name of Object.keys(tasks)) {
                setCompletedStatus(submissionContext, name);
            }

            // Write the calculated status back to the cache
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);

            return h.view('all-sectors/task-list', {
                eaId: userContext.eaId,
                tasks: tasks,
                submissionContext: submissionContext
            });

        } catch (err) {
            return errHdlr(err, h);
        }
    }
};

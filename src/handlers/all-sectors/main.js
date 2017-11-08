'use strict';

// const journey = require('../../lib/task-list');
const allSectorsTaskList = require('../../model/all-sectors/task-list');
const logger = require('../../lib/logging').logger;

/**
 * Route handlers for the all-sectors journey
 */
module.exports = {
    /**
     * All sectors task-list handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    task_list: async (request, reply) => {
        try {
            // Get the submission status object or create a new one
            const eaId = await request.server.app.userCache.cache('submission-status').get(request);

            if (!eaId) {
                throw new Error('No cached status object found');
            }

            reply.view('all-sectors/task-list', { eaId: eaId.name, taskList: allSectorsTaskList });
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }

};

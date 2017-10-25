'use strict';

const journey = require('../../lib/task-list');

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
    task_list: (request, reply) => {
        return reply.view('all-sectors/task-list', journey.taskList);
    }

};

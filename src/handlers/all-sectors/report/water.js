'use strict';

/**
 * Route handlers for reporting releases to controlled waters
 */
const Helper = require('./helper');

// This maps to the task name in the task-list object
const TASK = 'RELEASES_TO_CONTROLLED_WATERS';

module.exports = {
    /**
     * Report releases to controlled waters - confirmation page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    waterConfirm: async (request, reply) => {
        await Helper.processConfirmations(request, reply, TASK);
    },

    /**
     * Report releases to controlled waters
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    water: async (request, reply) => {
        await Helper.substances(request, reply, TASK);
    }
};

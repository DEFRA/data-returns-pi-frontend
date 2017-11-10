'use strict';

/**
 * Route handlers for reporting releases to air
 */
const Helper = require('./helper');

// This maps to the task name in the task-list object
const TASK = 'RELEASES_TO_AIR';

module.exports = {
    /**
     * Report releases to air - confirmation page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    airConfirm: async (request, reply) => {
        await Helper.processConfirmations(request, reply, TASK);
    },

    /**
     * Report releases to air
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    air: async (request, reply) => {
        await Helper.substances(request, reply, TASK);
    }
};

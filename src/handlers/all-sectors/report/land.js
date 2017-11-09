'use strict';

/**
 * Route handlers for reporting releases to land
 */
const Helper = require('./helper');

// This maps to the task name in the task-list object
const TASK = { name: 'RELEASES_TO_LAND', uri: '/land' };

module.exports = {
    /**
     * Report releases to land - confirmation page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    landConfirm: async (request, reply) => {
        await Helper.processConfirmations(request, reply, TASK);
    },

    /**
     * Report releases to land
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    land: async (request, reply) => {
        await Helper.substances(request, reply, TASK);
    }
};

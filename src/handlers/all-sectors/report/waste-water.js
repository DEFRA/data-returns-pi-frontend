'use strict';

/**
 * Route handlers for reporting off-site releases in waste water
 */
const Helper = require('./helper');

// This maps to the task name in the task-list object
const TASK = 'OFFSITE_TRANSFERS_IN_WASTE_WATER';

module.exports = {
    /**
     * Report releases offsite in waste water - confirmation page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    wasteWaterConfirm: async (request, reply) => {
        await Helper.processConfirmations(request, reply, TASK);
    },

    /**
     * Releases in off site waste water
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    wasteWater: async (request, reply) => {
        await Helper.substances(request, reply, TASK);
    }
};

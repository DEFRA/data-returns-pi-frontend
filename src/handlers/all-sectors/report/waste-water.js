'use strict';

/**
 * Route handlers for reporting off-site releases in waste water
 */
const logger = require('../../../lib/logging').logger;
const Helper = require('./helper');

// This maps to the task name in the task-list object
const TASK = { name: 'OFFSITE_TRANSFERS_IN_WASTE_WATER', uri: '/waste-water' };

module.exports = {
    /**
     * Report releases offsite in waste water - confirmation page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    wasteWaterConfirm: async (request, reply) => {
        Helper.processConfirmations(request, reply, TASK);
    },
    /**
     * Releases in off site waste water
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    wasteWater: async (request, reply) => {
        try {
            return reply.view('all-sectors/report/waste-water');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

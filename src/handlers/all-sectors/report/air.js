'use strict';

/**
 * Route handlers for reporting releases to air
 */
const logger = require('../../../lib/logging').logger;
const Helper = require('./helper');

// This maps to the task name in the task-list object
const TASK = { name: 'RELEASES_TO_AIR', uri: '/air' };

module.exports = {
    /**
     * Report releases to air - confirmation page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    airConfirm: async (request, reply) => {
        Helper.processConfirmations(request, reply, TASK);
    },
    /**
     * Report releases to air
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    air: async (request, reply) => {
        try {
            return reply.view('all-sectors/report/air');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

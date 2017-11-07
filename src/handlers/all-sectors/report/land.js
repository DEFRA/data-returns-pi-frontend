'use strict';

/**
 * Route handlers for reporting releases to land
 */
const logger = require('../../../lib/logging').logger;
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
        Helper.processConfirmations(request, reply, TASK);
    },

    /**
     * Report releases to land
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    land: async (request, reply) => {
        try {
            return reply.view('all-sectors/report/land');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

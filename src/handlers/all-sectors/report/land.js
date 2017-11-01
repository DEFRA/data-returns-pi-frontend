'use strict';

/**
 * Route handlers for reporting releases to land
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
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

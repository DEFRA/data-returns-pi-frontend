'use strict';

/**
 * Route handlers for reporting releases to air
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
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

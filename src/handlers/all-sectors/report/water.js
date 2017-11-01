'use strict';

/**
 * Route handlers for reporting releases to controlled waters
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Report releases to controlled waters
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    water: async (request, reply) => {
        try {
            return reply.view('all-sectors/report/water');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

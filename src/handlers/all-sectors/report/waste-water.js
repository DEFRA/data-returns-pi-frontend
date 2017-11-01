'use strict';

/**
 * Route handlers for reporting off-site releases in waste water
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
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

'use strict';

/**
 * Route handlers for reporting overseas waste transfers
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Handler for offsite waste transfers
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    offSite: async (request, reply) => {
        try {
            return reply.view('all-sectors/report/off-site');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

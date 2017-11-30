'use strict';

/**
 * Route handlers for confirmation of site details
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Confirm site details
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    site: async (request, reply) => {
        try {
            reply.view('all-sectors/check/site');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

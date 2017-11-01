'use strict';

/**
 * Route handlers for confirmation of contact details
 */

const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Confirm contact handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    contact: async (request, reply) => {
        try {
            return reply.view('all-sectors/check/contact');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

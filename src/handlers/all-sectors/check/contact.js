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
            reply.view('all-sectors/check/contact');
        } catch (err) {
            logger.log('error', err.message);
            reply.redirect('/logout');
        }
    }
};

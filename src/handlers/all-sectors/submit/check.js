'use strict';

/**
 * Route handlers for check your submission
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Confirm submission handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    check: async (request, reply) => {
        try {
            reply.view('all-sectors/submit/check');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/');
        }
    }
};

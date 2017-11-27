'use strict';

/**
 * Route handlers for reporting share your data
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Confirm share handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    share: async (request, reply) => {
        try {
            reply.view('all-sectors/submit/share');
        } catch (err) {
            logger.log('error', err.message);
            reply.redirect('/logout');
        }
    }
};

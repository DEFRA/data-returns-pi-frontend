'use strict';

/**
 * Route handlers for reporting share your data
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Confirm share handler
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */
    share: async (request, h) => {
        try {
            return h.view('all-sectors/submit/share');
        } catch (err) {
            logger.log('error', err);
            return h.redirect('/');
        }
    }
};

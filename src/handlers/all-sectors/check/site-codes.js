'use strict';

/**
 * Route handlers for reporting share your data
 */
const cacheHelper = require('../common').cacheHelper;
const errHdlr = require('../../../lib/utils').generalErrorHandler;

module.exports = {
    /**
     * Confirm site-code handler
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */
    confirm: async (request, h) => {
        try {
            await cacheHelper(request, 'site-codes');
            return h.view('all-sectors/check/confirm-site-codes');
        } catch (err) {
            return errHdlr(err, h);
        }
    }
};

'use strict';

/**
 * Route handlers for reporting off site waste transfers
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Handler for overseas waste transfers
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    overseas: async (request, reply) => {
        try {
            reply.view('all-sectors/report/overseas');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

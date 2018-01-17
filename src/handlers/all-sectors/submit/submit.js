'use strict';

/**
 * Route handlers for submit your report
 */
const logger = require('../../../lib/logging').logger;

module.exports = {
    /**
     * Declaration and submission handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    submit: async (request, reply) => {
        try {
            if (request.method === 'get') {
                reply.view('all-sectors/submit/submit');
            } else {
                // We have confirmed the submission so send data to the API

            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/');
        }
    }
};

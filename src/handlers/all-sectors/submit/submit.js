'use strict';

/**
 * Route handlers for submit your report
 */
const logger = require('../../../lib/logging').logger;
const Submission = require('../../../lib/submission');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const allSectorsTaskList = require('../../../model/all-sectors/task-list');
const required = require('../../../service/task-list').required(allSectorsTaskList);
const cacheHelper = require('../common').cacheHelper;
const setConfirmation = require('../common').setConfirmation;

module.exports = {
    /**
     * Declaration and submission handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    submit: async (request, reply) => {
        try {
            const { route, submissionContext } = await cacheHelper(request, 'submit');

            if (request.method === 'get') {
                const completed = Object.keys(submissionContext.completed).filter(p => submissionContext.completed[p]);
                const canSubmit = required.every(r => { return completed.find(c => c === r); });
                await setConfirmation(request, submissionContext, route, false);
                reply.view('all-sectors/submit/submit', { canSubmit: canSubmit });
            } else {
                // We have confirmed the submission so send data to the API
                await Submission.submit(request);

                // Back to the start page
                reply.redirect('/');
            }
        } catch (err) {
            if (err instanceof CacheKeyError) {
                logger.debug(err);
                reply.redirect('/');
            } else {
                logger.error(err);
                reply.redirect('/logout');
            }
        }
    }
};

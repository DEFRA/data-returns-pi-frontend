'use strict';

/**
 * Route handlers for submit your report
 */
const logger = require('../../../lib/logging').logger;
const Submission = require('../../../lib/submission');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const allSectorsTaskList = require('../../../model/all-sectors/task-list');
const required = require('../../../service/task-list').required(allSectorsTaskList).map(n => n.name);
const cacheHelper = require('../common').cacheHelper;

module.exports = {
    /**
     * Declaration and submission handler
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */
    submit: async (request, h) => {
        try {
            const { submissionContext } = await cacheHelper(request, 'submit');

            if (request.method === 'get') {
                const completed = Object.keys(submissionContext.completed).filter(p => submissionContext.completed[p]);
                const canSubmit = required.every(r => { return completed.find(c => c === r); });
                return h.view('all-sectors/submit/submit', { canSubmit: canSubmit });
            } else {
                // We have confirmed the submission so send data to the API
                await Submission.submit(request);

                // Back to the start page
                return h.redirect('/');
            }
        } catch (err) {
            if (err instanceof CacheKeyError) {
                logger.debug(err);
                return h.redirect('/');
            } else {
                logger.error(err);
                return h.redirect('/logout');
            }
        }
    }
};

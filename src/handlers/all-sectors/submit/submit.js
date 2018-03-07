'use strict';

/**
 * Route handlers for submit your report
 */
const Submission = require('../../../lib/submission');
const allSectorsTaskList = require('../../../model/all-sectors/task-list');
const required = require('../../../service/task-list').required(allSectorsTaskList).map(n => n.name);
const cacheHelper = require('../common').cacheHelper;
const errHdlr = require('../../../lib/utils').generalErrorHandler;

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
            return errHdlr(err, h);
        }
    }
};

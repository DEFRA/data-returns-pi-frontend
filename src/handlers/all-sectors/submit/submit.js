'use strict';

/**
 * Route handlers for submit your report
 */
const logger = require('../../../lib/logging').logger;
const Submission = require('../../../lib/submission');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const allSectorsTaskList = require('../../../model/all-sectors/task-list');
const required = require('../../../service/task-list').required(allSectorsTaskList);
const cacheNames = require('../../../lib/user-cache-policies').names;

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
                const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);
                const completed = Object.keys(permitStatus.completed).filter(p => permitStatus.completed[p]);
                const canSubmit = required.every(r => { return completed.find(c => c === r); });

                reply.view('all-sectors/submit/submit', { canSubmit: canSubmit });
            } else {
                // We have confirmed the submission so send data to the API
                await Submission.submit(request);
                reply.redirect('/task-list');
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

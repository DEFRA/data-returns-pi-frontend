'use strict';

// const journey = require('../../lib/task-list');
const allSectorsTaskList = require('../../model/all-sectors/task-list');
const logger = require('../../lib/logging').logger;
const CacheKeyError = require('../../lib/user-cache-policies').CacheKeyError;
const cacheNames = require('../../lib/user-cache-policies').names;
/**
 * Route handlers for the all-sectors journey
 */
module.exports = {
    /**
     * All sectors task-list handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    taskList: async (request, reply) => {
        try {
            // Get the submission status object or create a new one
            const eaId = await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).get(request);

            // If no permit is selected redirect back to the start page
            if (!eaId) {
                throw new CacheKeyError('Expected permit');
            }

            const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);
            console.log(JSON.stringify(permitStatus));

            reply.view('all-sectors/task-list', { eaId: eaId.name, taskList: allSectorsTaskList });
        } catch (err) {
            if (err instanceof CacheKeyError) {
                // Probably due to unexpected navigation
                logger.debug('error', err);
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    }
};

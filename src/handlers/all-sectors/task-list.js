'use strict';

// const journey = require('../../lib/task-list');
const allSectorsTaskList = require('../../model/all-sectors/task-list');
const taskListNames = require('../../service/task-list').names(allSectorsTaskList);

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

            // Always re-calculate the completed status
            permitStatus.completed = {};
            for (const name of taskListNames) {

                // Calculate the permit status completed flag for each route
                permitStatus.completed[name] = false;

                // Deemed valid if no validity status or validity status true
                const valid = permitStatus.valid[name] === undefined || permitStatus.valid[name];

                // Completed if confirmed and challenged no - in this case there may or may not be a validation
                if (permitStatus.confirmation[name] && !permitStatus.challengeStatus[name] && valid) {
                    permitStatus.completed[name] = true;
                }

                // Completed if confirmed and challenged yes and valid
                if (permitStatus.confirmation[name] && permitStatus.challengeStatus[name] && valid) {
                    permitStatus.completed[name] = true;
                }

                // Write the calculated status back to the cache
                await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
            }

            reply.view('all-sectors/task-list', { eaId: eaId.name, taskList: allSectorsTaskList, permitStatus: permitStatus });
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

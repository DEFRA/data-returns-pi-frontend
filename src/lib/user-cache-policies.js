'use strict';

const UserCache = require('./user-cache');

class CacheKeyError extends Error {
    constructor (message) {
        super(`User cache error: ${message}`);
        this.name = 'UserCacheError';
    }
};

const names = {
    USER_CONTEXT: 'user-context',
    SUBMISSION_CONTEXT: 'submission-context',
    TASK_CONTEXT: 'task-context',
    UNIT_TEST: 'unit-test'
};

/**
 * This module is a definition of the user cache keys and cache names.
 */
const internals = {

    userContext: {
        name: names.USER_CONTEXT,
        /**
         * Returns a key of the form userid.submission-year to handle
         * all submission level artifacts
         * @param request
         * @return {Promise.<string>}
         */
        keyFunc: async (request) => {
            try {
                const session = await request.server.app.cache.get(request.auth.artifacts.sid);
                return String(session.user.id);
            } catch (err) {
                throw new CacheKeyError(err);
            }
        }
    },

    submissionContext: {
        name: names.SUBMISSION_CONTEXT,
        /**
         * Returns a key of the form userid.submission-year.permitId to handle
         * all permit level artifacts. If we cannot calculate a key it returns '_'
         * this is not an error
         * @param request
         * @return {Promise.<string>}
         */
        keyFunc: async (request) => {
            try {
                // Get the status cache key
                const statusKey = await internals.userContext.keyFunc(request);

                // Fetch the permit key
                const userContext = await request.server.app.userCache.cache(names.USER_CONTEXT).get(request);

                if (userContext) {
                    return statusKey + '.' + userContext.year + '.' + userContext.eaId.id;
                } else {
                    throw new CacheKeyError('Cannot generate key for submission context cache');
                }
            } catch (err) {
                throw new CacheKeyError(err);
            }
        }
    },

    taskContext: {
        name: names.TASK_CONTEXT,
        /**
         * Returns a key for the task object.
         * This is of the form userid.submission-year.permitId.TASK
         * @param request - a request object
         * @return {Promise.<string>}
         */
        keyFunc: async (request) => {
            try {
                // Get the permit status cache key
                const submissionKey = await internals.submissionContext.keyFunc(request);

                // Fetch the current status
                const submissionContext = await UserCache.cache(names.SUBMISSION_CONTEXT).get(request);

                // Construct a key containing the permit status and the current task
                return submissionKey + '.' + submissionContext.currentTask;
            } catch (err) {
                throw new CacheKeyError(err);
            }
        }
    },

    unitTest: {
        // Used for the lab tests
        name: names.UNIT_TEST,
        keyFunc: async (request) => {
            try {
                return request + '.' + '2017';
            } catch (err) {
                throw new CacheKeyError(err);
            }
        }
    }

};

module.exports = {
    CacheKeyError: CacheKeyError,

    policies:
      [internals.userContext,
          internals.submissionContext,
          internals.taskContext,
          internals.unitTest],

    names: names
};

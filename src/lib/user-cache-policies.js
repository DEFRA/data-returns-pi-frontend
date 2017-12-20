'use strict';

const SessionHelper = require('../handlers/session-helper');
const UserCache = require('./user-cache');

class CacheKeyError extends Error {
    constructor (message) {
        super(`User cache error: ${message}`);
        this.name = 'UserCacheError';
    }
};

const names = {
    SUBMISSION_STATUS: 'submission',
    PERMIT_STATUS: 'ea-id',
    TASK_STATUS: 'task',
    UNIT_TEST: 'unit-test'
};

/**
 * This module is a definition of the user cache keys and cache names.
 */
const internals = {

    submissionStatus: {
        name: names.SUBMISSION_STATUS,
        /**
         * Returns a key of the form userid.submission-year to handle
         * all submission level artifacts
         * @param request
         * @return {Promise.<string>}
         */
        keyFunc: async (request) => {
            try {
                const session = await SessionHelper.get(request, request.server.app.sid);

                // TODO submission year
                return session.user.id + '.' + '2017';
            } catch (err) {
                throw new CacheKeyError(err);
            }
        }
    },

    permitStatus: {
        name: names.PERMIT_STATUS,
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
                const statusKey = await internals.submissionStatus.keyFunc(request);

                // Fetch the permit key
                const permitStatusKey = await request.server.app.userCache.cache(names.SUBMISSION_STATUS).get(request);

                if (permitStatusKey && permitStatusKey.id) {
                    return statusKey + '.' + permitStatusKey.id;
                } else {
                    return '_';
                }
            } catch (err) {
                throw new CacheKeyError(err);
            }
        }
    },

    taskStatus: {
        name: names.TASK_STATUS,
        /**
         * Returns a key for the task object.
         * This is of the form userid.submission-year.permitId.TASK
         * @param request - a request object
         * @return {Promise.<string>}
         */
        keyFunc: async (request) => {
            try {
                // Get the permit status cache key
                const statusKey = await internals.permitStatus.keyFunc(request);

                // Fetch the current status
                const status = await UserCache.cache(names.PERMIT_STATUS).get(request);

                // Construct a key containing the permit status and the current task
                return statusKey + '.' + status.currentTask;
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
      [internals.submissionStatus,
          internals.permitStatus,
          internals.taskStatus,
          internals.unitTest],

    names: names
};

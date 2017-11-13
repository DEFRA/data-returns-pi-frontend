'use strict';

const SessionHelper = require('../handlers/session-helper');
const UserCache = require('./user-cache');

/**
 * This module is a definition of the user cache keys and cache names.
 */

const internals = {

    submissionStatus: {
        name: 'submission-status',
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
                throw new Error(err);
            }
        }
    },

    permitStatus: {
        name: 'permit-status',
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
                const permitStatusKey = await request.server.app.userCache.cache('submission-status').get(request);

                if (permitStatusKey && permitStatusKey.id) {
                    return statusKey + '.' + permitStatusKey.id;
                } else {
                    return '_';
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },

    taskStatus: {
        name: 'tasks',
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
                const status = await UserCache.cache('permit-status').get(request);

                // Construct a key containing the permit status and the current task
                return statusKey + '.' + status.currentTask;
            } catch (err) {
                throw new Error(err);
            }
        }
    },

    unitTest: {
        // Used for the lab tests that start the server
        name: 'unit-test',
        keyFunc: async (request) => {
            try {
                return request + '.' + '2017';
            } catch (err) {
                throw new Error(err);
            }
        }
    }

};

module.exports = {
    policies: [internals.submissionStatus,
        internals.permitStatus,
        internals.taskStatus,
        internals.unitTest]
};

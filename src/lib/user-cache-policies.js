'use strict';

const SessionHelper = require('../handlers/session-helper');
const UserCache = require('./user-cache');

/**
 * This module is a definition of the user cache keys and cache names.
 */

let internals = {};

module.exports = internals = {
    policies: [
        {
            name: 'status',
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
        {
            name: 'submission',
            keyFunc: async (request) => {
                try {
                    // Get the status cache key
                    const statusKey = await internals.policies[0].keyFunc(request);

                    // Fetch the permit
                    const status = await UserCache.cache('status').get(statusKey);

                    // Construct a key containing the eaId
                    return statusKey + '.' + status.id;
                } catch (err) {
                    throw new Error(err);
                }
            }
        },

        {
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
    ]
};

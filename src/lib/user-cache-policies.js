'use strict';

const SessionHelper = require('./session-helper');

/**
 * This module is a definition of the user cache keys and cache names.
 */

module.exports = {
    statusCache: {
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
    }
};

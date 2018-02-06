'use strict';

/**
 * This module is concerned with authorizations
 * @type {{validate: module.exports.validate}}
 */
module.exports = {
    /**
     * validation function called on every request
     * @param request - Hapi request object of the request which is being authenticated
     * @param session - The get object set via request.cookieAuth.set()
     */
    validate: async (request, session) => {
        const server = request.server;
        const cached = await server.app.cache.get(session.sid);

        const out = {
            valid: !!cached
        };

        if (out.valid) {
            out.credentials = cached.user;
        }

        return out;
    }
};

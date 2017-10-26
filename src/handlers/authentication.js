'use strict';

/**
 * Route handlers for authentication routes
 */
const uuid = require('uuid');
const system = ('../lib/system');
const logging = ('../lib/logging');
const userService = require('../service/user-service.js');

module.exports = {
    /**
     * Landing page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    login: async (request, reply) => {
        try {

            // If this users is already authenticated then redirect to the start pag
            if (request.auth.isAuthenticated) {
                return reply.redirect('/');
            }

            // If this is a get request then display the login screen
            if (request.method === 'get') {
                return reply.view('login');
            }

            const authenticated = userService.authenticate(request.payload.username, request.payload.password) || 'FAILED';

            // Back to the login screen with an error if the wrong username or password is given
            if (authenticated === 'FAILED') {
                return reply.view('login', { authenticated: authenticated });
            }

            const sid = uuid.v4();

            // Do not cache the password
            delete authenticated.password;

            // Set the authentication details in the session cache
            await request.server.app.cache.set(sid, { user: authenticated, loggedInAt: system.timestamp });

            // Set the session authorization cookie - it will encode the session id to identify the cache
            request.cookieAuth.set({ sid: sid });

            // We are in - redirect to the start page
            return reply.redirect('/');

        } catch (err) {
            logging.logger.error(err);
            return reply.view('login');
        }
    },

    /**
     * Logout handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    logout: async (request, reply) => {
        // Remove the cache data for the session
        await request.server.app.cache.drop(request.server.app.sid);

        // Clear the session authentication cookie
        request.cookieAuth.clear();
        return reply.redirect('/');
    }
};

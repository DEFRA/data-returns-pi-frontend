'use strict';

/**
 * Route handlers for authentication routes
 */
const uuid = require('uuid');
const system = require('../lib/system');
const logging = require('../lib/logging');
const userService = require('../service/user-service.js');

module.exports = {
    /**
     * Landing page handler
     *
     * Note that the current version of Hapi (16.6.2) includes Version: 7.x of catbox which
     * does not yet include the asynchronous methods
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    login: (request, reply) => {

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

        // Generate a new session identifier
        const sid = uuid.v4();

        // Do not cache the password
        delete authenticated.password;

        // Set the authentication details in the get cache
        request.server.app.cache.set(sid, { user: authenticated, loggedInAt: system.time() }, 0, (err) => {

            if (err) {
                logging.logger.log('error', err);
                return reply.view('login');
            }

            // Set the get authorization cookie - it will encode the get id to identify the cache
            request.cookieAuth.set({ sid: sid });

            // We are in - redirect to the start page
            return reply.redirect('/');
        });
    },

    /**
     * Logout handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    logout: (request, reply) => {
        // Remove the cache data for the get
        request.server.app.cache.drop(request.server.app.sid, (err) => {

            if (err) {
                logging.logger.log('error', err);
            }

            // Clear the get authentication cookie
            request.cookieAuth.clear();
            return reply.redirect('/');
        });
    }
};

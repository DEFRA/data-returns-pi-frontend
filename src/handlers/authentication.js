'use strict';

/**
 * Route handlers for authentication routes
 */
const Uuid = require('uuid');
const System = require('../lib/system');
const logger = require('../lib/logging').logger;
const MasterDataService = require('../service/master-data');
const SessionHelper = require('./session-helper');

module.exports = {
    /**
     * Landing page handler
     *
     * Note that the current version of Hapi (16.6.2) includes Version: 7.x of catbox which
     * does not yet include the asynchronous methods
     * @param {internals.Request} request - /all-sectorsThe server request object
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

            const authenticated = await MasterDataService.authenticate(request.payload.username, request.payload.password) || 'FAILED';

            // Back to the login screen with an error if the wrong username or password is given
            if (authenticated === 'FAILED') {
                return reply.view('login', {authenticated: authenticated});
            }

            // Generate a new session identifier
            const sid = Uuid.v4();

            // Do not cache the password
            delete authenticated.password;

            // Set the authentication details in the authorization cache
            await SessionHelper.set(request, sid, {user: authenticated, loggedInAt: System.time()});

            // Set the get authorization cookie - it will encode the get id to identify the cache
            request.cookieAuth.set({sid: sid});

            // We are in - redirect to the start page
            return reply.redirect('/');

        } catch (err) {
            logger.logger.log('error', err);
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
        // Remove the cache data for the user
        try {
            await SessionHelper.drop(request, request.server.app.sid);
            request.cookieAuth.clear();
            return reply.redirect('/');
        } catch (err) {
            logger.logger.log('error', err);
        }
    }
};

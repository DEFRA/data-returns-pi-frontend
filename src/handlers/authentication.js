'use strict';

/**
 * Route handlers for authentication routes
 */
const Uuid = require('uuid');
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
     * @return {undefined}
     */
    login: async (request, h) => {
        try {
            // If this users is already authenticated then redirect to the start pag
            if (request.auth.isAuthenticated) {
                return h.redirect('/');
            }

            // If this is a get request then display the login screen
            if (request.method === 'get') {
                return h.view('login');
            }

            const authenticated = MasterDataService.authenticate(request.payload.username, request.payload.password);

            // Back to the login screen with an error if the wrong username or password is given
            if (!authenticated) {
                return h.view('login', {authenticated: 'FAILED'});
            }

            // Generate a new session identifier
            const sid = Uuid.v4();

            // Do not cache the password
            delete authenticated.password;

            // Set the authentication details in the authorization cache
            await SessionHelper.set(request, sid, { user: authenticated, loggedInAt: (new Date()).toISOString() });

            // Set the get authorization cookie - it will encode the get id to identify the cache
            request.cookieAuth.set({ sid });

            logger.debug(`Logged in: ${authenticated.username}`);

            // We are in - redirect to the start page
            return h.redirect('/');

        } catch (err) {
            logger.log('error', err);
            return h.view('login');
        }
    },

    /**
     * Logout handler
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */
    logout: async (request, h) => {
        // Remove the cache data for the user
        try {
            await SessionHelper.drop(request, request.auth.artifacts.sid);
            request.cookieAuth.clear();
            return h.redirect('/');
        } catch (err) {
            logger.log('error', err);
        }
    }
};

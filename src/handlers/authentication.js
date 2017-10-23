'use strict';

/**
 * Route handlers for authentication routes
 */
const system = require('../lib/system');
const uuid = require('uuid');

const users = {
    gdog: {
        id: 'gdog',
        password: 'gd',
        name: 'Graham Willis'
    }
};

module.exports = {
    /**
   * Landing page handler
   * @param {internals.Request} request - The server request object
   * @param {function} reply - The server reply function
   * @return {undefined}
   */
    login: (request, reply) => {
        if (request.auth.isAuthenticated) {
            return reply.redirect('/');
        }

        if (request.method === 'get') {
            return reply.view('login');
        }

        let message = '';
        let account = null;

        if (request.method === 'post') {
            if (!request.payload.username || !request.payload.password) {
                message = 'Missing username or password';
            } else {
                account = users[request.payload.username];
                if (!account || account.password !== request.payload.password) {
                    message = 'Invalid username or password';
                }
            }
        }

        if (message) {
            return reply.view('login', { message: message });
        }

        const sid = uuid.v4();

        // TODO Move to system
        account.loggedInAt = system.timestamp;

        request.server.app.cache.set(sid, { account: account }, 0, (err) => {

            if (err) {
                return reply(err);
            }

            request.cookieAuth.set({ sid: sid });
            return reply.redirect('/');
        });
    },

    /**
   * Landing page handler
   * @param {internals.Request} request - The server request object
   * @param {function} reply - The server reply function
   * @return {undefined}
   */
    logout: (request, reply) => {
        request.cookieAuth.clear();
        return reply.redirect('/');
    }
};

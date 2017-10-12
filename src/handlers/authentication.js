'use strict';

/**
 * Route handlers for authentication routes
 */
const uuid = require('uuid');
const timestamp = require('time-stamp');

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
    landing: (request, reply) => {
        reply('<html><head><title>Login page</title></head><body><h3>Welcome ' +
        request.auth.credentials.name +
        '!</h3><br/><form method="get" action="/logout">' +
        '<input type="submit" value="Logout">' +
        '</form></body></html>');
    },

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

        if (request.method === 'get' || message) {
            return reply('<html><head><title>Login page</title></head><body>' +
          (message ? '<h3>' + message + '</h3><br/>' : '') +
          '<form method="post" action="/login">' +
          'Username: <input type="text" name="username"><br>' +
          'Password: <input type="password" name="password"><br/>' +
          '<input type="submit" value="Login"></form></body></html>');
        }

        const sid = uuid.v4();

        account.loggedInAt = timestamp('YYYY/MM/DD HH:mm:ss');

        request.server.app.cache.set(sid, { account: account }, 0, (err) => {

            if (err) {
                return reply(err);
            }

            request.cookieAuth.set({ sid: sid });
            return reply.redirect('/home');
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

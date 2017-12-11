'use strict';

const logging = require('../../src/lib/logging');
const server = require('../../src/lib/server');
const assert = require('hoek').assert;
const internals = {};

internals.getCookies = (response) => {
    const cookies = {};
    response.headers['set-cookie'] && response.headers['set-cookie'].forEach((cookie) => {
        const parts = (cookie.split(';')[0]).match(/(.*?)=(.*)$/);
        cookies[parts[1].trim()] = (parts[2] || '').trim();
    });
    return cookies;
};

module.exports = {

    getCookies: internals.getCookies,

    start: async () => {
        try {
            await server.initialize();
            await server.start();
            logging.logger.info(`Server started at ${server.server().info.uri}`);
        } catch (err) {
            logging.logger.log('error', err);
            process.exit(1);
        }
    },

    stop: async () => {
        await server.stop();
        logging.logger.info('Server stopped');
    },

    login: async () => {
        let response = await server.server().inject({
            method: 'GET',
            url: '/'
        });
        assert(response.headers.location === '/login');
        assert(response.statusCode === 302);

        // Requesting the login page displays the login page
        response = await server.server().inject({
            method: 'GET',
            url: '/login'
        });
        assert(response.statusCode === 200);

        // Login to the server as user1 give a redirect to /
        response = await server.server().inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: '1@email.com',
                password: 'a'
            }
        });
        assert(response.statusCode === 302);
        assert(response.headers.location === '/');

        // Grab the session cookie
        internals.sid = internals.getCookies(response)['sid'];
        assert(internals.sid);

        // Now logged in get request to the start page
        response = await server.server().inject({
            method: 'GET',
            url: '/',
            headers: { cookie: 'sid=' + internals.sid }
        });
        assert(response.statusCode === 200);
    },

    logout: async () => {
        let response = await server.server().inject({
            method: 'GET',
            url: '/logout',
            headers: { cookie: 'sid=' + internals.sid }
        });

        assert(response.statusCode === 302);
        assert(response.headers.location === '/');

        response = await server.server().inject({
            method: 'GET',
            url: '/'
        });

        assert(response.statusCode === 302);
        assert(response.headers.location === '/login');

        response = await server.server().inject({
            method: 'GET',
            url: '/login'
        });

        assert(response.statusCode === 200);
    },

    sid: internals.sid,
    server: server.server

};

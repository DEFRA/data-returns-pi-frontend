'use strict';

const logging = require('../../src/lib/logging');
const server = require('../../src/lib/server');
const assert = require('hoek').assert;
const Code = require('code');
const expect = Code.expect;

const internals = {};

internals.getCookies = (response) => {
    const cookies = {};
    response.headers['set-cookie'] && response.headers['set-cookie'].forEach((cookie) => {
        const parts = (cookie.split(';')[0]).match(/(.*?)=(.*)$/);
        cookies[parts[1].trim()] = (parts[2] || '').trim();
    });
    return cookies;
};

internals.step = async (method, url, payload, expected) => {

    let currentUrl = url;
    let response = null;

    if (method.toUpperCase() === 'GET') {
        response = await server.server().inject({
            method: 'GET',
            url: currentUrl,
            headers: { cookie: 'sid=' + internals.sid }
        });
    } else {
        response = await server.server().inject({
            method: 'POST',
            url: currentUrl,
            headers: { cookie: 'sid=' + internals.sid },
            payload: payload
        });
    }

    while (response.statusCode === 302) {
        currentUrl = response.headers.location;
        response = await server.server().inject({
            method: 'GET',
            url: currentUrl,
            headers: { cookie: 'sid=' + internals.sid }
        });
    }

    expect(response.statusCode).to.equal(200);
    expect(currentUrl).to.equal(expected);

    if (response.statusCode !== 200 || currentUrl !== expected) {
        logging.logger.info('Mismatched ' + currentUrl + ':' + expected);
    }
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

    login: async (username, password) => {
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
                username: username,
                password: password
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
            headers: {cookie: 'sid=' + internals.sid}
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

    sid: () => { return internals.sid; },
    server: server.server,

    steps: async (arr) => {
        for (const { method, url, payload, expected } of arr) {
            await internals.step(method, url, payload, expected);
        }
    }

};

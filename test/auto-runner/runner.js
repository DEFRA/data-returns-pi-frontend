'use strict';

const logging = require('../../src/lib/logging');
const server = require('../../src/lib/server');
const Code = require('code');
const expect = Code.expect;

const internals = {
    toInjectionObject: (request) => {
        const { path, method, payload } = request;
        const result = {};

        result.method = method;
        result.url = path;

        if (payload && method === 'POST') {
            result.payload = payload;
        }

        if (internals.sid) {
            result.headers = { cookie: 'sid=' + internals.sid };
        }

        return result;
    },

    run: async (request) => {
        const {status, redirect} = request;
        internals.counter++;

        logging.logger.debug(`Request: request (${internals.counter}) ${JSON.stringify(request, null, 4)}`);

        const response = await server.server().inject(internals.toInjectionObject(request));
        internals.sid = internals.getCookies(response)['sid'] || internals.sid;

        let err = false;
        if (response.statusCode !== status) {
            err = true;
        }

        if (redirect) {
            if (response.headers.location !== redirect) {
                err = true;
            }
        } else {
            if (response.headers.location) {
                err = true;
            }
        }

        if (err) {
            logging.logger.error(`Error: request (${internals.counter}) ${JSON.stringify(request, null, 4)}`);
            logging.logger.error('Got status: ' + response.statusCode);
            if (response.headers.location) {
                logging.logger.error('Got redirect: ' + response.headers.location);
            }
        }

        expect(response.statusCode).to.equal(status);
        if (redirect) {
            expect(response.headers.location).to.equal(redirect);
        } else {
            expect(response.headers.location).to.be.undefined();
        }
    },

    getCookies: (response) => {
        const cookies = {};
        response.headers['set-cookie'] && response.headers['set-cookie'].forEach((cookie) => {
            const parts = (cookie.split(';')[0]).match(/(.*?)=(.*)$/);
            cookies[parts[1].trim()] = (parts[2] || '').trim();
        });
        return cookies;
    }

};

module.exports = {
    run: async (requests) => {
        internals.counter = 0;
        delete internals.sid;
        for (const request of requests) {
            await internals.run(request);
        }
    },

    start: async () => {
        try {
            await server.initialize();
            await server.start();
        } catch (err) {
            logging.logger.log('error', err);
            process.exit(1);
        }
    },

    stop: async () => {
        await server.stop();
    }
};

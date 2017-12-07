'use strict';

const logging = require('../../src/lib/logging');
const server = require('../../src/lib/server');

module.exports = {
    /**
     * Used to get the cookies from a hapi server response
     * @param response
     * @returns {{}}
     */
    getCookies: (response) => {
        const cookies = {};
        response.headers['set-cookie'] && response.headers['set-cookie'].forEach((cookie) => {
            const parts = (cookie.split(';')[0]).match(/(.*?)=(.*)$/);
            cookies[parts[1].trim()] = (parts[2] || '').trim();
        });
        return cookies;
    },

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

    server: server.server
};

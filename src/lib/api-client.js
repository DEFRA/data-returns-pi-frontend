'use strict';
/**
 * This module is responsible for the API rest interface and is data agnostic. It operates on both
 * the master data and the submissions API's
 */

const uriJs = require('uri-js');
const Hoek = require('hoek');
const System = require('./system');
const request = require('request-promise');
const Logging = require('./logging');

const internals = {

    /**
     * Generate the URI for the request
     * @param client either 'SUB' for the submissions API or 'MD' for teh master data api
     * @param command
     * @param query
     * @param body
     * @return {string}
     */
    createRequest: (client, command, query) => {
        try {
            Hoek.assert(client === 'SUB' || client === 'MD', 'Client must be either \'SUB\' or \'MD\'');
            Hoek.assert(command, 'A command must be supplied');

            const uriObj = client === 'SUB' ? {
                scheme: 'http',
                host: process.env.SM_API_HOSTNAME,
                port: Number.parseInt(process.env.SM_API_PORT),
                path: 'api/' + command,
                query: query
            } : {
                scheme: 'http',
                host: process.env.MD_API_HOSTNAME,
                port: Number.parseInt(process.env.MD_API_PORT),
                path: 'api/' + command,
                query: query
            };

            return uriJs.serialize(uriObj);

        } catch (err) {
            Logging.logger.error(err);
            throw err;
        }
    },

    /**
     * Make a request to a given uri
     * @param uri
     * @param method - Either 'GET' or 'POST'
     * @return {Promise.<void>} - The (json parsed) results or the request
     */
    makeRequest: async (uri, method, body) => {
        try {
            Hoek.assert(method === 'GET' || method === 'POST', 'Method must be either \'GET\' or \'POST\'');

            Logging.logger.debug(`API Call; ${method}:${uri} `);

            const result = await request({
                uri: uri,
                method: method,
                json: true,
                headers: {
                    'Accept': 'application/json'
                },
                auth: {
                    user: 'user',
                    pass: 'password'
                },
                body: body
            });

            return result;
        } catch (err) {
            Logging.logger.error(err);
            throw err;
        }
    }
};

module.exports = {
    request: async (client, method, command, query, body) => {
        return internals.makeRequest(internals.createRequest(client, command, query), method, body);
    }
};

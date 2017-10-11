'use strict';

const authentication = require('./handlers/authentication.js');
const home = require('./handlers/home.js');

/**
 * The routing
 * @type {[null]}
 */
const handlers = [

    {
        method: 'GET',
        path: '/',
        config: { handler: authentication.landing }
    },

    {
        method: ['GET', 'POST'],
        path: '/login',
        config: {
            handler: authentication.login,
            auth: { mode: 'try' },
            plugins: { 'hapi-auth-cookie': { redirectTo: false } }
        }
    },

    {
        method: 'GET',
        path: '/logout',
        config: {
            handler: authentication.logout
        }
    },

    {
        method: 'GET',
        path: '/home',
        config: {
            handler: home.home
        }
    }
];

module.exports = handlers;

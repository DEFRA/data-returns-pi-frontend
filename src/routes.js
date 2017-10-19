'use strict';

const authentication = require('./handlers/authentication.js');
const home = require('./handlers/home.js');

/**
 * Returns routes for the static assets
 * @param type
 * @param paths
 * @return {{method: string, path: string, handler: {directory: {path: *, etagMethod: string}}}}
 */
const staticAssetDir = function (type, paths) {
    return {
        method: 'GET',
        path: `/public/${type}/{param*}`,
        config: {
            auth: false
        },
        handler: {
            directory: {
                path: paths,
                etagMethod: 'hash' // Allows assets to be cached by the client.
            }
        }
    };
};

/**
 * The dynamic routing
 * @type {[null]}
 */
const handlers = [

    // Images
    staticAssetDir('images', [
        'public/images',
        'node_modules/govuk_template_jinja/assets/images',
        'node_modules/govuk_frontend_toolkit/images'
    ]),

    // Javascripts
    staticAssetDir('javascripts', [
        'public/javascripts',
        'node_modules/govuk_template_jinja/assets/javascripts',
        'node_modules/govuk_frontend_toolkit/javascripts'
    ]),

    // Stylesheets
    staticAssetDir('stylesheets', [
        'public/stylesheets',
        'node_modules/govuk_template_jinja/assets/stylesheets',
        'node_modules/govuk_frontend_toolkit/stylesheets'
    ]),

    {
        method: ['GET', 'POST'],
        path: '/login',
        config: {
            handler: authentication.login,
            auth: { mode: 'try' },
            plugins: {
                'hapi-auth-cookie': { redirectTo: false },
                crumb: {}
            }
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
        path: '/',
        config: {
            handler: home.start
        }
    }
];

module.exports = handlers;

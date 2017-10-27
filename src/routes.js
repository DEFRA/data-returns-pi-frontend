'use strict';

const authentication = require('./handlers/authentication.js');
const start = require('./handlers/start.js');

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
            auth: false,
            cache: false
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
const staticHandlers = [

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
    ])

];

const dynamicHandlers = [
    // Authentication handlers
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
            handler: start.start
        }
    },

    // Handlers for the all sectors journey
    {
        method: 'GET',
        path: '/all-sectors',
        config: {
            handler: require('./handlers/all-sectors/main').task_list
        }
    },

    // Handlers for the all sectors journey
    {
        method: 'POST',
        path: '/select-journey',
        config: {
            handler: start.select
        }
    }

];

module.exports = {
    staticHandlers: staticHandlers,

    /*
     * Decorate the dynamic handler configuration with common cache properties
     * No caching for get requests and no public caching
     */
    dynamicHandlers: dynamicHandlers.map((h) => {
        h.config = h.config || {};
        h.config.cache = h.config.cache || {};
        h.config.cache.privacy = 'private';
        h.config.cache.otherwise = 'no-cache, no-store, must-revalidate';
        return h;
    })
};

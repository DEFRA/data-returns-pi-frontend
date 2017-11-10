'use strict';

/**
 * Define the Hapi server route array and associated route handlers
 */
const Authentication = require('./handlers/authentication.js');
const Start = require('./handlers/start.js');
const AllSectors = require('./handlers/all-sectors/main');
const Contact = require('./handlers/all-sectors/check/contact');
const Site = require('./handlers/all-sectors/check/site');
const Air = require('./handlers/all-sectors/report/air');
const Land = require('./handlers/all-sectors/report/land');
const OffSite = require('./handlers/all-sectors/report/off-site');
const Overseas = require('./handlers/all-sectors/report/overseas');
const WasteWater = require('./handlers/all-sectors/report/waste-water');
const Water = require('./handlers/all-sectors/report/water');
const Check = require('./handlers/all-sectors/submit/check');
const Share = require('./handlers/all-sectors/submit/share');
const Submit = require('./handlers/all-sectors/submit/submit');
const Substances = require('./handlers/all-sectors/report/substances');

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
            handler: Authentication.login,
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
            handler: Authentication.logout
        }
    },

    {
        method: 'GET',
        path: '/',
        config: {
            handler: Start.start
        }
    },

    // Handlers for the all sectors journey
    {
        method: 'GET',
        path: '/all-sectors',
        config: {
            handler: AllSectors.task_list
        }
    },

    // Handlers for the all sectors journey
    {
        method: 'POST',
        path: '/select-journey',
        config: {
            handler: Start.select
        }
    },

    {
        method: 'GET',
        path: '/contact',
        config: {
            handler: Contact.contact
        }
    },

    {
        method: 'GET',
        path: '/site',
        config: {
            handler: Site.site
        }
    },

    {
        method: ['GET', 'POST'],
        path: '/air-confirm',
        config: {
            handler: Air.airConfirm
        }
    },

    {
        method: 'GET',
        path: '/air',
        config: {
            handler: Air.air
        }
    },

    {
        method: ['GET', 'POST'],
        path: '/land-confirm',
        config: {
            handler: Land.landConfirm
        }
    },

    {
        method: 'GET',
        path: '/land',
        config: {
            handler: Land.land
        }
    },

    {
        method: ['GET', 'POST'],
        path: '/waste-water-confirm',
        config: {
            handler: WasteWater.wasteWaterConfirm
        }
    },

    {
        method: 'GET',
        path: '/waste-water',
        config: {
            handler: WasteWater.wasteWater
        }
    },

    {
        method: ['GET', 'POST'],
        path: '/water-confirm',
        config: {
            handler: Water.waterConfirm
        }
    },

    {
        method: 'GET',
        path: '/water',
        config: {
            handler: Water.water
        }
    },

    {
        method: 'GET',
        path: '/off-site',
        config: {
            handler: OffSite.offSite
        }
    },

    {
        method: 'GET',
        path: '/overseas',
        config: {
            handler: Overseas.overseas
        }
    },

    {
        method: ['GET', 'POST'],
        path: '/add-substance',
        config: {
            handler: Substances.add
        }
    },

    {
        method: 'GET',
        path: '/check',
        config: {
            handler: Check.check
        }
    },

    {
        method: 'GET',
        path: '/share',
        config: {
            handler: Share.share
        }
    },

    {
        method: 'GET',
        path: '/submit',
        config: {
            handler: Submit.submit
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

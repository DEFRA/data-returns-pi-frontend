'use strict';

/**
 * Define the Hapi server route array and associated route handlers
 */
const Authentication = require('./handlers/authentication.js');
const Start = require('./handlers/start.js');
const AllSectors = require('./handlers/all-sectors/task-list');
const Releases = require('./handlers/all-sectors/report/releases');
const OffSite = require('./handlers/all-sectors/report/off-site');
const Overseas = require('./handlers/all-sectors/report/overseas');
const Review = require('./handlers/all-sectors/submit/review');
const Submit = require('./handlers/all-sectors/submit/submit');
const Permissions = require('./handlers/permissions');
const SiteCodes = require('./handlers/all-sectors/check/site-codes');

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

    // Catch all handler
    { method: '*', path: '/{p*}', options: { handler: function (request, h) { return h.redirect('/'); } } },

    // Authentication and start pages
    { method: ['GET', 'POST'], path: '/login', options: { handler: Authentication.login, auth: { mode: 'try' }, plugins: { 'hapi-auth-cookie': { redirectTo: false }, crumb: {} } } },
    { method: 'GET', path: '/logout', options: { handler: Authentication.logout } },
    { method: 'GET', path: '/', options: { handler: Start.start } },

    // Handlers for the all sectors journey - select permit and tasks list
    { method: 'POST', path: '/select-permit', options: { handler: Start.select } },
    { method: 'GET', path: '/task-list', options: { handler: AllSectors.taskList } },

    // Handlers for the check phase
    { method: ['GET', 'POST'], path: '/check/site-codes/confirm', options: { handler: SiteCodes.confirm } },

    // Releases to air, land, controlled waters and in waste-water
    { method: ['GET', 'POST'], path: '/releases/{route}/confirm', options: { handler: Releases.confirm } },
    { method: 'GET', path: '/releases/{route}', options: { handler: Releases.releases } },
    { method: 'POST', path: '/releases/{route}/action', options: { handler: Releases.action } },
    { method: ['GET', 'POST'], path: '/releases/{route}/add-substance', options: { handler: Releases.add } },
    { method: ['GET', 'POST'], path: '/releases/{route}/detail', options: { handler: Releases.detail } },
    { method: ['GET', 'POST'], path: '/releases/{route}/remove', options: { handler: Releases.remove } },

    // Transfers off-site
    { method: ['GET', 'POST'], path: '/transfers/off-site', options: { handler: OffSite.offSite } },
    { method: ['GET', 'POST'], path: '/transfers/off-site/confirm', options: { handler: OffSite.confirm } },
    { method: ['GET', 'POST'], path: '/transfers/off-site/add', options: { handler: OffSite.add } },
    { method: ['GET', 'POST'], path: '/transfers/off-site/remove', options: { handler: OffSite.remove } },
    { method: ['GET', 'POST'], path: '/transfers/off-site/detail', options: { handler: OffSite.detail } },
    { method: 'POST', path: '/transfers/off-site/action', options: { handler: OffSite.action } },

    // Transfers overseas
    { method: ['GET', 'POST'], path: '/transfers/overseas/confirm', options: { handler: Overseas.confirm } },
    { method: 'GET', path: '/transfers/overseas/add', options: { handler: Overseas.add } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/add-substance', options: { handler: Overseas.substance } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/detail', options: { handler: Overseas.detail } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/transportation-co-address', options: { handler: Overseas.transportationCompanyAddress } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/destination-address', options: { handler: Overseas.destinationAddress } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/check', options: { handler: Overseas.review } },
    { method: ['GET', 'POST'], path: '/transfers/overseas', options: { handler: Overseas.overseas } },
    { method: 'POST', path: '/transfers/overseas/action', options: { handler: Overseas.action } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/remove', options: { handler: Overseas.remove } },

    // Completion
    { method: ['GET', 'POST'], path: '/review/confirm', options: { handler: Review.review } },
    { method: ['GET', 'POST'], path: '/submit/confirm', options: { handler: Submit.submit } },

    // Service Error
    { method: 'GET', path: '/service-error', options: { handler: function (request, h) { return h.view('service-error'); } } }
];

module.exports = {
    staticHandlers: staticHandlers,

    /*
     * Decorate the dynamic handler configuration with common cache properties
     * No caching for get requests and no public caching
     */
    dynamicHandlers: dynamicHandlers.map((h) => {
        h.options = h.options || {};
        h.options.cache = h.options.cache || {};
        h.options.cache.privacy = 'private';
        h.options.cache.otherwise = 'no-cache, no-store, must-revalidate';
        return h;
    }),

    postHandlerMethods: [ Permissions.checkPermissions ]

};

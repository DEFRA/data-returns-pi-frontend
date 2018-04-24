'use strict';

/**
 * Define the Hapi server route array and associated route handlers
 */
const Authentication = require('./handlers/authentication.js');
const Start = require('./handlers/start.js');
const AllSectors = require('./handlers/all-sectors/task-list');
const Releases = require('./handlers/all-sectors/report/releases');

const Waste = require('./handlers/all-sectors/report/waste');
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
    { method: ['GET', 'POST'], path: '/check/nace-code', options: { handler: SiteCodes.nace } },
    { method: ['GET', 'POST'], path: '/check/nace-summary', options: { handler: SiteCodes.naceSummary } },
    { method: ['GET', 'POST'], path: '/check/nose-code', options: { handler: SiteCodes.nose } },
    { method: ['GET', 'POST'], path: '/check/nose-summary', options: { handler: SiteCodes.noseSummary } },
    { method: ['GET', 'POST'], path: '/check/nose-remove', options: { handler: SiteCodes.remove } },

    // Releases to air, land, controlled waters and in waste-water
    { method: ['GET', 'POST'], path: '/releases/{route}/confirm', options: { handler: Releases.confirm } },
    { method: ['GET', 'POST'], path: '/releases/{route}/add-substance', options: { handler: Releases.substances } },
    { method: ['GET', 'POST'], path: '/releases/{route}/details', options: { handler: Releases.details } },
    { method: ['GET', 'POST'], path: '/releases/{route}', options: { handler: Releases.releases } },
    { method: ['GET', 'POST'], path: '/releases/{route}/remove', options: { handler: Releases.remove } },

    // Waste Transfers
    { method: ['GET', 'POST'], path: '/transfers/waste/confirm', options: { handler: Waste.confirm } },
    { method: ['GET', 'POST'], path: '/transfers/waste', options: { handler: Waste.waste } },
    { method: ['GET', 'POST'], path: '/transfers/waste/codes', options: { handler: Waste.codes } },
    { method: ['GET', 'POST'], path: '/transfers/waste/change', options: { handler: Waste.changeCode } },
    { method: ['GET', 'POST'], path: '/transfers/waste/remove', options: { handler: Waste.remove } },
    { method: ['GET', 'POST'], path: '/transfers/waste/confirm-overseas', options: { handler: Waste.confirmOverseas } },
    { method: ['GET', 'POST'], path: '/transfers/waste/selectBusinessAddress', options: { handler: Waste.selectBusinessAddress } },
    { method: ['GET', 'POST'], path: '/transfers/waste/addBusinessAddress', options: { handler: Waste.addBusinessAddress } },
    { method: ['GET', 'POST'], path: '/transfers/waste/selectSiteAddress', options: { handler: Waste.selectSiteAddress } },
    { method: ['GET', 'POST'], path: '/transfers/waste/addSiteAddress', options: { handler: Waste.addSiteAddress } },
    { method: ['GET', 'POST'], path: '/transfers/waste/overseas/detail', options: { handler: Waste.overseasDetail } },
    { method: ['GET', 'POST'], path: '/transfers/waste/overseas/remove', options: { handler: Waste.overseasRemove } },

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

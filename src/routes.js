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
const Share = require('./handlers/all-sectors/submit/share');
const Submit = require('./handlers/all-sectors/submit/submit');

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
    { method: '*', path: '/{p*}', handler: function (request, reply) { reply.redirect('/'); } },

    // Authentication and start pages
    { method: ['GET', 'POST'], path: '/login', config: { handler: Authentication.login, auth: { mode: 'try' }, plugins: { 'hapi-auth-cookie': { redirectTo: false }, crumb: {} } } },
    { method: 'GET', path: '/logout', config: {handler: Authentication.logout} },
    { method: 'GET', path: '/', config: { handler: Start.start } },

    // Handlers for the all sectors journey - select permit and tasks list
    { method: 'POST', path: '/select-permit', config: { handler: Start.select } },
    { method: 'GET', path: '/task-list', config: { handler: AllSectors.taskList } },

    // Releases to air, land, controlled waters and in waste-water
    { method: ['GET', 'POST'], path: '/releases/{route}/confirm', handler: Releases.confirm },
    { method: 'GET', path: '/releases/{route}', handler: Releases.releases },
    { method: 'POST', path: '/releases/{route}/action', handler: Releases.action },
    { method: ['GET', 'POST'], path: '/releases/{route}/add-substance', config: { handler: Releases.add } },
    { method: ['GET', 'POST'], path: '/releases/{route}/detail', handler: Releases.detail },
    { method: ['GET', 'POST'], path: '/releases/{route}/remove', handler: Releases.remove },

    // Transfers off-site
    { method: ['GET', 'POST'], path: '/transfers/off-site', config: { handler: OffSite.offSite } },
    { method: ['GET', 'POST'], path: '/transfers/off-site/confirm', handler: OffSite.confirm },
    { method: ['GET', 'POST'], path: '/transfers/off-site/add', config: { handler: OffSite.add } },
    { method: ['GET', 'POST'], path: '/transfers/off-site/remove', handler: OffSite.remove },
    { method: ['GET', 'POST'], path: '/transfers/off-site/detail', handler: OffSite.detail },
    { method: 'POST', path: '/transfers/off-site/action', config: { handler: OffSite.action } },

    // Transfers overseas
    { method: ['GET', 'POST'], path: '/transfers/overseas/confirm', config: { handler: Overseas.confirm } },
    { method: 'GET', path: '/transfers/overseas/add', config: { handler: Overseas.add } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/add-substance', config: { handler: Overseas.substance } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/detail', config: { handler: Overseas.detail } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/transportation-co-address', config: { handler: Overseas.transportationCompanyAddress } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/destination-address', config: { handler: Overseas.destinationAddress } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/check', config: {handler: Overseas.review } },
    { method: ['GET', 'POST'], path: '/transfers/overseas', config: { handler: Overseas.overseas } },
    { method: 'POST', path: '/transfers/overseas/action', config: { handler: Overseas.action } },
    { method: ['GET', 'POST'], path: '/transfers/overseas/remove', handler: Overseas.remove },

    // Completion
    { method: ['GET', 'POST'], path: '/review/confirm', config: { handler: Review.review } },
    { method: ['GET', 'POST'], path: '/submit/confirm', config: { handler: Submit.submit } }

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

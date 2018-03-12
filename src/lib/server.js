'use strict';

/**
 * Initializes the Hapi server and sets the configuration
 * Registers the required plugins and exports the server object
 * in order that the server can be used in integration tests
 */
const Hapi = require('hapi');
const Nunjucks = require('nunjucks');

const System = require('./system');
const logger = require('./logging').logger;
const Authorization = require('./authorization');
const UserCache = require('./user-cache');
const AdditionalFilters = require('../service/additional-filters');

const srvcfg = System.configuration.server;
const internals = {};

// A function to provision the Hapi server
internals.initialize = async () => {

    /*
     * Create a Hapi server with a redis cache
     * as the default client cache
     */
    logger.info('Hapi server initialization: ' + process.env.NODE_ENV);
    internals.server = new Hapi.Server({
        host: process.env.HOSTNAME,
        port: process.env.PORT,
        routes: {
            cors: false,
            timeout: { server: srvcfg.timeout }
        },
        cache: [
            {
                engine: require('catbox-redis'),
                host: process.env.REDIS_HOSTNAME,
                port: process.env.REDIS_PORT,
                partition: 'session-cache'
            }
        ],
        load: {
            sampleInterval: srvcfg.sampleInterval
        }
    });

    /*
     * Register the logging plugin to allow Hapi to log using Winston - this is not reusable so don't use for
     * integration testing
     */
    if (process.env.NODE_ENV !== 'local') {
        logger.info('Server plugin registration: good');
        await internals.server.register({
            plugin: require('good'),
            options: {
                reporters: {
                    winston: require('./logging').goodWinstonStream()
                }
            }
        });
    }

    // Register the static data server
    logger.info('Server plugin registration: inert');
    await internals.server.register({
        plugin: require('inert')
    });

    // Register template rendering plugin support
    logger.info('Server plugin registration: vision');
    await internals.server.register({
        plugin: require('vision')
    });

    // Register Hapi Authorization cookies
    logger.info('Server plugin registration: hapi-auth-cookie');
    await internals.server.register({
        plugin: require('hapi-auth-cookie')
    });

    internals.server.views({
        engines: {
            html: {
                compile: function (src, options) {
                    const template = Nunjucks.compile(src, options.environment);
                    return function (context) {
                        return template.render(context);
                    };
                },

                prepare: function (options, next) {
                    options.compileOptions.environment = Nunjucks.configure(options.path, { watch: true });

                    // Add in additional nunjunks filter functions
                    for (const filter of AdditionalFilters) {
                        options.compileOptions.environment.addFilter(filter.functionName, filter.filterFunction);
                    }

                    return next();
                }
            }
        },

        // Set up the location of the template resources
        relativeTo: process.env.APP_ROOT,
        path: './web/templates',
        layoutPath: './web/templates/layout',
        helpersPath: './web/templates/helpers',

        // Set up the common view data
        context: require('./common-view-data').context,

        /*
         * Cause the template rendering engine to reread the file on each invocation
         * in development to avoid restarts when changing templates
         */
        isCached: process.env.NODE_ENV !== 'local'
    });

    /*
     * Create a Hapi-server cache policy
     * To hold the authenticated user data. This will
     * live in the plug-in cache
     */
    logger.info('Set authentication cache');
    const cache = internals.server.cache({
        segment: 'authenticated-sessions',
        expiresIn: srvcfg.cache.authorization.timeToLive
    });

    internals.server.app.cache = cache;

    // Set up the authorization strategy
    logger.info('Set authorization strategy: cookie');
    internals.server.auth.strategy('session', 'cookie', {
        password: process.env.COOKIE_PW,
        cookie: 'sid',
        redirectTo: '/login',
        isSecure: false,
        clearInvalid: true,
        validateFunc: Authorization.validate
    });

    // use a strategy name to set it as a "required" default
    internals.server.auth.default('session');

    /*
     * Connect to the user cache and
     * Provision the policies defined in user-cache-policies
     * using the catbox plugin.
     */
    await UserCache.start(require('catbox-redis'),
        require('./user-cache-policies').policies);

    // Add to the server object.
    internals.server.app.userCache = UserCache;

    // Set up the onPreHandler methods
    internals.server.ext('onPostHandler', require('../routes').postHandlerMethods);

    // Set up the static routing
    internals.server.route(require('../routes').staticHandlers);

    // Set up the dynamic routing
    internals.server.route(require('../routes').dynamicHandlers);

    logger.info('Completed server initialization');

};

// Export the server so that it can be used in the integration tests
module.exports = {
    server: () => { return internals.server; },

    start: async () => {
        logger.info('Server startup...');
        await internals.server.start();
        logger.info(`Server started at ${internals.server.info.uri}`);
        logger.info('User cache state: ' + UserCache.isReady());
    },

    stop: async () => {
        logger.info('Server shutdown');
        await internals.server.stop();
        await UserCache.stop();
        logger.info('User cache state: ' + UserCache.isReady());
    },

    initialize: async () => { await internals.initialize(); }
};

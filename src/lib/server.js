'use strict';

/**
 * Initializes the Hapi server and sets the configuration
 * Registers the required plugins and exports the server object
 * in order that the server can be used in integration tests
 */
const Hapi = require('hapi');
const Nunjucks = require('nunjucks');

const System = require('./system');
const Logging = require('./logging');
const Authorization = require('./authorization');
const ServerMethods = require('./server-methods');
const UserCache = require('./user-cache');

const srvcfg = System.configuration.server;

/*
 * Create a Hapi server with a redis cache
 * as the default client cache
 */
const server = new Hapi.Server({
    cache: [
        {
            engine: require('catbox-redis'),
            host: process.env.REDIS_HOSTNAME,
            port: process.env.REDIS_PORT,
            partition: 'session-cache'
        }
    ],
    app: {
        foo: 'bar'
    },
    load: {
        sampleInterval: srvcfg.sampleInterval
    }
});

// Set the server connection details
server.connection({
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    routes: {
        cors: false,
        timeout: { server: srvcfg.timeout }
    }
});

// A function to provision the Hapi server
const initialize = async () => {
    try {

        Logging.logger.info('Starting server initialization...');

        // Register the logging plugin to allow Hapi to log using Winston
        await server.register({
            register: require('good'),
            options: {
                reporters: {
                    winston: [Logging.goodWinstonStream]
                }
            }
        });

        // Register the static data server
        await server.register({
            register: require('inert')
        });

        // Register template rendering plugin support
        await server.register({
            register: require('vision')
        });

        // Register Hapi Authorization cookies
        await server.register({
            register: require('hapi-auth-cookie')
        });

        /*
         * Register Crumb - looks like this is broken with the current
         * version of hapi
         * await server.register({
         *    register: require('crumb')
         * });
         * Configure nunjucks
         */
        server.views({
            engines: {
                html: {
                    compile: function (src, options) {
                        const template = Nunjucks.compile(src, options.environment);
                        return function (context) {
                            return template.render(context);
                        };
                    },

                    prepare: function (options, next) {
                        options.compileOptions.environment = Nunjucks.configure(options.path, { watch: false });
                        return next();
                    }
                }
            },

            // Set up the location of the template resources
            relativeTo: process.env.APP_ROOT,
            path: 'web/templates',
            layoutPath: 'web/layout',
            helpersPath: 'web/helpers',

            // Set up the common view data
            context: require('./common-view-data'),

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
        const cache = server.cache({
            segment: 'authenticated-sessions',
            expiresIn: srvcfg.cache.authorization.timeToLive
        });

        server.app.cache = cache;

        // Set up the authorization strategy
        server.auth.strategy('session', 'cookie', true, {
            password: srvcfg.authorization.cookie.ironCookiePassword,
            cookie: 'sid',
            redirectTo: '/login',
            isSecure: false,
            clearInvalid: true,
            validateFunc: Authorization.validate
        });

        /*
         * Connect to the user cache and
         * Provision the policies defined in user-cache-policies
         * using the catbox plugin.
         */
        await UserCache.start(require('catbox-redis'),
            require('./user-cache-policies').policies);

        // Add to the server object.
        server.app.userCache = UserCache;

        // Register the server methods
        server.method(ServerMethods.methods);

        // Set up the static routing
        server.route(require('../routes').staticHandlers);

        // Set up the dynamic routing
        server.route(require('../routes').dynamicHandlers);

        // console.log(server.eventNames());

        Logging.logger.info('Completed server initialization');

        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
};

// Export the server so that it can be used in the integration tests
module.exports = {
    server: server,
    initialize: initialize
};

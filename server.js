'use strict';

/**
 * Application entry point: Initializes the Hapi server
 */
const hapi = require('hapi');
const fs = require('fs');
const nunjucks = require('nunjucks');

const system = require('./src/lib/system');
const logging = require('./src/lib/logging');
const authorization = require('./src/lib/authorization');
const serverMethods = require('./src/lib/server-methods');
const templateBuilder = require('./assembly/template-builder');
const assetManager = require('./assembly/asset-manager');

const srvcfg = system.configuration.server;

logging.logger.info(fs.readFileSync('./banner.txt', 'utf8'));

// Build gov.uk templates and start the asset manager
templateBuilder.build();
assetManager.start();

// Create a Hapi server with a redis cache
// as the main client cache
const server = new hapi.Server({
    cache: [{
        engine: require('catbox-redis'),
        host: process.env.REDIS_HOSTNAME,
        port: process.env.REDIS_PORT,
        partition: 'cache'
    }],
    app: {
        foo: 'bar'
    },
    load: {
        sampleInterval: srvcfg.sampleInterval
    }
});

// Set the server connection details
const connections = server.connection({
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    routes: {
        cors: false,
        timeout: { server: srvcfg.timeout }
    }
});

logging.logger.log('debug', `Hapi server connection settings: ${JSON.stringify(connections.info)}`);

// TODO Add Boom
// A function to provision and start the Hapi server
(async () => {
    try {

        // Register the logging plugin
        await server.register({
            register: require('good'),
            options: {
                reporters: {
                    winston: [logging.goodWinstonStream]
                }
            }
        });

        // Register the static data server
        await server.register({
            register: require('inert')
        });

        // Register rendering plugin support
        await server.register({
            register: require('vision')
        });

        // Register Hapi Authorization cookies
        await server.register({
            register: require('hapi-auth-cookie')
        });

        // Register Crumb - looks like this is broken with the current
        // version of hapi
        // await server.register({
        //    register: require('crumb')
        // });

        // Configure nunjucks
        server.views({
            engines: {
                html: {
                    compile: function (src, options) {
                        const template = nunjucks.compile(src, options.environment);
                        return function (context) {
                            return template.render(context);
                        };
                    },

                    prepare: function (options, next) {
                        options.compileOptions.environment = nunjucks.configure(options.path, { watch: false });
                        return next();
                    }
                }
            },

            // Set up the location of the template resources
            relativeTo: __dirname,
            path: 'web/templates',
            layoutPath: 'web/layout',
            helpersPath: 'web/helpers',

            // Set up the common data
            context: require('./src/lib/common-view-data'),

            // Cause the template rendering engine to reread the file on each invocation
            // in development to avoid restarts when changing templates
            isCached: process.env.NODE_ENV !== 'local'
        });

        // Create a Hapi-server cache policy
        // To hold the authenticated user data. This will
        // live in the plug-in cache
        const cache = server.cache({
            segment: 'authenticated-sessions',
            expiresIn: srvcfg.cache.authorization.timeToLive
        });

        server.app.cache = cache;

        server.auth.strategy('session', 'cookie', true, {
            password: srvcfg.authorization.cookie.ironCookiePassword,
            cookie: 'sid',
            redirectTo: '/login',
            isSecure: false,
            clearInvalid: true,
            validateFunc: authorization.validate
        });

        // Register the server methods
        server.method(serverMethods.methods);

        // Set up the routing
        server.route(require('./src/routes'));

        // Start the server
        await server.start();
        logging.logger.info(`Server started at ${server.info.uri}`);
    } catch (err) {
        logging.logger.log('error', err);
        process.exit(1);
    }
})();

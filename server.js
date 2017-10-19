'use strict';

/**
 * Application entry point: Initializes the Hapi server
 */
const hapi = require('hapi');
const fs = require('fs');
const nunjucks = require('nunjucks');
const path = require('path');

const system = require('./src/lib/system');
const authorization = require('./src/lib/authorization');
const serverMethods = require('./src/lib/server-methods');
const templateBuilder = require('./assembly/template-builder');
const assetManager = require('./assembly/asset-manager');

const srvcfg = system.configuration.server;

system.logger.info(fs.readFileSync('./banner.txt', 'utf8'));

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
    }]
});

// Set the server connection details
server.connection({
    host: process.env.HOSTNAME,
    port: process.env.PORT
});

// TODO Add Boom
// A function to provision and start the Hapi server
(async () => {
    try {

        // Register the logging plugin
        await server.register({
            register: require('good'),
            options: {
                reporters: {
                    winston: [system.goodWinstonStream]
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

        // Configure nunjucks
        server.views({
            engines: {
                html: {
                    compile: function (src, options) {
                        system.logger.info(`Compiling template ${src}`);
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
            context: require('./src/lib/common-view-data')
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
            validateFunc: authorization.validate
        });

        // Register the server methods
        server.method(serverMethods.methods);

        // Set up the routing
        server.route(require('./src/routes'));

        // Start the server
        await server.start();
        system.logger.info(`Server started at ${server.info.uri}`);
    } catch (err) {
        system.logger.log('error', err);
        process.exit(1);
    }
})();

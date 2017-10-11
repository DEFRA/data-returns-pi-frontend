'use strict';

/**
 * Application entry point: Initializes the Hapi server
 */
const hapi = require('hapi');
const fs = require('fs');

const system = require('./app/lib/system.js');
const srvcfg = system.configuration.server;

system.logger.info(fs.readFileSync('./banner.txt', 'utf8'));

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

// Register the logging plugin
server.register({
    register: require('good'),
    options: {
        reporters: {
            winston: [ system.goodWinstonStream ]
        }
    }
}, (err) => {
    if (err) {
        system.logger.log('error', err);
        process.exit(1);
    }
});

// Register server methods
server.method([{
    name: 'sessionData',
    // the 'next' callback must be used to return values
    method: function (sid, data, next) {
        next(null, 'Welcome: ' + data);
    },
    options: {
        cache: {
            segment: 'session-data',
            expiresIn: 60000,
            staleIn: 30000,
            staleTimeout: 10000,
            generateTimeout: 100
        },
        generateKey: function (sid) {
            return sid + '_sessionData';
        }
    }
}]);

// Register Hapi Authorization cookies
server.register({
    register: require('hapi-auth-cookie')
}, (err) => {

    if (err) {
        system.logger.log('error', err);
        process.exit(1);
    }

    // Create a Hapi-server cache policy
    // To hold the authenticated user data. This will
    // live in the plug-in cache
    const cache = server.cache({
        segment: 'authenticated-sessions',
        expiresIn: srvcfg.session.timeToLive
    });

    server.app.cache = cache;

    server.auth.strategy('session', 'cookie', true, {
        password: srvcfg.session.ironCookiePassword,
        cookie: 'sid',
        redirectTo: '/login',
        isSecure: false,
        // An optional validation function used to validate the content
        // of the session cookie on each request
        validateFunc: function (request, session, callback) {
            server.app.cache.get(session.sid, (err, cached) => {

                if (err) {
                    return callback(err, false);
                }

                if (!cached) {
                    return callback(null, false);
                }

                // If we are validated add the sid to the request object
                server.app.sid = session.sid;

                // Return a validated callback function
                return callback(null, true, cached.account);
            });
        }
    });

    // Set up the routing
    server.route(require('./app/routes'));
});

// Start the server
server.start(() => {
    system.logger.info(`Server started at ${server.info.uri}`);
});

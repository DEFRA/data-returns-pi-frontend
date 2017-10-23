'use strict';

/**
 * Application entry point
 */
const logging = require('./src/lib/logging');
const server = require('./src/lib/server');
const templateBuilder = require('./assembly/template-builder');
const assetManager = require('./assembly/asset-manager');
const fs = require('fs');

logging.logger.info(fs.readFileSync('./banner.txt', 'utf8'));

// Build gov.uk templates and start the asset manager
templateBuilder.build();
assetManager.start();

// Start the server
(async () => {
    try {
        await server.initialize();
        await server.server.start();
        logging.logger.info(`Server started at ${server.server.info.uri}`);
    } catch (err) {
        logging.logger.log('error', err);
        process.exit(1);
    }
})();

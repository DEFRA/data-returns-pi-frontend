'use strict';

/**
 * Application entry point
 */
const logger = require('./src/lib/logging').logger;
const Server = require('./src/lib/server');
const TemplateBuilder = require('./assembly/template-builder');
const AssetManager = require('./assembly/asset-manager');
const Fs = require('fs');

logger.info(Fs.readFileSync('./banner.txt', 'utf8'));

// Build gov.uk templates and start the asset manager
TemplateBuilder.build();
AssetManager.start();

// Start the server
(async () => {
    try {
        await Server.initialize();
        await Server.server.start();
        logger.info(`Server started at ${Server.server.info.uri}`);
    } catch (err) {
        logger.log('error', err);
        process.exit(1);
    }
})();

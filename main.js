'use strict';

/**
 * Application entry point
 */
const logger = require('./src/lib/logging').logger;
const Server = require('./src/lib/server');
const TemplateBuilder = require('./assembly/template-builder');
const AssetManager = require('./assembly/asset-manager');
const Fs = require('fs-extra');

logger.info(Fs.readFileSync('./banner.txt', 'utf8'));

// Create log and public directories if they do not exist
try {
    Fs.ensureDir('./logs');
    Fs.ensureDir('./public/images');
    Fs.ensureDir('./public/javascripts');
    Fs.ensureDir('./public/stylesheets');
} catch (err) {
    console.error(err);
    process.exit(1);
}

// Build gov.uk templates and start the asset manager
TemplateBuilder.build();
AssetManager.start();

// Start the server
(async () => {
    try {
        await Server.initialize();
        await Server.start();
        logger.info(`Server started at ${Server.server().info.uri}`);
    } catch (err) {
        logger.log('error', err);
        process.exit(1);
    }
})();

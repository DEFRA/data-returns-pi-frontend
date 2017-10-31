'use strict';

const System = require('./system');

/**
 * This object is provides common data to to all views
 * @type {{assetPath: string}}
 */
module.exports = {
    service_title: 'Report your pollution inventory',
    full_service_title: 'Report your pollution inventory',
    asset_path: '/public/',
    css: {
        compressed: System.configuration.css.compressed || false
    }
};

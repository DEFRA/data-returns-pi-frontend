'use strict';

const system = require('./system');

/**
 * This object is provides common data to to all views
 * @type {{assetPath: string}}
 */
module.exports = {
    asset_path: '/public/',
    css: {
        compressed: system.configuration.css.compressed || false
    }
};

'use strict';

/**
 * System wide resources
 * @type {*|yaml}
 */
const yaml = require('js-yaml');
const fs = require('fs');
const dotenv = require('dotenv');
const timestamp = require('time-stamp');

/**
 * Copy environment variables to process.env
 */
dotenv.config();

/**
 * Get the global system configuration
 * @returns {*} - The global system configuration
 */
function getSystemConfiguration () {
    try {
        console.log('info', `Reading system configuration: ${process.env.CONFIG}`);
        return yaml.safeLoad(fs.readFileSync(process.env.CONFIG, 'utf8'));
    } catch (err) {
        console.log('error', `Cannot read the system configuration: ${err}`);
        process.exit(1);
    }
}

module.exports = {
    /**
   * Return the system configuration as a javascript object
   * @returns {*} The global system configuration
   */
    configuration: getSystemConfiguration(),

    /**
   * Standard timestamp used throughout the application
   */
    timestamp: timestamp('YYYY/MM/DD HH:mm:ss')
};

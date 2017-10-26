'use strict';

/**
 * System wide resources
 * @type {*|yaml}
 */
const yaml = require('js-yaml');
const fs = require('fs');
const dotenv = require('dotenv');
const timestamp = require('time-stamp');
const joi = require('joi');

/**
 * Copy environment variables to process.env
 */
dotenv.config();

/**
 * Validate the environment variables
 */
const environmentSchema = joi.object({
    CONFIG: joi.string().required(),
    APP_ROOT: joi.string().required(),
    HOSTNAME: joi.string().required(),
    PORT: joi.number().required(),
    REDIS_HOSTNAME: joi.string().required(),
    REDIS_PORT: joi.number().required()
}).unknown()
    .required();

const { error } = joi.validate(process.env, environmentSchema);
if (error) {
    console.log(`Environment validation error: ${error.message}`);
    console.log('Please check your .env file is correct in the application root');
    process.exit(1);
}

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

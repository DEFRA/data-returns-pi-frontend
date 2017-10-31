'use strict';

/**
 * System wide resources
 * @type {*|Yaml}
 */
const Yaml = require('js-yaml');
const Fs = require('fs');
const Dotenv = require('dotenv');
const Timestamp = require('time-stamp');
const Joi = require('joi');

/**
 * Copy environment variables to process.env
 */
Dotenv.config();

/**
 * Validate the environment variables
 */
const environmentSchema = Joi.object({
    CONFIG: Joi.string().required(),
    APP_ROOT: Joi.string().required(),
    HOSTNAME: Joi.string().required(),
    PORT: Joi.number().required(),
    REDIS_HOSTNAME: Joi.string().required(),
    REDIS_PORT: Joi.number().required()
}).unknown()
    .required();

const { error } = Joi.validate(process.env, environmentSchema);

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
        return Yaml.safeLoad(Fs.readFileSync(process.env.CONFIG, 'utf8'));
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
    time: () => {
        return Timestamp('YYYY/MM/DD HH:mm:ss');
    }
};

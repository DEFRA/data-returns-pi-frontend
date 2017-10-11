'use strict';

/**
 * System wide resources
 * @type {*|yaml}
 */
const yaml = require('js-yaml');
const fs = require('fs');
const winston = require('winston');
const dotenv = require('dotenv');
const GoodWinston = require('good-winston');

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
        winlogger.info('info', `Reading system configuration: ${process.env.CONFIG}`);
        return yaml.safeLoad(fs.readFileSync(process.env.CONFIG, 'utf8'));
    } catch (err) {
        winlogger.info('error', `Cannot read configuration: ${err}`);
        return null;
    }
}

const winlogger = new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)({
            colorize: 'all'
        })
    ]
});

module.exports = {
    /**
   * Return the system configuration as a javascript object
   * @returns {*} The global system configuration
   */
    configuration: getSystemConfiguration(),

    /**
   * Return the system logger
   */
    logger: winlogger,

    /**
   * Return the winston-good interface for Hapi
   */
    goodWinstonStream: new GoodWinston({ winston: winlogger })
};

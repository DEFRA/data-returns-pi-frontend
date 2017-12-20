'use strict';

/**
 * System logger resources
 * @type {*|yaml}
 */
const Winston = require('winston');
const GoodWinston = require('good-winston');
const System = require('./system');
const _ = require('lodash');

const commonLoggingOptions = {
    level: process.env.LOG_LEVEL || 'info',
    colorize: true,
    silent: false,
    timestamp: true,
    json: false,
    showLevel: true,
    handleExceptions: true,
    humanReadableUnhandledException: true
};

const fileLoggingOptions = {
    filename: System.configuration.logging.file,
    maxsize: 2 * Math.pow(2, 20),
    maxFiles: 10,
    tailable: true
};

const winlogger = new Winston.Logger({
    transports: [
        new (Winston.transports.Console)(commonLoggingOptions),
        new (Winston.transports.File)(_.merge({}, commonLoggingOptions, fileLoggingOptions))
    ]
});

module.exports = {
    /**
     * Return the system logger
     */
    logger: winlogger,

    /**
     * Return the winston-good interface for Hapi
     */
    goodWinstonStream: () => {
        return [ new GoodWinston({ winston: winlogger }) ];
    }
};

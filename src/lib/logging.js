'use strict';

/**
 * System logger resources
 * @type {*|yaml}
 */
const winston = require('winston');
const GoodWinston = require('good-winston');
const system = require('./system');
const _ = require('lodash');

const commonLoggingOptions = {
    level: process.env.NODE_ENV === 'local' ? system.configuration.logging.level : 'info',
    colorize: true,
    silent: false,
    timestamp: true,
    json: false,
    showLevel: true,
    handleExceptions: true,
    humanReadableUnhandledException: true
};

const fileLoggingOptions = {
    filename: system.configuration.logging.file,
    maxsize: 2 * Math.pow(2, 20),
    maxFiles: 10,
    tailable: true
};

const winlogger = new winston.Logger({
    transports: [
        new (winston.transports.Console)(commonLoggingOptions),
        new (winston.transports.File)(_.merge({}, commonLoggingOptions, fileLoggingOptions))
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
    goodWinstonStream: new GoodWinston({ winston: winlogger })
};

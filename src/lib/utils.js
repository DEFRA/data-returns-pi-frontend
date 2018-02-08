'use strict';

const logger = require('./logging').logger;
const serviceError = require('./api-client').ServiceError;
const cacheKeyError = require('./user-cache-policies').CacheKeyError;

/**
 * This module contains common utilities
 */
module.exports = {
    /**
     * Tests for a valid number
     * @param n
     * @returns {boolean}
     */
    isNumeric: (n) => {
        return !Number.isNaN(Number.parseFloat(n)) && isFinite(n);
    },

    generalErrorHandler: (err, h) => {
        if (err instanceof serviceError) {
            logger.log('error', 'Service error:' + err);
            return h.redirect('/service-error');
        } else if (err instanceof cacheKeyError) {
            logger.debug('Cache error:' + err);
            return h.redirect('/');
        } else {
            logger.log('error', 'Unexpected error:' + err);
            return h.redirect('/logout');
        }
    }

};

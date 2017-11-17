'use strict';

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
    }
};

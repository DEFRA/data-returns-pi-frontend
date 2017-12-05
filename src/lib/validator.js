'use strict';

/**
 * Validate a release object
 */

const MasterDataService = require('../../src/service/master-data');
const findOffsiteTransfer = require('../handlers/all-sectors/report/off-site').findOffsiteTransfer;
const isNumeric = require('./utils').isNumeric;

const isBrt = (value) => {
    return value && typeof value === 'string' && value.toUpperCase().trim() === 'BRT';
};

module.exports = {
    /**
     * Validate a single release.
     * separate error add for each alternative value
     * @param release - the release objects. Modified to include validation details
     * @return returns an array like [ { key: 'key', label: 'error' } ] or undefined if valid
     */
    release: (release) => {

        const result = [];
        if (!isBrt(release.value) && !isNumeric(release.value)) {
            result.push({ key: 'value', errno: 'PI-1000' });
        }

        // Test units and BRT
        if (isBrt(release.value) && release.unitId) {
            result.push({ key: 'unitId', errno: 'PI-1001' });
        }

        // Test non BRT value is present and is a number and without units
        if (!isBrt(release.value) && !release.unitId) {
            result.push({ key: 'unitId', errno: 'PI-1002' });
        }

        if (!isNumeric(release.methodId)) {
            result.push({ key: 'methodId', errno: 'PI-1003' });
        }

        return result.length > 0 ? result : null;
    },

    /**
     * Validate an offsite waste transfer
     * @param offsite
     * @return {*}
     */
    offsite: async (tasks, offsite) => {
        const result = [];
        if (!isNumeric(offsite.value)) {
            result.push({ key: 'value', errno: 'PI-2000' });
        }

        // Test EWC code
        if (!offsite.ewc) {
            result.push({ key: 'ewc', errno: 'PI-2001' });
        }

        // Test the waste code
        if (!isNumeric(offsite.wfd.disposalId) && !isNumeric(offsite.wfd.recoveryId)) {
            result.push({ key: 'ewc', errno: 'PI-2002' });
        }

        // Test if it already exists
        if (findOffsiteTransfer(tasks, offsite) !== -1) {
            result.push({ key: 'offsite', errno: 'PI-2003' });
        }

        return result.length > 0 ? result : null;
    },

    /**
     * Takes a user supplied string and attempts to split into three numerical components
     * representing the activity chapter and sub-chapter components of the ewc code. Returns an
     * object containing the three validated components or null
     * @param ewcstr - The string to process
     */
    ewcParse: (ewcStr) => {
        const expr = new RegExp('^\\s*?(\\d{2})[\\s\\-\\.]*?(\\d{2})[\\s-\\.]*?(\\d{2})\\s*$');
        const matched = ewcStr.match(expr);
        if (matched) {
            const [, activity, chapter, subChapter] = matched;
            return MasterDataService.getEwc(activity, chapter, subChapter);
        } else {
            return null;
        }
    }
};

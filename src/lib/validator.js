'use strict';

/**
 * Validate a release object
 */
const isNumeric = require('./utils').isNumeric;

// TODO move this into the handler section
const internals = {

    /**
     * What it says on the tin
     */
    isBrt: (value) => {
        return value && typeof value === 'string' && value.toUpperCase().trim() === 'BRT';
    },

    /**
     * Validate a single release.
     * separate error add for each alternative value
     * @param release - the release objects. Modified to include validation details
     * @return returns an array like [ { key: 'key', label: 'error' } ] or undefined if valid
     */
    release: (release) => {

        const result = [];
        if (!internals.isBrt(release.value) && !isNumeric(release.value)) {
            result.push({key: 'value', errno: 'PI-1000'});
        }

        // Test units and BRT
        if (internals.isBrt(release.value) && release.unitId) {
            result.push({key: 'unitId', errno: 'PI-1001'});
        }

        // Test non BRT value is present and is a number and without units
        if (!internals.isBrt(release.value) && !release.unitId) {
            result.push({key: 'unitId', errno: 'PI-1002'});
        }

        if (!isNumeric(release.methodId)) {
            result.push({key: 'methodId', errno: 'PI-1003'});
        }

        /*
         * If we have a notifiable release we must also have both a value and a unit
         */
        if (release.notifiable) {
            if (internals.isBrt(release.value)) {
                // You cannot set BRT for a notifiable release
                result.push({key: 'value', errno: 'PI-1004'});
            } else {
                if (!isNumeric(release.notifiable.value)) {
                    // The notifiable release must be a number
                    result.push({key: 'notifiableValue', errno: 'PI-1005'});
                } else {
                    /*
                     * Need unit scaling for this test
                     * if (release.notifiable.value < release.value) {
                     *    // The value must include any notifable release amount
                     *    result.push({key: 'value', errno: 'PI-1006'});
                     * }
                     */
                }

                // Notifiable releases must have a unit
                if (!release.notifiable.unitId) {
                    result.push({key: 'notifiableUnitId', errno: 'PI-1007'});
                }
            }
        }

        return result.length > 0 ? result : null;
    }

};

module.exports = {
    isBrt: internals.isBrt,
    findOffSiteTransfer: internals.findOffSiteTransfer,
    release: internals.release,
    offSite: internals.offSite,
    offSiteAdd: internals.offSiteAdd,
    overseas: internals.overseas
};

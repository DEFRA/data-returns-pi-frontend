'use strict';

/**
 * Validate a release object
 */
const isNumeric = require('./utils').isNumeric;

const internals = {
    /**
     * What it says on the tin
     */
    isBrt: (value) => {
        return value && typeof value === 'string' && value.toUpperCase().trim() === 'BRT';
    },

    /**
     * Test if a given offsite waste transfer already exists in a tasks object
     * Its here to prevent circular reference (not ideal)
     * @param tasks - The tasks cache
     * @param offsiteTransfer - An off-site object
     * @return {*}
     */
    findOffSiteTransfer: (tasks, offSiteTransfer) => {
        try {
            return tasks.offSiteTransfers.findIndex(t =>
                t.ewc.activityId === offSiteTransfer.ewc.activityId &&
                t.ewc.chapterId === offSiteTransfer.ewc.chapterId &&
                t.ewc.subChapterId === offSiteTransfer.ewc.subChapterId &&
                t.wfd.disposalId === offSiteTransfer.wfd.disposalId &&
                t.wfd.recoveryId === offSiteTransfer.wfd.recoveryId
            );
        } catch (err) {
            return -1;
        }
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
            result.push({ key: 'value', errno: 'PI-1000' });
        }

        // Test units and BRT
        if (internals.isBrt(release.value) && release.unitId) {
            result.push({ key: 'unitId', errno: 'PI-1001' });
        }

        // Test non BRT value is present and is a number and without units
        if (!internals.isBrt(release.value) && !release.unitId) {
            result.push({ key: 'unitId', errno: 'PI-1002' });
        }

        if (!isNumeric(release.methodId)) {
            result.push({ key: 'methodId', errno: 'PI-1003' });
        }

        return result.length > 0 ? result : null;
    },

    /**
     * Validate an offsite waste transfer (when adding)
     * @param offSite
     * @return {*}
     */
    offSiteAdd: (tasks, offSite) => {
        const result = internals.offSite(offSite) || [];

        // Test if it already exists
        if (tasks && internals.findOffSiteTransfer(tasks, offSite) !== -1) {
            result.push({ key: 'off-site', errno: 'PI-2003' });
        }

        return result.length > 0 ? result : null;
    },

    /**
     * Validate an offsite waste transfer (when changing)
     * @param offSite
     * @return {*}
     */
    offSite: (offSite) => {
        const result = [];
        if (!isNumeric(offSite.value)) {
            result.push({ key: 'value', errno: 'PI-2000' });
        }

        // Test EWC code
        if (!offSite.ewc) {
            result.push({ key: 'ewc', errno: 'PI-2001' });
        }

        // Test the waste code
        if (!offSite.wfd || (!offSite.wfd.disposalId && !offSite.wfd.recoveryId)) {
            result.push({ key: 'wfd', errno: 'PI-2002' });
        }

        return result.length > 0 ? result : null;
    }

};

module.exports = {
    findOffSiteTransfer: internals.findOffSiteTransfer,
    release: internals.release,
    offSite: internals.offSite,
    offSiteAdd: internals.offSiteAdd
};

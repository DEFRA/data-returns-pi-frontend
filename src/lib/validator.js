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
            return tasks.transfers.findIndex(t =>
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
     * Validate an off-site waste transfer (when adding)
     * @param tasks - the tasks
     * @param offSiteTransferObject
     * @return {*}
     */
    offSiteAdd: (tasks, offSiteTransferObject) => {
        const result = internals.offSite(offSiteTransferObject) || [];

        // Test if it already exists
        if (tasks && internals.findOffSiteTransfer(tasks, offSiteTransferObject) !== -1) {
            result.push({ key: 'off-site', errno: 'PI-2003' });
        }

        return result.length > 0 ? result : null;
    },

    /**
     * Validate an off-site waste transfer (when changing)
     * @param offSiteTransferObject - an off-site transfer object (cache object) to validate
     * @return {*}
     */
    offSite: (offSiteTransferObject) => {
        const result = [];
        if (!isNumeric(offSiteTransferObject.value)) {
            result.push({ key: 'value', errno: 'PI-2000' });
        }

        // Test EWC code
        if (!offSiteTransferObject.ewc) {
            result.push({ key: 'ewc', errno: 'PI-2001' });
        }

        // Test the waste code
        if (!offSiteTransferObject.wfd || (!offSiteTransferObject.wfd.disposalId && !offSiteTransferObject.wfd.recoveryId)) {
            result.push({ key: 'wfd', errno: 'PI-2002' });
        }

        return result.length > 0 ? result : null;
    },

    /**
     * Validate an overseas transfer object
     * @param overseasTransferObject
     * @return {*}
     */
    overseas: (overseasTransferObject) => {

        const result = [];

        if (!isNumeric(overseasTransferObject.substanceId)) {
            result.push({key: 'substance', errno: 'PI-3000'});
        }

        if (!isNumeric(overseasTransferObject.value)) {
            result.push({key: 'detail.value', errno: 'PI-3001'});
        }

        if (!isNumeric(overseasTransferObject.methodId)) {
            result.push({key: 'detail.method', errno: 'PI-3002'});
        }

        if (!isNumeric(overseasTransferObject.operationId)) {
            result.push({key: 'detail.operation', errno: 'PI-3003'});
        }

        if (!overseasTransferObject.transportationCompanyAddress.addressLine1) {
            result.push({key: 'transportation-co-address.address-line-1', errno: 'PI-3010'});
        }

        if (!overseasTransferObject.transportationCompanyAddress.businessName) {
            result.push({key: 'transportation-co-address.business-name', errno: 'PI-3011'});
        }

        if (!overseasTransferObject.transportationCompanyAddress.country) {
            result.push({key: 'transportation-co-address.country', errno: 'PI-3012'});
        }

        if (!overseasTransferObject.transportationCompanyAddress.townOrCity) {
            result.push({key: 'transportation-co-address.town-or-city', errno: 'PI-3013'});
        }

        if (!overseasTransferObject.destinationAddress.addressLine1) {
            result.push({key: 'destination-address.address-line-1', errno: 'PI-3020'});
        }

        if (!overseasTransferObject.destinationAddress.businessName) {
            result.push({key: 'destination-address.business-name', errno: 'PI-3021'});
        }

        if (!overseasTransferObject.destinationAddress.country) {
            result.push({key: 'destination-address.country', errno: 'PI-3022'});
        }

        if (!overseasTransferObject.destinationAddress.townOrCity) {
            result.push({key: 'destination-address.town-or-city', errno: 'PI-3023'});
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

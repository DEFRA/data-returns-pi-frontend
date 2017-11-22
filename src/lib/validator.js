'use strict';

/**
 * Validate a release object
 */
const Errors = require('../model/all-sectors/errors');
const isNumeric = require('./utils').isNumeric;
const Joi = require('joi');

const BELOW_REGULATORY_THRESHOLD = 'BRT';

const isBrt = (value) => {
    return value && typeof value === 'string' && value.toUpperCase().trim() === BELOW_REGULATORY_THRESHOLD;
};

const releasesSchema = Joi.object({
    unitId: Joi.number().min(1).max(3).required(),
    methodId: Joi.number().required(),
    value: [Joi.string().valid('BRT').insensitive(), Joi.number()]
});

module.exports = {

    /**
     * Validate a single release
     * @param release - the release objects. Modified to include validation details
     * @return {boolean} - returns true if valid false if invalid
     */
    release: (release) => {

        // Remove any old validations
        delete release.errors;

        let isValid = true;

        if (!isBrt(release.value) && !isNumeric(release.value)) {
            isValid = false;
            release.errors = [ Errors.NOT_A_NUMBER_OR_BRT.errno ];
        } else if (isBrt(release.value)) {
            // Store the standard value BRT
            release.value = BELOW_REGULATORY_THRESHOLD;
        } else if (isNumeric(release.value)) {
            // Store pure float
            release.value = Number.parseFloat(release.value);
        }

        // Test units and BRT
        if (isBrt(release.value) && release.unitId) {
            isValid = false;
            if (release.errors) {
                release.errors.push(Errors.UNIT_WITH_BRT.errno);
            } else {
                release.errors = [ Errors.UNIT_WITH_BRT.errno ];
            }
        }

        // Test non BRT value is present and is a number and without units
        if (!isBrt(release.value) && !release.unitId) {
            isValid = false;
            if (release.errors) {
                release.errors.push(Errors.NUMBER_WITHOUT_UNIT.errno);
            } else {
                release.errors = [ Errors.NUMBER_WITHOUT_UNIT.errno ];
            }
        }

        return isValid;
    }
};

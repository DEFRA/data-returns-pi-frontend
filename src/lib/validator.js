'use strict';

/**
 * Validate a release object
 */
// const Errors = require('../model/all-sectors/errors');
const Joi = require('joi');

const BELOW_REGULATORY_THRESHOLD = 'BRT';

/*
 * The joi validation object for a single release object.
 */
const releaseSchema = Joi.object({

    // The value must either be a floating point number or BRT
    value: Joi.alternatives().try(
        Joi.string().valid('BRT').trim().insensitive().label('PI-1000'),
        Joi.string().regex(/^[-+]?[0-9]*\.?[0-9]+$/).label('PI-1000'),
        Joi.number().label('PI-1000')
    ).required().label('PI-1000'),

    // If value is a number then we must have a unit. If BRT then a unit is forbidden
    unitId: Joi.any().when('value', {
        is: Joi.string().exist().valid(BELOW_REGULATORY_THRESHOLD).trim().insensitive(),
        then: Joi.any().forbidden().label('PI-1001'),
        otherwise: Joi.number().required().integer().positive().label('PI-1002')
    }),

    // Every release must have a method
    methodId: Joi.number().integer().positive().required().label('PI-1003')

});

module.exports = {
    /**
     * Validate a single release. The validations from Joi need to be de-duplicated as joi produces a
     * seperate error detail for each alternative value
     * @param release - the release objects. Modified to include validation details
     * @return returns an array like [ { key: 'key', label: 'error' } ] or undefined if valid
     */
    release: (release) => {
        return Joi.validate(release, releaseSchema, { escapeHtml: true, abortEarly: false }, (error) => {
            if (error) {
                const {details} = error;
                const validations = details.map(d => { return {key: d.context.key, errno: d.context.label}; });
                return validations.reduce((accumulator, currentValue) => {
                    if (accumulator.length > 0 && accumulator.find(a => currentValue.key === a.key && currentValue.errno === a.errno)) {
                        return accumulator;
                    } else {
                        return accumulator.concat(currentValue);
                    }
                }, []);
            } else {
                return null;
            }
        });
    }
};

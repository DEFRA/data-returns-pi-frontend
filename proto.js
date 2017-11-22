
'use strict';

const Joi = require('joi');

const schema = Joi.object({

    // The value must either be a floating point number or BRT
    value: [ Joi.string().valid('BRT').trim().insensitive().label('PI-1000'),
        Joi.string().regex(/^[-+]?[0-9]*\.?[0-9]+$/).label('PI-1000'), Joi.number()
    ],

    // If value is a number then we must have a unit. If BRT then a unit is forbidden
    unitId: Joi.number().integer().positive().when('value', {
        is: Joi.string().valid('BRT').trim().insensitive(),
        then: Joi.any().forbidden().label('PI-1001'),
        otherwise: Joi.required().label('PI-1002')
    }),

    // Every release must have a method
    methodId: Joi.number().integer().positive().required().label('PI-1003')

});

// const releases = { value: Number.parseFloat('9087.8976') };
const releases = { value: 56 };
const { error } = Joi.validate(releases, schema);

if (error) {
    console.log(error.details.map(d => {
        return { path: d.path, context: d.context };
    }));
    // console.log(error.context.label);
}

/*
 * console.log(JSON.stringify(error, null, 4));
 * console.log(JSON.stringify(Joi.validate(releases, schema), null, 4));
 */

/*
 * releases.value = 'brt';
 *
 * console.log(JSON.stringify(Joi.validate(releases, releasesSchema)));
 *
 * delete releases.value;
 *
 * console.log(JSON.stringify(Joi.validate(releases, releasesSchema)));
 */

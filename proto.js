
'use strict';

const Joi = require('joi');

const schema = Joi.object({

    /*
     * The value must either be a floating point number or BRT
     *value: [ Joi.string().valid('BRT').trim().insensitive().label('PI-1000'),
     *    Joi.string().regex(/^[-+]?[0-9]*\.?[0-9]+$/).label('PI-1000'), Joi.number()
     *],
     */
    value: Joi.alternatives().try(
        Joi.string().valid('BRT').trim().insensitive().label('PI-1000'),
        Joi.string().regex(/^[-+]?[0-9]*\.?[0-9]+$/).label('PI-1000'),
        Joi.number().label('PI-1000')
    ).required().label('PI-1000'),

    // If value is a number then we must have a unit. If BRT then a unit is forbidden
    unitId: Joi.any().when('value', {
        is: Joi.string().exist().valid('BRT').trim().insensitive(),
        then: Joi.any().forbidden().label('PI-1001'),
        otherwise: Joi.number().required().integer().positive().label('PI-1002')
    }),

    // Every release must have a method
    methodId: Joi.number().integer().positive().required().label('PI-1003')

});

// const releases = { value: Number.parseFloat('9087.8976') };
const releases = { unitId: 1, methodId: 1 };

const x = Joi.validate(releases, schema, { escapeHtml: true, abortEarly: false }, (error) => {
    /*
     * const { details } = error;
     *return error ? details.map(d => { return { key: d.context.key, errno: d.context.label }; }) : null;
     */
    const { details } = error;
    const validations = details.map(d => { return { key: d.context.key, errno: d.context.label }; });

    const red = validations.reduce((accumulator, currentValue, currentIndex, array) => {
        if (accumulator.length > 0 && accumulator.find(a => currentValue.key === a.key && currentValue.errno === a.errno )) {
            return accumulator;
        } else {
            return accumulator.concat(currentValue);
        }
    }, []);

    // const xz = [...new Set(details.map(d => { return { key: d.context.key, errno: d.context.label }; }))];
    return red;
});

console.log(JSON.stringify(x, null, 4));

/*
 * console.log(error);
 *
 * if (error) {
 *     console.log(error.details.map(d => {
 *         return { path: d.path, context: d.context };
 *     }));
 *     // console.log(error.context.label);
 * }
 */

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

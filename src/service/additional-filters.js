'use strict';

const Errors = require('../model/all-sectors/errors');

/**
 * Additional filters for use in the nunjunks templates. The vision helpers configuration does not appear to work
 * so this is added in the seview view configuration.
 */
module.exports = [
    {
        functionName: 'concernsElement',
        filterFunction: (pageErrors, element) => {
            for (const errno of pageErrors) {

                const found = Errors.mapByCode(errno).fields.find((field) => {
                    return field === element;
                });

                if (found) {
                    return errno;
                }
            }
            return undefined;
        }
    }
];

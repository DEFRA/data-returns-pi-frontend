'use strict';

const Errors = require('../model/all-sectors/errors');

/**
 * Additional filters for use in the nunjunks templates. The vision helpers configuration does not appear to work
 * so this is added in the seview view configuration.
 */
module.exports = [

    {
        functionName: 'concernsElement',

        /**
         * Determine if a given set of page errors concern a particular element
         * @param pageErrors
         * @param element
         * @returns {*} - The error applying to the element
         */
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
    },

    {
        functionName: 'substancesWithErrors',

        /**
         * Process the releases object to filter only those substance names with errors
         * @param releases - the releases object
         * @returns {*} - The substance name
         */
        filterFunction: (releases) => {
            return releases.filter(r => r.errors).map(r => r.substance);
        }
    }

];

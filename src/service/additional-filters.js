'use strict';

/**
 * Additional filters for use in the nunjunks templates. The vision helpers configuration does not appear to work
 * so this is added in the seview view configuration.
 */
module.exports = [
    {
        functionName: 'selectattr',

        /**
         * Filters a sequence of objects by applying a test to the specified attribute of each object,
         * and only selecting the objects with the test succeeding
         * @param seq
         * @param attr
         * @param val
         * @return {*}
         */
        filterFunction: (seq, attr, val) => {
            if (Array.isArray(seq)) {
                for (const item of seq) {
                    if (item[attr] && item[attr] === val) {
                        return item;
                    }
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

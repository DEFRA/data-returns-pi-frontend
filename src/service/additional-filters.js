'use strict';

/**
 * Additional filters for use in the nunjunks templates. The vision helpers configuration does not appear to work
 * so this is added in the seview view configuration.
 */
module.exports = [
    {
        functionName: 'map',

        /**
         * Filters a sequence of objects by applying a test to the specified attribute of each object,
         * and only selecting the objects with the test succeeding
         * @param seq
         * @param attr
         * @param val
         * @return {*}
         */
        filterFunction: (seq, attr) => {
            return seq.filter(r => r[attr]).map(r => r[attr]);
        }
    },

    {
        functionName: 'selectattr2',

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
    },

    {
        functionName: 'transfersWithErrors',

        /**
         * Process the releases object to filter only those transfers  with errors
         * @param releases - the releases object
         * @returns {*} - The substance name
         */
        filterFunction: (transfers) => {
            return transfers.filter(r => r.errors);
        }
    },

    {
        functionName: 'transferShortDesc',

        /**
         * Print out a humen readable short description for an off-site transfer
         */
        filterFunction: (transfer) => {
            const dr = transfer.wfd.disposal ? transfer.wfd.disposal.code : transfer.wfd.recovery.code;
            return `${transfer.ewc.activity.activity} ${transfer.ewc.chapter.chapter} ${transfer.ewc.subChapter.subChapter} / ${dr}`;
        }
    }
];

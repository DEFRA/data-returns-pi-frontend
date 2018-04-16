'use strict';

/**
 * Standalone static data used for front end development
 */
module.exports = {

    methods: [
        {'id': 1, name: 'Measurement'},
        {'id': 2, name: 'Estimation'},
        {'id': 3, name: 'Calculation'}
    ],

    transferMethods: ['Weighing', 'Calculation', 'Estimation'],

    transferOperations: [
        {'id': 1, name: 'Disposal'},
        {'id': 2, name: 'Recovery'}
    ]

};

'use strict';

/**
 * The task lists for each of the user journeys.
 * This is control data and other artefact's which pertain
 * to a given user journey, for instance farming or all-sector
 */
module.exports = {

    NACE_CODE: {
        name: 'NACE_CODE',
        pathParam: 'nace-code',
        page: '/check/nace-code',
        type: 'SUPPLEMENTARY'
    },

    NOSE_CODES: {
        name: 'NOSE_CODES',
        pathParam: 'nose-codes',
        page: '/check/nose-code',
        type: 'SUPPLEMENTARY'
    },

    REVIEW: {
        name: 'REVIEW',
        title: 'Check your data',
        pathParam: 'review',
        type: 'PROCESS',
        page: '/review'
    },

    SUBMIT: {
        name: 'SUBMIT',
        title: 'Submit your data',
        pathParam: 'submit',
        type: 'PROCESS',
        page: '/submit'
    },

    RELEASES_TO_AIR: {
        name: 'RELEASES_TO_AIR',
        pathParam: 'air',
        page: '/releases/air',
        type: 'RELEASE'
    },

    RELEASES_TO_LAND: {
        name: 'RELEASES_TO_LAND',
        pathParam: 'land',
        page: '/releases/land',
        type: 'RELEASE'
    },

    RELEASES_TO_CONTROLLED_WATERS: {
        name: 'RELEASES_TO_CONTROLLED_WATERS',
        pathParam: 'water',
        page: '/releases/water',
        type: 'RELEASE'
    },

    OFFSITE_TRANSFERS_IN_WASTE_WATER: {
        name: 'OFFSITE_TRANSFERS_IN_WASTE_WATER',
        pathParam: 'waste-water',
        page: '/releases/waste-water',
        type: 'RELEASE'
    },

    WASTE_TRANSFERS: {
        name: 'WASTE_TRANSFERS',
        pathParam: 'waste',
        page: '/transfers/waste',
        type: 'TRANSFER'
    }

};

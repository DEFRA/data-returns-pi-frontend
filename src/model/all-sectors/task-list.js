'use strict';

/**
 * The task lists for each of the user journeys.
 * This is control data and other artefact's which pertain
 * to a given user journey, for instance farming or all-sector
 */
module.exports = {

    SITE_CODES: {
        name: 'SITE_CODES',
        title: 'Check your site codes',
        pathParam: 'site-codes',
        page: '/check/site-codes',
        message: { fetch: 'siteCodes' }
    },

    REVIEW: {
        name: 'REVIEW',
        title: 'Check your data',
        pathParam: 'review',
        page: '/review'
    },

    SUBMIT: {
        name: 'SUBMIT',
        title: 'Submit your data',
        pathParam: 'submit',
        page: '/submit'
    },

    RELEASES_TO_AIR: {
        name: 'RELEASES_TO_AIR',
        pathParam: 'air',
        page: '/releases/air',
        required: true,
        message: { fetch: 'releasesToAir' }
    },

    RELEASES_TO_LAND: {
        name: 'RELEASES_TO_LAND',
        pathParam: 'land',
        page: '/releases/land',
        required: true,
        message: { fetch: 'releasesToLand' }
    },

    RELEASES_TO_CONTROLLED_WATERS: {
        name: 'RELEASES_TO_CONTROLLED_WATERS',
        pathParam: 'water',
        page: '/releases/water',
        required: true,
        message: { fetch: 'releasesToControlledWater' }
    },

    OFFSITE_TRANSFERS_IN_WASTE_WATER: {
        name: 'OFFSITE_TRANSFERS_IN_WASTE_WATER',
        pathParam: 'waste-water',
        page: '/releases/waste-water',
        required: true,
        message: { fetch: 'releasesToWasteWater' }
    },

    OFFSITE_WASTE_TRANSFERS: {
        name: 'OFFSITE_WASTE_TRANSFERS',
        pathParam: 'off-site',
        page: '/transfers/off-site',
        message: { fetch: 'offsiteWasteTransfers' }
    }

};

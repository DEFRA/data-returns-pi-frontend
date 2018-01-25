'use strict';

/**
 * The task lists for each of the user journeys.
 * This is control data and other artefact's which pertain
 * to a given user journey, for instance farming or all-sector
 */
module.exports = {

    // The name of the task list
    name: 'all-sectors',

    // Two stages
    stages: [

        {
            heading: 'Report your data',
            items: [

                {
                    name: 'RELEASES_TO_AIR',
                    pathParam: 'air',
                    title: 'Releases to air',
                    page: '/releases/air',
                    required: true
                },

                {
                    name: 'RELEASES_TO_LAND',
                    pathParam: 'land',
                    title: 'Releases to land',
                    page: '/releases/land',
                    required: true
                },

                {
                    name: 'RELEASES_TO_CONTROLLED_WATERS',
                    pathParam: 'water',
                    title: 'Releases to controlled waters',
                    page: '/releases/water',
                    required: true
                },

                {
                    name: 'OFFSITE_TRANSFERS_IN_WASTE_WATER',
                    pathParam: 'waste-water',
                    title: 'Off-site transfers in waste water',
                    page: '/releases/waste-water',
                    required: true
                },

                {
                    name: 'OFFSITE_WASTE_TRANSFERS',
                    pathParam: 'off-site',
                    title: 'Off-site waste transfers',
                    page: '/transfers/off-site',
                    required: true
                }

                /*
                 *TODO - Removed until we know more
                 * {
                 *     name: 'OVERSEAS_WASTE_TRANSFERS',
                 *     pathParam: 'overseas',
                 *     title: 'Overseas waste transfers',
                 *     page: '/transfers/overseas',
                 *     required: false
                 * }
                 */

            ]
        },

        {
            heading: 'Check and submit your report',
            items: [

                {
                    name: 'REVIEW',
                    pathParam: 'review',
                    title: 'Check your data',
                    page: '/review',
                    required: true
                },

                {
                    name: 'SUBMIT',
                    pathParam: 'submit',
                    title: 'Submit your report',
                    page: '/submit',
                    required: false
                }

            ]
        }
    ]

};

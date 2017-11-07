'use strict';

/**
 * The task lists for each of the user journeys.
 * This it the static control data from within the system
 */
module.exports = {

    // Three stages
    stages: [

        {
            heading: 'Check your details',
            items: [

                {
                    name: 'CONTACT',
                    title: 'Your contact details',
                    page: '/contact'
                },

                {
                    name: 'SITE',
                    title: 'Your site codes',
                    page: '/site'
                }

            ]
        },

        {
            heading: 'Report your data',
            items: [

                {
                    name: 'RELEASES_TO_AIR',
                    title: 'Releases to air',
                    page: '/air-confirm'
                },

                {
                    name: 'RELEASES_TO_LAND',
                    title: 'Releases to land',
                    page: '/land-confirm'
                },

                {
                    name: 'RELEASES_TO_CONTROLLED_WATERS',
                    title: 'Releases to controlled waters',
                    page: '/water-confirm'
                },

                {
                    name: 'OFFSITE_TRANSFERS_IN_WASTE_WATER',
                    title: 'Off-site transfers in waste water',
                    page: '/waste-water-confirm'
                },

                {
                    name: 'OFFSITE_WASTE_TRANSFERS',
                    title: 'Off-site waste transfers',
                    page: '/off-site'
                },

                {
                    name: 'OVERSEAS_WASTE_TRANSFERS',
                    title: 'Overseas waste transfers',
                    page: '/overseas'
                }

            ]
        },

        {
            heading: 'Check and submit your report',
            items: [

                {
                    name: 'CHECK',
                    title: 'Check your data',
                    page: '/check'
                },

                {
                    name: 'SHARE',
                    title: 'Share your data',
                    page: '/share'
                },

                {
                    name: 'SUBMIT',
                    title: 'Submit your report',
                    page: '/submit'
                }

            ]
        }
    ]

};

'use strict';

/**
 * The task lists for each of the user journeys.
 * This is control data and other artefact's which pertain
 * to a given user journey, for instance farming or all-sector
 */
module.exports = {

    // The name of the task list
    name: 'all-sectors',

    // Three stages
    stages: [

        {
            heading: 'Check your details',
            items: [

                {
                    name: 'CONTACT',
                    pathParam: 'contact',
                    title: 'Your contact details',
                    page: '/contact'
                },

                {
                    name: 'SITE',
                    pathParam: 'site',
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
                    pathParam: 'air',
                    title: 'Releases to air',
                    page: '/releases/air'
                },

                {
                    name: 'RELEASES_TO_LAND',
                    pathParam: 'land',
                    title: 'Releases to land',
                    page: '/releases/land'
                },

                {
                    name: 'RELEASES_TO_CONTROLLED_WATERS',
                    pathParam: 'water',
                    title: 'Releases to controlled waters',
                    page: '/releases/water'
                },

                {
                    name: 'OFFSITE_TRANSFERS_IN_WASTE_WATER',
                    pathParam: 'waste-water',
                    title: 'Off-site transfers in waste water',
                    page: '/releases/waste-water'
                },

                {
                    name: 'OFFSITE_WASTE_TRANSFERS',
                    pathParam: 'off-site',
                    title: 'Off-site waste transfers',
                    page: '/transfers/off-site'
                },

                {
                    name: 'OVERSEAS_WASTE_TRANSFERS',
                    pathParam: 'overseas',
                    title: 'Overseas waste transfers',
                    page: '/transfers/overseas'
                }

            ]
        },

        {
            heading: 'Check and submit your report',
            items: [

                {
                    name: 'CHECK',
                    pathParam: 'check',
                    title: 'Check your data',
                    page: '/check'
                },

                {
                    name: 'SHARE',
                    pathParam: 'share',
                    title: 'Share your data',
                    page: '/share'
                },

                {
                    name: 'SUBMIT',
                    pathParam: 'submit',
                    title: 'Submit your report',
                    page: '/submit'
                }

            ]
        }
    ]

};

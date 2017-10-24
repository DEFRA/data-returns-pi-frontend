'use strict';

/**
 * The task lists for each of the user journeys.
 * This it the static control data from within the system
 */
const tasklist = module.exports = {

    // The main (chemical) submission journey
    Chemical: {

        // Three stages
        Stages: {

            details: {
                heading: 'Check your details',
                items: {
                    contact: {
                        title: 'Your contact details',
                        page: 'contact'
                    },

                    site: {
                        title: 'Your site codes',
                        page: 'site'
                    }
                }
            },

            report: {
                heading: 'Report your data',
                items: {
                    air: {
                        title: 'Releases to air',
                        page: 'air'
                    },

                    land: {
                        title: 'Releases to land',
                        page: 'land'
                    },

                    controlledWaters: {
                        title: 'Releases to controlled waters',
                        page: 'controlledWaters'
                    },

                    offSiteTransfersWasteWater: {
                        title: 'Off-site transfers in waste water',
                        page: 'offSiteTransfersWasteWater'
                    },

                    offSiteTransfersWaste: {
                        title: 'Off-site waste transfers',
                        page: 'offSiteTransfersWaste'
                    },

                    overseasTransfersWaste: {
                        title: 'Overseas waste transfers',
                        page: 'overseasTransfersWaste'
                    }
                }
            },

            submit: {
                heading: 'Check and submit your report',
                items: {
                    check: {
                        title: 'Check your data',
                        page: 'check'
                    },

                    share: {
                        title: 'Share your data',
                        page: 'share'
                    },

                    submit: {
                        title: 'Submit your report',
                        page: 'submit'

                    }
                }
            }
        }
    }
};

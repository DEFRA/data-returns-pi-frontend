'use strict';

/**
 * This module services requests against the data model.
 */

// TODO Replace plug in data model with the real deal.
const data = require('../model/dev-data');

module.exports = {

    /**
     * Return all the user details
     * @return {*} - The list of users
     */
    getUsers: () => {
        return data.users;
    },

    /**
     * Return the user object for a given username
     * @param username
     * @return {*} - The user
     */
    getUser: (username) => {
        try {
            return data.users.find((e) => { return e.username === username; });
        } catch (err) {
            return null;
        }
    },

    /**
     * Return all the permits
     * @return {*} - The list of permits
     */
    getEaIds: () => {
        return data.eaIds;
    },

    /**
     * Return the permits for a given user Id
     * @param id - The permit identifier
     * @return {*} - The list of permits
     */
    getEaIdsForUser: (id) => {
        try {
            return data.userEaIds
                .find((e) => { return e.userId === id; }).eaIdId
                .map((eaId) => {
                    return data.eaIds.find((e) => { return e.id === eaId; });
                });
        } catch (err) {
            return null;
        }
    },

    /**
     * Get the distinct set of sites for a set of permits
     * @param eaIds - an array containing the site objects enriched with an array of the
     * corresponding permits
     */
    getSitesForPermits: (eaIdIds) => {

        // Get the permits
        const eaIds = eaIdIds.map((id) => {
            return data.eaIds.find((e) => { return e.id === id; });
        });

        // Find the unique site Ids
        const uniqueSites = eaIds
            // Sort permits by siteId
            .sort((e1, e2) => { return e1.siteId - e2.siteId; })
            // Generate an object containing the the site and permit object
            .map((e) => {
                return {
                    site: data.sites.find((s) => { return s.id === e.siteId; }),
                    eaId: e
                };
            })
            // Return the unique sites enriched with the permit details
            .reduce(function (accumulator, currentValue, currentIndex) {

                if (currentValue.site.eaIds) {
                    currentValue.site.eaIds.push(currentValue.eaId);
                } else {
                    currentValue.site.eaIds = [ currentValue.eaId ];
                }

                if (currentIndex === 0) {
                    accumulator.push(currentValue.site);
                }

                if (accumulator[ accumulator.length - 1 ].id !== currentValue.site.id) {
                    accumulator.push(currentValue.site);
                }

                return accumulator;

            }, []);

        return uniqueSites;
    },

    /**
     * Authenticate a given user. Returns the user object if authenticated or undefined if not.
     * @param username - The given username
     * @param password - The given password
     * @return {*}
     */
    authenticate: (username, password) => {
        try {
            return data.users.find((e) => { return e.username === username && e.password === password; });
        } catch (err) {
            return undefined;
        }
    }

};

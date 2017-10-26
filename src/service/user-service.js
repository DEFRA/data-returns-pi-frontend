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
    getPermits: () => {
        return data.permits;
    },

    /**
     * Return the permits for a given user Id
     * @param id - The permit identifier
     * @return {*} - The list of permits
     */
    getPermitsForUser: (id) => {
        try {
            return data.userPermits
                .find((e) => { return e.userId === id; })
                .permitIds.map((id) => {
                    return data.permits.find((e) => { return e.id === id; });
                });
        } catch (err) {
            return null;
        }
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

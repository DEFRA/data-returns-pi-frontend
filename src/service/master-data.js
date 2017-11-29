'use strict';

/**
 * This module services requests against the data model.
 */

const _ = require('lodash');

// TODO Replace plug in data model with the real deal.
const Data = require('../../data/master-data');

let internals = {};

module.exports = internals = {

    /**
     * Return all the user details
     * @return {*} - The list of users
     */
    getUsers: async () => {
        return Data.users;
    },

    /**
     * Return the user object for a given username
     * @param username
     * @return {*} - The user
     */
    getUser: async (username) => {
        return Data.users.find((e) => { return e.username === username; }) || null;
    },

    /**
     * Return all the permits
     * @return {*} - The list of permits
     */
    getEaIds: async () => {
        return Data.eaIds;
    },

    /**
     * Return the permits for a given user Id
     * @param id - The permit identifier
     * @return {*} - The list of permits
     */
    getEaIdsForUser: async (id) => {
        try {
            return Data.userEaIds
                .find((e) => { return e.userId === id; }).eaIdId
                .map((eaId) => {
                    return Data.eaIds.find((e) => { return e.id === eaId; });
                });
        } catch (err) {
            return null;
        }
    },

    /**
     * Get permit form permit Id (The database key)
     * @param eaIdId - the permit id
     */
    getEaIdFromEaIdId: async (eaIdId) => {
        return Data.eaIds.find((e) => { return e.id === eaIdId; }) || null;
    },

    /**
     * Get the site information for a given permit
     * @param eaIdId - the permit id
     */
    getSiteForEaIdId: async (eaIdId) => {
        // Get the permit
        const eaId = await internals.getEaIdFromEaIdId(eaIdId);

        // Get its site
        return eaId ? Data.sites.find((s) => { return s.id === eaId.siteId; }) : null;
    },

    /**
     * Get the distinct set of sites for a set of permits
     * @param eaIds - an array containing the site objects enriched with an array of the
     * corresponding permits
     */
    getSitesForEaIdIds: async (eaIdIds) => {

        // Get the permits
        const eaIdsP = eaIdIds.map((id) => {
            return internals.getEaIdFromEaIdId(id);
        });

        return Promise.all(eaIdsP).then((eaIds) => {
            const result = [];

            try {

                // Find the unique site Ids
                const sites = eaIds
                    // Sort permits by siteId
                    .sort((e1, e2) => { return e1.siteId - e2.siteId; })
                    // Generate an object containing the the site and permit object
                    .map((e) => {
                        return {
                            site: Data.sites.find((s) => { return s.id === e.siteId; }),
                            eaId: e
                        };
                    });

                for (const site of sites) {
                    if (result.length && site.site.id === result[result.length - 1].id) {
                        // Its the same site so add the list of eaId
                        result[result.length - 1].eaIds.push(_.cloneDeep(site.eaId));
                    } else {
                        // Its a new site so create a new object
                        const newSite = _.cloneDeep(site.site);
                        newSite.eaIds = [_.cloneDeep(site.eaId)];
                        result.push(newSite);
                    }
                }

                return result;

            } catch (err) {
                return null;
            }
        });
    },

    /**
     * Return an array of all the substances
     * @returns {Promise.<Array>}
     */
    getSubstances: async () => { return Data.substances; },

    /**
     * Return a substance object from its id
     * @param id
     * @returns {Promise.<*>}
     */
    getSubstanceById: async (id) => {
        if (!internals._substancesMap.size) {
            Data.substances.forEach((s) => {
                internals._substancesMap.set(s.id, s);
            });
        }
        return internals._substancesMap.get(id);
    },

    /**
     * Return an array of all the substances
     * @returns {Promise.<Array>}
     */
    getUnits: async () => { return Data.units; },

    /**
     * Return a substance object from its id
     * @param id
     * @returns {Promise.<*>}
     */
    getUnitById: async (id) => {
        if (!internals._unitsMap.size) {
            Data.units.forEach((s) => {
                internals._unitsMap.set(s.id, s);
            });
        }
        return internals._unitsMap.get(id);
    },

    /**
     * Return a list of the value methods
     */
    getMethods: function () {
        return Data.methods;
    },

    /**
     * Return a specific method by Id
     * @param id
     */
    getMethodById: function (id) {
        return Data.methods.find(m => m.id === id);
    },

    /**
     * Authenticate a given user. Returns a copy of user object if authenticated or undefined if not.
     * @param username - The given username
     * @param password - The given password
     * @return {*}
     */
    authenticate: async (username, password) => {
        try {
            return _.cloneDeep(Data.users.find((e) => {
                return e.username === username && e.password === password;
            }));
        } catch (err) {
            return undefined;
        }
    },

    getEwc: async (activity, chapter, subchapter) => {
        if (!internals._ewcActivity.size) {
            Data.ewcActivity.forEach((a) => {
                internals._ewcActivity.set(a.activity, a);
            });
        }
        if (!internals._ewcChapter.size) {
            Data.ewcChapter.forEach((c) => {
                internals._ewcChapter.set(c.activity + '-' + c.chapter, c);
            });
        }
        if (!internals._ewcSubchapter.size) {
            Data.ewcSubchapter.forEach((s) => {
                internals._ewcSubchapter.set(s.activity + '-' + s.chapter + '-' + s.subchapter, s);
            });
        }

        const result = {};

        if (activity && chapter && subchapter) {
            const _subchapter = internals._ewcSubchapter.get(activity + '-' + chapter + '-' + subchapter);

            if (_subchapter) {

                const _chapter = internals._ewcChapter.get(_subchapter.activity + '-' + _subchapter.chapter);
                if (_chapter) {
                    const _activity = internals._ewcActivity.get(_chapter.activity);

                    if (_activity) {
                        result.activity = _activity.activity;
                        result.activity_description = _activity.description;
                        result.chapter = _chapter.chapter;
                        result.chapter_description = _chapter.description;
                        result.subchapter = _subchapter.subchapter;
                        result.subchapter_description = _subchapter.description;

                        return result;
                    }
                }
            }

            return null;
        }

        if (activity && chapter) {
            const _chapter = internals._ewcChapter.get(activity + '-' + chapter);

            if (_chapter) {
                const _activity = internals._ewcActivity.get(_chapter.activity);

                if (_activity) {
                    result.activity = _activity.activity;
                    result.activity_description = _activity.description;
                    result.chapter = _chapter.chapter;
                    result.chapter_description = _chapter.description;

                    return result;
                }
            }

            return null;
        }

        if (activity) {
            const _activity = internals._ewcActivity.get(activity);

            if (_activity) {
                result.activity = _activity.activity;
                result.activity_description = _activity.description;
                return result;
            }

            return null;
        }

        return null;
    }

};

internals._substancesMap = new Map();
internals._unitsMap = new Map();
internals._ewcActivity = new Map();
internals._ewcChapter = new Map();
internals._ewcSubchapter = new Map();

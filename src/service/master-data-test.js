'use strict';

/**
 * This module services requests against the test data model.
 */

const _ = require('lodash');
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
     * and inline the site id
     * @param eaIdId - the permit id
     */
    getEaIdFromEaIdId: async (eaIdId) => {
        return Data.eaIds.find((e) => { return e.id === eaIdId; }) || null;
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
    getMethods: async () => {
        return Data.methods;
    },

    /**
     * Return a specific method by Id
     * @param id
     */
    getMethodById: async (id) => {
        return Data.methods.find(m => m.id === id);
    },

    /**
     * Get the set of transfer operations (used by overseas transfers)
     * @returns {Promise.<Array>}
     */
    getTransferOperations: async () => {
        return Data.transferOperations;
    },

    getTransferOperationById: async (id) => {
        return Data.transferOperations.find(o => o.id === id);
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

    getEwcActivityById: async (id) => {
        if (!internals._ewcActivityId.size) {
            Data.ewcActivity.forEach((s) => {
                internals._ewcActivityId.set(s.id, s);
            });
        }
        return internals._ewcActivityId.get(id);
    },

    getEwcChapterById: async (id) => {
        if (!internals._ewcChapterId.size) {
            Data.ewcChapter.forEach((s) => {
                internals._ewcChapterId.set(s.id, s);
            });
        }
        return internals._ewcChapterId.get(id);
    },

    getEwcSubChapterById: async (id) => {
        if (!internals._ewcSubChapterId.size) {
            Data.ewcSubChapter.forEach((s) => {
                internals._ewcSubChapterId.set(s.id, s);
            });
        }
        return internals._ewcSubChapterId.get(id);
    },

    getEwc: async (chapter, subChapter, activity) => {
        if (!internals._ewcChapter.size) {
            Data.ewcChapter.forEach((c) => {
                internals._ewcChapter.set(c.chapter, c);
            });
        }
        if (!internals._ewcSubChapter.size) {
            Data.ewcSubChapter.forEach((s) => {
                internals._ewcSubChapter.set(s.chapter + '-' + s.subChapter, s);
            });
        }
        if (!internals._ewcActivity.size) {
            Data.ewcActivity.forEach((a) => {
                internals._ewcActivity.set(a.chapter + '-' + a.subChapter + '-' + a.activity, a);
            });
        }

        const result = {};

        if (activity && chapter && subChapter) {
            const _chapter = internals._ewcChapter.get(chapter);
            if (_chapter) {
                const _subChapter = internals._ewcSubChapter.get(chapter + '-' + subChapter);

                if (_subChapter) {
                    const _activity = internals._ewcActivity.get(chapter + '-' + subChapter + '-' + activity);

                    if (_activity) {

                        result.activityId = _activity.id;
                        result.chapterId = _chapter.id;
                        result.subChapterId = _subChapter.id;

                        return result;
                    }
                }
            }
        }

        return null;
    },

    getDisposalCode: async (code) => {
        return Data.disposalCodes.find((e) => { return e.code === code; }) || null;
    },

    getRecoveryCode: async (code) => {
        return Data.recoveryCodes.find((e) => { return e.code === code; }) || null;
    },

    getDisposalById: async (id) => {
        return Data.disposalCodes.find((e) => { return e.id === id; }) || null;
    },

    getRecoveryById: async (id) => {
        return Data.recoveryCodes.find((e) => { return e.id === id; }) || null;
    }
};

internals._substancesMap = new Map();
internals._unitsMap = new Map();
internals._ewcActivity = new Map();
internals._ewcChapter = new Map();
internals._ewcSubChapter = new Map();
internals._ewcActivityId = new Map();
internals._ewcChapterId = new Map();
internals._ewcSubChapterId = new Map();

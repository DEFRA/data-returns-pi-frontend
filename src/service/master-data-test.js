'use strict';

/**
 * This module services requests against the test data model.
 */

const _ = require('lodash');
const Data = require('../../data/test-data');
const Static = require('../../data/static-data');

let internals = {};

module.exports = internals = {

    /**
     * Return all the user details
     * @return {*} - The list of users
     */
    getUsers: async () => {
        return Data.users;
    },

    getRegimeTreeById: async () => {
        return null;
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
     * Get permit from permit Id (The database key)
     * and inline the site id
     * @param eaIdId - the permit id
     */
    getEaIdFromEaIdId: async (eaIdId) => {
        return Data.eaIds.find((e) => { return e.id === eaIdId; }) || null;
    },

    /**
     * Get permit from permit number (EA_ID)
     * and inline the site id
     * @param eaIdId - the permit id
     */
    getEaIdFromEaId: async (eaIdId) => {
        return Data.eaIds.find((e) => { return e.name === eaIdId; }) || null;
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
        return Static.methods;
    },

    /**
     * Return a specific method by Id
     * @param id
     */
    getMethodById: async (id) => {
        return Static.methods.find(m => m.id === id);
    },

    /**
     * Get the set of transfer operations (used by overseas transfers)
     * @returns {Promise.<Array>}
     */
    getTransferOperations: async () => {
        return Static.transferOperations;
    },

    getTransferOperationById: async (id) => {
        return Static.transferOperations.find(o => o.id === id);
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

    getEwcChapters: async () => {
        return Data.ewcChapter;
    },

    getEwcSubchapters: async () => {
        return Data.ewcSubChapter;
    },

    getEwcActivities: async () => {
        return Data.ewcActivity;
    },

    getEwcActivityById: async (id) => {
        return Data.ewcActivity.find(c => c.id === id);
    },

    getEwcChapterById: async (id) => {
        return Data.ewcChapter.find(c => c.id === id);
    },

    getEwcSubChapterById: async (id) => {
        return Data.ewcSubChapter.find(c => c.id === id);
    },

    /**
     * Get ewc hierarchies
     * @return {Promise.<*>}
     */
    getEwcHierarchies: async () => {
        return Data.ewcHierarchies;
    },

    /**
     * Search the ewc hierarchy
     * @param activityClassId
     * @param activityId
     * @param processId
     * @return {Promise.<*>}
     */
    getEwcHierarchyByKey: async (chapterId, subchapterId, activityId) => {
        return Data.ewcHierarchies.find(e => e.chapterId === chapterId &&
            e.subchapterId === subchapterId && e.activityId === activityId);
    },

    getEwc: async (chapter, subChapter, activity) => {
        const ewcChapter = Data.ewcChapter.find(c => c.name === chapter);
        const ewcSubchapter = Data.ewcSubChapter.find(c => c.name === `${chapter} ${subChapter}`);
        const ewcActivity = Data.ewcActivity.find(c => c.name === `${chapter} ${subChapter} ${activity}`);

        if (ewcActivity && ewcChapter && ewcSubchapter) {

            const ewcHierarchy = Data.ewcHierarchies.find(h => h.chapterId === ewcChapter.id &&
                h.subchapterId === ewcSubchapter.id && h.activityId === ewcActivity.id);

            if (ewcHierarchy) {
                return {
                    activityId: ewcHierarchy.activityId,
                    subChapterId: ewcHierarchy.subchapterId,
                    chapterId: ewcHierarchy.chapterId
                };
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
    },

    getNoseActivityClasses: async () => {
        return Data.noseActivityClasses;
    },

    getNoseActivityClassById: async (id) => {
        return Data.noseActivityClasses.find((e) => { return e.id === id; }) || null;
    },

    getNoseActivities: async () => {
        return Data.noseActivities;
    },

    getNoseActivityById: async (id) => {
        return Data.noseActivities.find((e) => { return e.id === id; }) || null;
    },

    getNoseProcesses: async () => {
        return Data.noseProcesses;
    },

    getNoseProcessById: async (id) => {
        return Data.noseProcesses.find((e) => { return e.id === id; }) || null;
    },

    getNoseProcessByCode: async (code) => {
        return Data.noseProcesses.find((e) => { return e.code === code; }) || null;
    },

    getNoseHierarchies: async () => {
        return Data.noseHierarchy;
    },

    getNoseHierarchyByKey: async (activityClassId, activityId, processId) => {
        return Data.noseHierarchy.find(h => h.activityClassId === activityClassId &&
          h.activityId === activityId && h.processId === processId);
    },

    getEprtrActivities: async () => {
        return Data.eprtrActivities;
    },

    getEprtrActivityById: async (id) => {
        return Data.eprtrActivities.find((e) => { return e.id === id; }) || null;
    },

    getEprtrSectors: async () => {
        return Data.eprtrSectors;
    },

    getEprtrSectorById: async (id) => {
        return Data.eprtrSectors.find((e) => { return e.id === id; }) || null;
    },

    getEprtrHierarchy: async () => {
        return Data.eprtrHierarchys;
    },

    getEprtrHierarchyByKey: async (sectorId, activityId) => {
        return Data.eprtrHierarchys.find(e => e.sectorId === sectorId && e.activityId === activityId);
    },

    getNaceSections: async () => {
        return Data.naceSections;
    },

    getNaceSectionById: async (id) => {
        return Data.naceSections.find((e) => { return e.id === id; }) || null; ;
    },

    getNaceDivisions: async () => {
        return Data.naceDivisions;
    },

    getNaceDivisionById: async (id) => {
        return Data.naceDivisions.find((e) => { return e.id === id; }) || null; ;
    },

    getNaceGroups: async () => {
        return Data.naceGroups;
    },

    getNaceGroupById: async (id) => {
        return Data.naceGroups.find((e) => { return e.id === id; }) || null; ;
    },

    getNaceClasses: async () => {
        return Data.naceClasses;
    },

    getNaceClassById: async (id) => {
        return Data.naceClasses.find((e) => { return e.id === id; }) || null;
    },

    getNaceClassByCode: async (code) => {
        return Data.naceClasses.find((e) => { return e.code === code; }) || null;
    },

    getNaceHierarchy: async () => {
        return Data.naceHierarchy;
    },

    getNaceHierarchyByKey: async (sectionId, divisionId, groupId, classId) => {
        return Data.naceHierarchy.find(n => n.sectionId === sectionId &&
            n.divisionId === divisionId && n.groupId === groupId && n.classId === classId);
    }
};

internals._substancesMap = new Map();
internals._unitsMap = new Map();

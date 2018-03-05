'use strict';

/**
 * This module services requests against the data model. It servers up methods from
 * master-data-api or master data test depending on the run status
 */

const testService = require('./master-data-test');
const apiService = require('./master-data-api');

module.exports = {
    authenticate: process.env.NODE_ENV === 'local' ? testService.authenticate : testService.authenticate,
    getUsers: process.env.NODE_ENV === 'local' ? testService.getUsers : testService.getUsers,
    getUser: process.env.NODE_ENV === 'local' ? testService.getUser : testService.getUser,

    getEaIds: process.env.NODE_ENV === 'local' ? testService.getEaIds : apiService.getEaIds,
    getEaIdsForUser: process.env.NODE_ENV === 'local' ? testService.getEaIdsForUser : apiService.getEaIdsForUser,
    getEaIdFromEaId: process.env.NODE_ENV === 'local' ? testService.getEaIdFromEaId : apiService.getEaIdFromEaId,
    getEaIdFromEaIdId: process.env.NODE_ENV === 'local' ? testService.getEaIdFromEaIdId : apiService.getEaIdFromEaIdId,

    getSubstances: process.env.NODE_ENV === 'local' ? testService.getSubstances : apiService.getSubstances,
    getSubstanceById: process.env.NODE_ENV === 'local' ? testService.getSubstanceById : apiService.getSubstanceById,
    getUnits: process.env.NODE_ENV === 'local' ? testService.getUnits : apiService.getUnits,
    getUnitById: process.env.NODE_ENV === 'local' ? testService.getUnitById : apiService.getUnitById,

    getTransferOperations: process.env.NODE_ENV === 'local' ? testService.getTransferOperations : apiService.getTransferOperations,
    getTransferOperationById: process.env.NODE_ENV === 'local' ? testService.getTransferOperationById : apiService.getTransferOperationById,

    getMethods: process.env.NODE_ENV === 'local' ? testService.getMethods : apiService.getMethods,
    getMethodById: process.env.NODE_ENV === 'local' ? testService.getMethodById : apiService.getMethodById,

    getEwc: process.env.NODE_ENV === 'local' ? testService.getEwc : apiService.getEwc,
    getEwcChapters: process.env.NODE_ENV === 'local' ? testService.getEwcChapters : apiService.getEwcChapters,
    getEwcChapterById: process.env.NODE_ENV === 'local' ? testService.getEwcChapterById : apiService.getEwcChapterById,
    getEwcSubchapters: process.env.NODE_ENV === 'local' ? testService.getEwcSubchapters : apiService.getEwcSubchapters,
    getEwcSubChapterById: process.env.NODE_ENV === 'local' ? testService.getEwcSubChapterById : apiService.getEwcSubChapterById,
    getEwcActivities: process.env.NODE_ENV === 'local' ? testService.getEwcActivities : apiService.getEwcActivities,
    getEwcActivityById: process.env.NODE_ENV === 'local' ? testService.getEwcActivityById : apiService.getEwcActivityById,
    getEwcHierarchies: process.env.NODE_ENV === 'local' ? testService.getEwcHierarchies : apiService.getEwcHierarchies,
    getEwcHierarchyByKey: process.env.NODE_ENV === 'local' ? testService.getEwcHierarchyByKey : apiService.getEwcHierarchyByKey,

    getDisposalCode: process.env.NODE_ENV === 'local' ? testService.getDisposalCode : apiService.getDisposalCode,
    getDisposalById: process.env.NODE_ENV === 'local' ? testService.getDisposalById : apiService.getDisposalById,
    getRecoveryCode: process.env.NODE_ENV === 'local' ? testService.getRecoveryCode : apiService.getRecoveryCode,
    getRecoveryById: process.env.NODE_ENV === 'local' ? testService.getRecoveryById : apiService.getRecoveryById,

    getNoseActivityClasses: process.env.NODE_ENV === 'local' ? testService.getNoseActivityClasses : apiService.getNoseActivityClasses,
    getNoseActivityClassById: process.env.NODE_ENV === 'local' ? testService.getNoseActivityClassById : apiService.getNoseActivityClassById,
    getNoseActivities: process.env.NODE_ENV === 'local' ? testService.getNoseActivities : apiService.getNoseActivities,
    getNoseActivityById: process.env.NODE_ENV === 'local' ? testService.getNoseActivityById : apiService.getNoseActivityById,
    getNoseProcesses: process.env.NODE_ENV === 'local' ? testService.getNoseProcesses : apiService.getNoseProcesses,
    getNoseProcessById: process.env.NODE_ENV === 'local' ? testService.getNoseProcessById : apiService.getNoseProcessById,
    getNoseProcessByCode: process.env.NODE_ENV === 'local' ? testService.getNoseProcessByCode : apiService.getNoseProcessByCode,
    getNoseHierarchies: process.env.NODE_ENV === 'local' ? testService.getNoseHierarchies : apiService.getNoseHierarchies,
    getNoseHierarchyByKey: process.env.NODE_ENV === 'local' ? testService.getNoseHierarchyByKey : apiService.getNoseHierarchyByKey,

    getEprtrSectors: process.env.NODE_ENV === 'local' ? testService.getEprtrSectors : apiService.getEprtrSectors,
    getEprtrSectorById: process.env.NODE_ENV === 'local' ? testService.getEprtrSectorById : apiService.getEprtrSectorById,
    getEprtrActivities: process.env.NODE_ENV === 'local' ? testService.getEprtrActivities : apiService.getEprtrActivities,
    getEprtrActivityById: process.env.NODE_ENV === 'local' ? testService.getEprtrActivityById : apiService.getEprtrActivityById,
    getEprtrHierarchy: process.env.NODE_ENV === 'local' ? testService.getEprtrHierarchy : apiService.getEprtrHierarchy,
    getEprtrHierarchyByKey: process.env.NODE_ENV === 'local' ? testService.getEprtrHierarchyByKey : apiService.getEprtrHierarchyByKey,

    getNaceSections: process.env.NODE_ENV === 'local' ? testService.getNaceSections : apiService.getNaceSections,
    getNaceSectionById: process.env.NODE_ENV === 'local' ? testService.getNaceSectionById : apiService.getNaceSectionById,
    getNaceDivisions: process.env.NODE_ENV === 'local' ? testService.getNaceDivisions : apiService.getNaceDivisions,
    getNaceDivisionById: process.env.NODE_ENV === 'local' ? testService.getNaceDivisionById : apiService.getNaceDivisionById,
    getNaceGroups: process.env.NODE_ENV === 'local' ? testService.getNaceGroups : apiService.getNaceGroups,
    getNaceGroupById: process.env.NODE_ENV === 'local' ? testService.getNaceGroupById : apiService.getNaceGroupById,
    getNaceClasses: process.env.NODE_ENV === 'local' ? testService.getNaceClasses : apiService.getNaceClasses,
    getNaceClassById: process.env.NODE_ENV === 'local' ? testService.getNaceClassById : apiService.getNaceClassById,
    getNaceClassByCode: process.env.NODE_ENV === 'local' ? testService.getNaceClassByCode : apiService.getNaceClassByCode,
    getNaceHierarchy: process.env.NODE_ENV === 'local' ? testService.getNaceHierarchy : apiService.getNaceHierarchy,
    getNaceHierarchyByKey: process.env.NODE_ENV === 'local' ? testService.getNaceHierarchyByKey : apiService.getNaceHierarchyByKey
};

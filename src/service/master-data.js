'use strict';

/**
 * This module services requests against the data model. It servers up methods from
 * master-data-api or master data test depending on the run status
 */

const testService = require('./master-data-test');
const apiService = require('./master-data-api');

module.exports = {
    authenticate: process.env.NODE_ENV === 'localtest' ? testService.authenticate : testService.authenticate,
    getUsers: process.env.NODE_ENV === 'localtest' ? testService.getUsers : testService.getUsers,
    getUser: process.env.NODE_ENV === 'localtest' ? testService.getUser : testService.getUser,
    getEaIds: process.env.NODE_ENV === 'localtest' ? testService.getEaIds : apiService.getEaIds,
    getEaIdsForUser: process.env.NODE_ENV === 'localtest' ? testService.getEaIdsForUser : apiService.getEaIdsForUser,
    getEaIdFromEaIdId: process.env.NODE_ENV === 'localtest' ? testService.getEaIdFromEaIdId : apiService.getEaIdFromEaIdId,
    getSiteForEaIdId: process.env.NODE_ENV === 'localtest' ? testService.getSiteForEaIdId : testService.getSiteForEaIdId,
    getSitesForEaIdIds: process.env.NODE_ENV === 'localtest' ? testService.getSitesForEaIdIds : testService.getSitesForEaIdIds,
    getSubstances: process.env.NODE_ENV === 'localtest' ? testService.getSubstances : testService.getSubstances,
    getSubstanceById: process.env.NODE_ENV === 'localtest' ? testService.getSubstanceById : testService.getSubstanceById,
    getUnits: process.env.NODE_ENV === 'localtest' ? testService.getUnits : apiService.getUnits,
    getUnitById: process.env.NODE_ENV === 'localtest' ? testService.getUnitById : apiService.getUnitById,
    getTransferOperations: process.env.NODE_ENV === 'localtest' ? testService.getTransferOperations : apiService.getTransferOperations,
    getTransferOperationById: process.env.NODE_ENV === 'localtest' ? testService.getTransferOperationById : apiService.getTransferOperationById,
    getMethods: process.env.NODE_ENV === 'localtest' ? testService.getMethods : apiService.getMethods,
    getMethodById: process.env.NODE_ENV === 'localtest' ? testService.getMethodById : apiService.getMethodById,
    getEwc: process.env.NODE_ENV === 'localtest' ? testService.getEwc : testService.getEwc,
    getEwcActivityById: process.env.NODE_ENV === 'localtest' ? testService.getEwcActivityById : apiService.getEwcActivityById,
    getEwcChapterById: process.env.NODE_ENV === 'localtest' ? testService.getEwcChapterById : apiService.getEwcChapterById,
    getEwcSubChapterById: process.env.NODE_ENV === 'localtest' ? testService.getEwcSubChapterById : apiService.getEwcSubChapterById,
    getDisposalCode: process.env.NODE_ENV === 'localtest' ? testService.getDisposalCode : testService.getDisposalCode,
    getDisposalById: process.env.NODE_ENV === 'localtest' ? testService.getDisposalById : testService.getDisposalById,
    getRecoveryCode: process.env.NODE_ENV === 'localtest' ? testService.getRecoveryCode : testService.getRecoveryCode,
    getRecoveryById: process.env.NODE_ENV === 'localtest' ? testService.getRecoveryById : testService.getRecoveryById
};

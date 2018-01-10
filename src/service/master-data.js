'use strict';

/**
 * This module services requests against the data model. It servers up methods from
 * master-data-api or master data test depending on the run status
 */

const testService = require('./master-data-test');
const apiService = require('./master-data-api');

module.exports = {
    authenticate: process.env.NODE_ENV === 'test' ? testService.authenticate : testService.authenticate,
    getUsers: process.env.NODE_ENV === 'test' ? testService.getUsers : testService.getUsers,
    getUser: process.env.NODE_ENV === 'test' ? testService.getUser : testService.getUser,
    getEaIds: process.env.NODE_ENV === 'test' ? testService.getEaIds : apiService.getEaIds,
    getEaIdsForUser: process.env.NODE_ENV === 'test' ? testService.getEaIdsForUser : testService.getEaIdsForUser,
    getEaIdFromEaIdId: process.env.NODE_ENV === 'test' ? testService.getEaIdFromEaIdId : testService.getEaIdFromEaIdId,
    getSiteForEaIdId: process.env.NODE_ENV === 'test' ? testService.getSiteForEaIdId : testService.getSiteForEaIdId,
    getSitesForEaIdIds: process.env.NODE_ENV === 'test' ? testService.getSitesForEaIdIds : testService.getSitesForEaIdIds,
    getSubstances: process.env.NODE_ENV === 'test' ? testService.getSubstances : testService.getSubstances,
    getSubstanceById: process.env.NODE_ENV === 'test' ? testService.getSubstanceById : testService.getSubstanceById,
    getUnits: process.env.NODE_ENV === 'test' ? testService.getUnits : testService.getUnits,
    getUnitById: process.env.NODE_ENV === 'test' ? testService.getUnitById : testService.getUnitById,
    getTransferOperations: process.env.NODE_ENV === 'test' ? testService.getTransferOperations : testService.getTransferOperations,
    getTransferOperationById: process.env.NODE_ENV === 'test' ? testService.getTransferOperationById : testService.getTransferOperationById,
    getMethods: process.env.NODE_ENV === 'test' ? testService.getMethods : testService.getMethods,
    getMethodById: process.env.NODE_ENV === 'test' ? testService.getMethodById : testService.getMethodById,
    getEwc: process.env.NODE_ENV === 'test' ? testService.getEwc : testService.getEwc,
    getEwcActivityById: process.env.NODE_ENV === 'test' ? testService.getEwcActivityById : testService.getEwcActivityById,
    getEwcChapterById: process.env.NODE_ENV === 'test' ? testService.getEwcChapterById : testService.getEwcChapterById,
    getEwcSubChapterById: process.env.NODE_ENV === 'test' ? testService.getEwcSubChapterById : testService.getEwcSubChapterById,
    getDisposalCode: process.env.NODE_ENV === 'test' ? testService.getDisposalCode : testService.getDisposalCode,
    getDisposalById: process.env.NODE_ENV === 'test' ? testService.getDisposalById : testService.getDisposalById,
    getRecoveryCode: process.env.NODE_ENV === 'test' ? testService.getRecoveryCode : testService.getRecoveryCode,
    getRecoveryById: process.env.NODE_ENV === 'test' ? testService.getRecoveryById : testService.getRecoveryById
};

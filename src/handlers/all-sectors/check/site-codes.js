'use strict';

/**
 * Route handlers for reporting share your data
 */
const cacheHelper = require('../common').cacheHelper;
const errHdlr = require('../../../lib/utils').generalErrorHandler;
const MasterDataService = require('../../../service/master-data');
const cacheNames = require('../../../lib/user-cache-policies').names;
const setConfirmation = require('../common').setConfirmation;
const setChallengeStatus = require('../common').setChallengeStatus;
const setValidationStatus = require('../common').setValidationStatus;

const internals = {
    getFullNaceHierarchy: async (classId) => {
        const naceClass = await MasterDataService.getNaceClassById(classId);

        if (!naceClass) {
            return null;
        } else {
            const naceHierarchy = await MasterDataService.getNaceHierarchy();
            const {sectionId, divisionId, groupId} = naceHierarchy.find(h => h.classId === naceClass.id);
            const naceSection = await MasterDataService.getNaceSectionById(sectionId);
            const naceDivision = await MasterDataService.getNaceDivisionById(divisionId);
            const naceGroup = await MasterDataService.getNaceGroupById(groupId);

            if (naceSection && naceDivision && naceGroup) {
                return {naceClass, naceSection, naceDivision, naceGroup};
            } else {
                throw new Error('Master data error: nace codes');
            }
        }

    }
};

module.exports = {
    /**
     * Confirm site-code handler
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */

    nace: async (request, h) => {
        try {
            const { route, submissionContext, tasks } = await cacheHelper(request, 'site-codes');

            if (request.method === 'get') {

                if (tasks.nace && tasks.nace.error) {
                    return h.view('all-sectors/check/nace-codes', { error: tasks.nace });
                } else {
                    return h.view('all-sectors/check/nace-codes');
                }

            } else {
                const naceStr = request.payload.nace;
                const nace = await MasterDataService.getNaceClassByCode(naceStr.trim());

                if (nace) {
                    // Set the identifier
                    tasks.nace = {
                        id: nace.id
                    };

                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/site-codes/confirm');

                } else {
                    // Set the error
                    tasks.nace = {
                        text: naceStr,
                        error: { key: 'nace', errno: 'PI-4000' }
                    };

                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/site-codes/nace');
                }

            }
        } catch (err) {
            return errHdlr(err, h);
        }
    },

    confirm: async (request, h) => {
        try {
            const { route, submissionContext, tasks } = await cacheHelper(request, 'site-codes');

            if (request.method === 'get') {

                if (tasks.nace && tasks.nace.id) {
                    await setConfirmation(request, submissionContext, route);
                    const nace = await internals.getFullNaceHierarchy(tasks.nace.id);
                    return h.view('all-sectors/check/confirm-site-codes', { nace });
                } else {
                    return h.redirect('/check/site-codes/nace');
                }

            } else {
                if (request.payload.change) {
                    return h.redirect('/check/site-codes/nace');
                } else {
                    // There is no challenge - so always yes
                    await setChallengeStatus(request, submissionContext, route, true);
                    await setConfirmation(request, submissionContext, route, true);
                    return h.redirect('/task-list');
                }

            }

        } catch (err) {
            return errHdlr(err, h);
        }
    }

};

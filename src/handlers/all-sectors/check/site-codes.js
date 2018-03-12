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
                return { naceClass, naceSection, naceDivision, naceGroup };
            } else {
                throw new Error('Master data error: nace codes');
            }
        }

    },

    getNoseProcesses: async (processIds) => {
        return Promise.all(processIds.map(async p => {
            return MasterDataService.getNoseProcessById(p);
        }));
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
            const { tasks } = await cacheHelper(request, 'site-codes');

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

                    if (tasks.nose) {
                        return h.redirect('/check/site-codes/confirm');
                    } else {
                        return h.redirect('/check/site-codes/nose');
                    }

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

    nose: async (request, h) => {
        try {
            const { tasks } = await cacheHelper(request, 'site-codes');

            if (request.method === 'get') {

                if (tasks.nose && tasks.nose.error) {
                    return h.view('all-sectors/check/nose-codes', { error: tasks.nose.error });
                } else {
                    return h.view('all-sectors/check/nose-codes');
                }

            } else {
                const noseStr = request.payload.nose;
                const nose = await MasterDataService.getNoseProcessByCode(noseStr.trim());

                if (!tasks.nose) {
                    tasks.nose = {};
                    tasks.nose.noseIds = [];
                    tasks.nose.error = null;
                } else {
                    delete tasks.nose.error;
                }

                if (!nose) {
                    tasks.nose.error = {
                        text: noseStr,
                        error: { key: 'nose', errno: 'PI-5000' }
                    };
                } else {
                    if (tasks.nose.noseIds.includes(nose.id)) {
                        tasks.nose.error = {
                            text: noseStr,
                            error: { key: 'nose', errno: 'PI-5001' }
                        };
                    }
                }

                if (!tasks.nose.error) {
                    tasks.nose.noseIds.push(nose.id);
                    delete tasks.nose.error;
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/site-codes/confirm');
                } else {
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/site-codes/nose');
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

                // Clear any left over errors
                if (tasks.nose) {
                    delete tasks.nose.error;
                }

                if (tasks.nace) {
                    delete tasks.nace.error;
                    delete tasks.nace.text;
                }

                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

                if (!tasks.nace || !tasks.nace.id) {
                    return h.redirect('/check/site-codes/nace');

                } else if (!tasks.nose || !tasks.nose.noseIds) {
                    return h.redirect('/check/site-codes/nose');

                } else {
                    await setConfirmation(request, submissionContext, route);

                    const nace = await internals.getFullNaceHierarchy(tasks.nace.id);
                    const noses = await internals.getNoseProcesses(tasks.nose.noseIds);

                    return h.view('all-sectors/check/confirm-site-codes', { nace, noses });
                }

            } else {

                if (request.payload.change) {
                    return h.redirect('/check/site-codes/nace');
                } else if (request.payload && Object.values(request.payload).includes('Delete')) {
                    tasks.nose.currentNoseId = Number.parseInt(Object.keys(request.payload)[0].substring(7));
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/site-codes/nose/remove');
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
    },

    remove: async (request, h) => {
        try {
            const { tasks } = await cacheHelper(request, 'site-codes');
            const nose = await MasterDataService.getNoseProcessById(tasks.nose.currentNoseId);

            if (request.method === 'get') {
                return h.view('all-sectors/check/nose-code-confirm-delete', { nose });
            } else {
                const idx = tasks.nose.noseIds.findIndex(a => a === tasks.nose.currentNoseId);
                tasks.nose.noseIds.splice(idx, 1);
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                if (tasks.nose.noseIds.length === 0) {
                    return h.redirect('/check/site-codes/nose');
                } else {
                    return h.redirect('/check/site-codes/confirm');
                }
            }
        } catch (err) {
            return errHdlr(err, h);
        }
    }
};

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
            const { tasks, submissionContext, route } = await cacheHelper(request, 'nace-code');

            if (request.method === 'get') {

                // If we come from the task list start again
                if (request.info.referrer.includes('task-list')) {
                    if (tasks.nace) {
                        delete tasks.nace.text;
                        delete tasks.nace.error;
                        await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    }
                }

                if (tasks.nace) {
                    if (tasks.nace.error) {
                        return h.view('all-sectors/check/nace-code', { error: tasks.nace });
                    } else if (tasks.nace.text) {
                        return h.view('all-sectors/check/nace-code', { naceStr: tasks.nace.text });
                    } else if (tasks.nace.id) {
                        return h.redirect('/check/nace-summary');
                    } else {
                        return h.view('all-sectors/check/nace-code');
                    }
                } else {
                    return h.view('all-sectors/check/nace-code');
                }

            } else {
                const naceStr = request.payload.nace;
                const nace = await MasterDataService.getNaceClassByCode(naceStr.trim());

                if (nace) {

                    tasks.nace = {
                        id: nace.id
                    };

                    await setConfirmation(request, submissionContext, route, true);
                    await setChallengeStatus(request, submissionContext, route, true);
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/nace-summary');

                } else {

                    tasks.nace = tasks.nace || {};
                    tasks.nace.text = naceStr;
                    tasks.nace.error = { key: 'nace', errno: 'PI-4000' };

                    if (!tasks.nace.id) {
                        await setConfirmation(request, submissionContext, route, false);
                        await setChallengeStatus(request, submissionContext, route, false);
                    }

                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/nace-code');
                }

            }
        } catch (err) {
            return errHdlr(err, h);
        }
    },

    naceSummary: async (request, h) => {
        try {
            const { tasks } = await cacheHelper(request, 'nace-code');

            if (request.method === 'get') {

                if (!tasks.nace || !tasks.nace.id) {
                    return h.redirect('/check/nace-code');
                } else {
                    const nace = await internals.getFullNaceHierarchy(tasks.nace.id);
                    return h.view('all-sectors/check/nace-summary', { nace });
                }

            } else {

                if (request.payload.change) {
                    const nace = await MasterDataService.getNaceClassById(tasks.nace.id);
                    tasks.nace.text = nace.code;
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/nace-code');
                } else {
                    return h.redirect('/task-list');
                }
            }

        } catch (err) {
            return errHdlr(err, h);
        }

    },

    nose: async (request, h) => {
        try {
            const { tasks } = await cacheHelper(request, 'nose-codes');

            if (request.method === 'get') {

                if (tasks.nose) {

                    // Adding subsequent
                    if (tasks.nose.add) {
                        delete tasks.nose.add;
                        await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                        return h.view('all-sectors/check/nose-code');
                    }

                    // Redirected with an error
                    if (tasks.nose && tasks.nose.error) {
                        return h.view('all-sectors/check/nose-code', { error: tasks.nose.error });
                    }

                    // Go to the summary
                    return h.redirect('/check/nose-summary');
                }

                // Add first
                return h.view('all-sectors/check/nose-code');

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
                    return h.redirect('/check/nose-summary');
                } else {
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/nose-code');
                }

            }
        } catch (err) {
            return errHdlr(err, h);
        }
    },

    noseSummary: async (request, h) => {
        try {
            const { route, submissionContext, tasks } = await cacheHelper(request, 'nose-codes');

            if (request.method === 'get') {

                // Clear any left over errors
                if (tasks.nose) {
                    delete tasks.nose.error;
                }

                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

                if (!tasks.nose || !tasks.nose.noseIds) {
                    return h.redirect('/check/nose-code');
                } else {
                    await setConfirmation(request, submissionContext, route);
                    const noses = await internals.getNoseProcesses(tasks.nose.noseIds);
                    return h.view('all-sectors/check/nose-summary', { noses });
                }

            } else {
                if (Object.keys(request.payload).includes('add')) {
                    tasks.nose.add = {};
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/nose-code');
                } else if (request.payload && Object.values(request.payload).includes('Delete')) {
                    tasks.nose.currentNoseId = Number.parseInt(Object.keys(request.payload)[0].substring(7));
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/nose-remove');
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
            const { tasks } = await cacheHelper(request, 'nose-codes');
            const nose = await MasterDataService.getNoseProcessById(tasks.nose.currentNoseId);

            if (request.method === 'get') {
                return h.view('all-sectors/check/nose-code-confirm-delete', { nose });
            } else {
                const idx = tasks.nose.noseIds.findIndex(a => a === tasks.nose.currentNoseId);
                tasks.nose.noseIds.splice(idx, 1);
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                if (tasks.nose.noseIds.length === 0) {
                    delete tasks.nose;
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    return h.redirect('/check/nose-code');
                } else {
                    return h.redirect('/check/nose-summary');
                }
            }
        } catch (err) {
            return errHdlr(err, h);
        }
    }
};

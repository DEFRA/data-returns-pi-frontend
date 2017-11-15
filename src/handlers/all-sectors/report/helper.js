'use strict';

/**
 * Common functions for route handlers
 */
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');

const internals = {
    /**
     * Used to identify the current submission task type
     */
    tasks: {
        RELEASES_TO_AIR: { uri: '/air' },
        RELEASES_TO_LAND: { uri: '/land' },
        OFFSITE_TRANSFERS_IN_WASTE_WATER: { uri: '/waste-water' },
        RELEASES_TO_CONTROLLED_WATERS: { uri: '/water' }
    },

    /**
     * Save submission regardless of validation
     */
    save: async (request) => {
        /*
         * Rewrite the tasks object
         * let tasks = await request.server.app.userCache.cache('tasks').get(request);
         */
        const tasks = await request.server.app.userCache.cache('tasks').get(request);

        if (!tasks || !tasks.releases) {
            throw new Error('Cache read error - invalid task cache');
        }

        Object.keys(tasks.releases).forEach(s => {
            if (request.payload['value-' + s]) {
                tasks.releases[s].value = request.payload['value-' + s];
            }
            if (request.payload['unitId-' + s]) {
                const unitId = Number.parseInt(request.payload['unitId-' + s]);
                tasks.releases[s].unitId = Number.isNaN(unitId) ? null : unitId;
            }
        });

        await request.server.app.userCache.cache('tasks').set(request, tasks);
    },

    /**
     * Function to order the substances on the release screen
     * @param a - first release
     * @param b - second release
     * @return {number}
     */
    sortReleases: (a, b) => {
        const nameA = a.substance.name.toUpperCase();
        const nameB = b.substance.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    }
};

module.exports = {

    // Expose the tasks object
    tasks: internals.tasks,

    /**
     * Process the confirmation pages
     * @param request
     * @param task
     * @param stageStatus - the
     * @return {Promise.<boolean>}
     */
    processConfirmations: async (request, reply, task) => {
        try {
            const stageStatus = await request.server.app.userCache.cache('permit-status').get(request);

            if (!stageStatus) {
                throw new Error('Unexpected cache error reading stage status');
            }

            if (request.method === 'get') {
                // Display the releases to air confirmation page
                reply.view('all-sectors/report/confirm', { task: task, selected: stageStatus[task].supplied });
            } else {
                // Process the confirmation
                if (request.payload.confirmation === 'true') {
                    if (!stageStatus[task].supplied) {
                        stageStatus[task].supplied = true;
                        stageStatus.currentTask = task;
                        await request.server.app.userCache.cache('permit-status').set(request, stageStatus);
                    }
                    reply.redirect(internals.tasks[task].uri);
                } else {
                    if (stageStatus[task].supplied) {
                        stageStatus[task].supplied = false;
                        await request.server.app.userCache.cache('permit-status').set(request, stageStatus);
                    }
                    reply.redirect('/all-sectors');
                }
            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    },

    /**
     * Handler for the main releases submission pages to air, land, waste-water and controlled water
     * @param request
     * @param reply
     * @param task
     * @return {Promise.<void>}
     */
    releases: async (request, reply, task) => {
        try {
            // Get the task-status object or create a new one
            const eaId = await request.server.app.userCache.cache('submission-status').get(request);

            if (!eaId) {
                throw new Error('No cached status object found');
            }

            let tasks = await request.server.app.userCache.cache('tasks').get(request);

            if (!tasks) {
                tasks = {};
                tasks.releases = {};
                request.server.app.userCache.cache('tasks').set(request, tasks);
            }

            // Enrich the stored object for page presentation - add descriptions
            const releases = await Promise.all(Object.keys(tasks.releases).map(async id => {
                return {
                    substance: await MasterDataService.getSubstanceById(Number.parseInt(id)),
                    value: tasks.releases[id].value,
                    unitId: tasks.releases[id].unitId
                };
            }));

            // Sort the releases by substance name
            releases.sort(internals.sortReleases);

            // Get the units list
            const units = await MasterDataService.getUnits();

            reply.view('all-sectors/report/substances', { task: task, eaId: eaId.name, releases: releases, units: units });
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    },

    /**
     * Validate the submitted releases
     * @param request
     * @param reply
     * @param task
     * @return {Promise.<void>}
     */
    validate: async (request, reply, task) => {
        try {
            await internals.save(request);
            reply.redirect('/all-sectors');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    },

    /**
     * Validate the submitted releases
     * @param request
     * @param reply
     * @param task
     * @return {Promise.<void>}
     */
    detail: async (request, reply, task) => {
        try {
            await internals.save(request);
            reply.redirect('/all-sectors');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }

};

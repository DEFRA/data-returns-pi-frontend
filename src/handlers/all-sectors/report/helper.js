'use strict';

/**
 * Common functions for route handlers for substance releases to
 * air, water, waste water and land
 */
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Errors = require('../../../model/all-sectors/errors.js');

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
     * Save submission regardless of validation status
     * @param request
     * @return {Promise.<void>}
     */
    save: async (request) => {

        // Read the tasks object
        const tasks = await request.server.app.userCache.cache('tasks').get(request);

        if (!tasks) {
            throw new Error('Cache error: tasks object not found');
        }

        Object.keys(tasks.releases).forEach(s => {

            // Strip the value from the payload and add to the tasks objects
            tasks.releases[s].value = request.payload['value-' + s];

            // Strip the units from the payload and add to the tasks objects
            const unitId = Number.parseInt(request.payload['unitId-' + s]);
            tasks.releases[s].unitId = Number.isNaN(unitId) ? null : unitId;
        });

        // Write the tasks object
        await request.server.app.userCache.cache('tasks').set(request, tasks);
    },

    /**
     * Validates the submission saving the state to the cache if the submission is invalid.
     *
     * Returns true if invalid
     * @param request - the request object
     * @param tasks - the tasks read from cache
     * @return {Promise.<boolean>} - promises to be true if invalid
     */
    validate: async (request) => {

        // Read the tasks
        const tasks = await request.server.app.userCache.cache('tasks').get(request);

        if (!tasks) {
            throw new Error('Cache error: tasks object not found');
        }

        let isValid = true;
        Object.keys(tasks.releases).forEach(s => {

            const release = tasks.releases[s];

            // Remove any old validations
            delete release.errors;

            // Test number or BRT
            if (!release.value || (Number.isNaN(Number.parseFloat(release.value)) && release.value.toUpperCase() !== 'BRT')) {
                isValid = false;
                release.errors = [ Errors.NOT_A_NUMBER_OR_BRT.errno ];
            }

            // Test units and BRT
            if (release.value && release.value.toUpperCase() === 'BRT' && release.unitId) {
                isValid = false;
                if (release.errors) {
                    release.errors.push(Errors.UNIT_WITH_BRT.errno);
                } else {
                    release.errors = [ Errors.UNIT_WITH_BRT.errno ];
                }
            }

            // Test non BRT value is present and is a number and without units
            if (release.value && !Number.isNaN(Number.parseFloat(release.value)) && !release.unitId) {
                isValid = false;
                if (release.errors) {
                    release.errors.push(Errors.NUMBER_WITHOUT_UNIT.errno);
                } else {
                    release.errors = [ Errors.NUMBER_WITHOUT_UNIT.errno ];
                }
            }

        });

        // Write the validations to the cache
        await request.server.app.userCache.cache('tasks').set(request, tasks);

        return isValid;
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
                throw new Error('Cache error: submission-status object not found');
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
                throw new Error('Cache error: submission-status object not found');
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
                    unitId: tasks.releases[id].unitId,
                    errors: tasks.releases[id].errors
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

            // Save and validate the submission
            await internals.save(request);

            // Validate the submission
            if (await internals.validate(request)) {
                reply.redirect('/all-sectors');
            } else {
                reply.redirect(internals.tasks[task].uri);
            }

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

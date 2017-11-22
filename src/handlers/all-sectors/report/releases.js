'use strict';

/**
 * Common functions for route handlers for substance releases to
 * air, water, waste water and land
 */
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Validator = require('../../../lib/validator');

const BELOW_REGULATORY_THRESHOLD = 'BRT';

const internals = {

    isBrt: (value) => {
        return value && typeof value === 'string' && value.toUpperCase().trim() === BELOW_REGULATORY_THRESHOLD;
    },

    /**
     * Used to identify the current submission task type
     */
    routes: {
        RELEASES_TO_AIR: { route: 'RELEASES_TO_AIR', pathParam: 'air', uri: '/releases/air' },
        RELEASES_TO_LAND: { route: 'RELEASES_TO_LAND', pathParam: 'land', uri: '/releases/land' },
        OFFSITE_TRANSFERS_IN_WASTE_WATER: { route: 'OFFSITE_TRANSFERS_IN_WASTE_WATER', pathParam: 'waste-water', uri: '/releases/waste-water' },
        RELEASES_TO_CONTROLLED_WATERS: { route: 'RELEASES_TO_CONTROLLED_WATERS', pathParam: 'water', uri: '/releases-water' }
    },

    /**
     * Function to get the route object from the parameter
     * @param request
     */
    getRoute: (request) => {
        const route = Object.values(internals.routes).find(r => r.pathParam === request.params.route);
        if (!route) {
            throw new Error(`Request error: incorrect route specified: ${request.params.route}`);
        }
        return route;
    },

    /**
     * Save submission to the task object regardless of validation status
     * Does not write the task object back to the cache
     * @param request
     * @return {Promise.<void>}
     */
    save: async (request, tasks) => {
        Object.keys(tasks.releases).forEach(s => {
            // Strip the value from the payload and add to the tasks objects
            tasks.releases[s].value = request.payload['value-' + s];

            // Strip the units from the payload and add to the tasks objects
            const unitId = Number.parseInt(request.payload['unitId-' + s]);
            tasks.releases[s].unitId = Number.isNaN(unitId) ? null : unitId;
        });
    },

    /**
     * Validates the submission saving the state to the cache if the submission is invalid.
     *
     * Returns true if invalid
     * @param request - the request object
     * @param tasks - the tasks read from cache
     * @return {Promise.<boolean>} - promises to be true if invalid
     */
    validate: async (request, tasks) => {
        let isValid = true;
        Object.keys(tasks.releases).forEach(s => {
            if (!Validator.release(tasks.releases[s])) {
                isValid = false;
            }
        });
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

    // Expose the isBrt function
    isBrt: internals.isBrt,

    // Expose the validate function
    validate: internals.validate,

    // Expose the function to get the route object from the parameter
    getRoute: internals.getRoute,

    // Need the routes also for the substances handler
    routes: internals.routes,

    /**
     * Process the confirmation pages
     * @param request
     * @param task
     * @param stageStatus - the
     * @return {Promise.<boolean>}
     */
    confirm: async (request, reply) => {
        try {
            const route = internals.getRoute(request);
            const permitStatus = await request.server.app.userCache.cache('permit-status').get(request);

            if (!permitStatus) {
                throw new Error('Cache error: permit-status object not found');
            }

            if (request.method === 'get') {
                // Display the releases to air confirmation page
                reply.view('all-sectors/report/confirm', { route: route.route, selected: permitStatus[route.route].supplied });
            } else {
                // Process the confirmation
                if (request.payload.confirmation === 'true') {
                    permitStatus[route.route].supplied = true;
                    permitStatus.currentTask = route.route;
                    await request.server.app.userCache.cache('permit-status').set(request, permitStatus);
                    reply.redirect(route.uri);
                } else {
                    if (permitStatus[route.route].supplied) {
                        permitStatus[route.route].supplied = false;
                        await request.server.app.userCache.cache('permit-status').set(request, permitStatus);
                    }
                    reply.redirect('/task-list');
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
    releases: async (request, reply) => {
        try {
            const route = internals.getRoute(request);

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

            reply.view('all-sectors/report/releases', { route: route.route, eaId: eaId.name, releases: releases, units: units });
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    },

    /**
     * Save action
     */
    action: async (request, reply, task) => {
        try {
            const route = internals.getRoute(request);

            // Read the tasks
            const tasks = await request.server.app.userCache.cache('tasks').get(request);

            if (!tasks) {
                throw new Error('Cache error: tasks object not found');
            }

            // Save the submission
            await internals.save(request, tasks);

            // If we continue we will need to validate the submission
            if (request.payload.continue) {

                // Test if the releases are valid
                if (await internals.validate(request, tasks)) {
                    // Write the (removed) validations to the cache
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect('/task-list');
                } else {
                    // Update the cache with the validation objects and redirect back to the page
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect(route.uri);
                }

            } else if (Object.keys(request.payload).find(s => s.startsWith('detail'))) {
                // Save the substance id and redirect to the release detail page
                tasks.currentDetail = Object.keys(request.payload)
                    .find(s => s.startsWith('detail')).substr(7);

                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect(route.uri + '/detail');

            } else if (request.payload.back) {
                // Save the release information to the cache and return to the main task-list page
                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect('/task-list');

            } else if (request.payload.add) {
                // Save the release information to the cache and redirect to the add-substances page
                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect('/add-substance');

            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

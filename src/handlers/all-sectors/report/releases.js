'use strict';

/**
 * Common functions for route handlers for substance releases to
 * air, water, waste water and land
 */
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Validator = require('../../../lib/validator');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const TaskListService = require('../../../service/task-list');
const AllSectorsTaskList = require('../../../model/all-sectors/task-list');

const internals = {

    /**
     * Function to get the route object from the parameter
     * @param request
     */
    getRoute: (request) => {
        const map = TaskListService.mapByPathParameter(AllSectorsTaskList);
        const route = map.get(request.params.route);
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
            delete tasks.releases[s].errors;
            const validation = Validator.release(tasks.releases[s]);
            if (validation) {
                tasks.releases[s].errors = validation;
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
    },

    /**
     * Determine if a releases can be deleted
     * (a) Without warning
     * (b) With warning
     * (c) No - substance in previous submission. Delete flagged
     * @param release
     * @return NO_WARN, WARN or FLAG
     */
    canDelete: ({ value, unitId, methodId }) => {
        if (value || unitId || methodId) {
            return 'WARN';
        } else {
            return 'NO_WARN';
        }
    }
};

module.exports = {

    // Expose the tasks object
    tasks: internals.tasks,

    // Expose the validate function
    validate: internals.validate,

    // Expose the function to get the route object from the parameter
    getRoute: internals.getRoute,

    /**
     * Display the confirmation pages - skip if the release type is pre-populated
     * @param request
     * @param task
     * @param stageStatus - the
     * @return {Promise.<boolean>}
     */
    confirm: async (request, reply) => {
        try {
            const route = internals.getRoute(request);
            const permitStatus = await request.server.app.userCache.cache('permit-status').get(request);
            const eaId = await request.server.app.userCache.cache('submission-status').get(request);

            if (!permitStatus || !route || !eaId) {
                throw new CacheKeyError('Invalid cache state');
            }

            permitStatus.currentTask = route.name;
            await request.server.app.userCache.cache('permit-status').set(request, permitStatus);

            if (request.method === 'get') {
                const tasks = await request.server.app.userCache.cache('tasks').get(request);

                if (tasks && tasks.releases && Object.entries(tasks.releases).length > 0) {

                    // Clean up any unconfirmed releases
                    let haveUnconfirmed = false;
                    Object.entries(tasks.releases).forEach(async ([key, value]) => {
                        if (!value.confirmed) {
                            delete tasks.releases[key];
                            haveUnconfirmed = true;
                        }
                    });

                    if (haveUnconfirmed) {
                        await request.server.app.userCache.cache('tasks').set(request, tasks);
                    }

                    // If releases exist then go straight to the release page
                    if (Object.entries(tasks.releases).length > 0) {
                        reply.redirect(route.page);
                    } else {
                        // Display the releases to air confirmation page
                        reply.view('all-sectors/report/confirm', {
                            route: route.name,
                            selected: false
                        });
                    }

                } else {
                    // Display the appropriate confirmation page
                    reply.view('all-sectors/report/confirm', {
                        route: route.name,
                        selected: false
                    });
                }

            } else {

                // Process the confirmation - set the current route and redirect to the releases page
                if (request.payload.confirmation === 'true') {
                    permitStatus.currentTask = route.name;
                    await request.server.app.userCache.cache('permit-status').set(request, permitStatus);
                    reply.redirect(route.page);

                } else {
                    reply.redirect('/task-list');
                }
            }
        } catch (err) {
            if (err instanceof CacheKeyError) {
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
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
            const eaId = await request.server.app.userCache.cache('submission-status').get(request);
            const permitStatus = await request.server.app.userCache.cache('permit-status').get(request);

            if (!permitStatus || !route || !eaId) {
                throw new CacheKeyError('Invalid cache state');
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

            reply.view('all-sectors/report/releases', { route: route.name, eaId: eaId.name, releases: releases, units: units });
        } catch (err) {
            if (err instanceof CacheKeyError) {
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    },

    /**
     * Save action
     */
    action: async (request, reply, task) => {
        try {
            const route = internals.getRoute(request);
            const tasks = await request.server.app.userCache.cache('tasks').get(request);

            if (!tasks || !route) {
                throw new CacheKeyError('invalid cache state');
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
                    reply.redirect(route.page);
                }

            } else if (Object.keys(request.payload).find(s => s.startsWith('detail'))) {

                // Save the substance id and redirect to the release detail page
                tasks.currentSubstanceId = Object.keys(request.payload)
                    .find(s => s.startsWith('detail')).substr(7);

                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect(route.page + '/detail');

            } else if (Object.keys(request.payload).find(s => s.startsWith('delete'))) {
                // Save the substance id and redirect to the delete confirmation page
                const substanceId = Object.keys(request.payload)
                    .find(s => s.startsWith('delete')).substr(7);

                const release = tasks.releases[substanceId];

                switch (internals.canDelete(release)) {

                    case 'NO_WARN':
                        // Save the current substance
                        tasks.currentSubstanceId = substanceId;
                        delete tasks.releases[substanceId];
                        await request.server.app.userCache.cache('tasks').set(request, tasks);
                        reply.redirect(route.page);
                        break;

                    case 'WARN':
                        // Send to delete confirmation dialog
                        tasks.currentSubstanceId = substanceId;
                        await request.server.app.userCache.cache('tasks').set(request, tasks);
                        reply.redirect(route.page + '/remove');
                        break;

                    case 'FLAG':
                        tasks.releases[substanceId].removed = true;
                        await request.server.app.userCache.cache('tasks').set(request, tasks);
                        reply.redirect(route.page);
                        break;

                    default:
                        reply.redirect('/task-list');
                        break;
                }

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
            if (err instanceof CacheKeyError) {
                reply.redirect('/');
            } else {
                logger.log('error', err);
                reply.redirect('/logout');
            }
        }
    }
};

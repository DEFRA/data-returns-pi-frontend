'use strict';

/**
 * Common functions for route handlers for substance releases to
 * air, water, waste water and land
 */
const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Validator = require('../../../lib/validator');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const cacheHelper = require('../common').cacheHelper;
const TaskListService = require('../../../service/task-list');
const AllSectorsTaskList = require('../../../model/all-sectors/task-list');

const NEW_RELEASE_OBJECT = { value: null, unitId: null, methodId: null };

const internals = {

    /**
     * Save submission to the task object regardless of validation status
     * Does not write the task object back to the cache
     * @param request
     * @return {Promise.<void>}
     */
    save: (request, tasks) => {
        if (tasks.releases) {
            Object.keys(tasks.releases).forEach(s => {
                // Strip the value from the payload and add to the tasks objects
                tasks.releases[s].value = request.payload['value-' + s];

                // Strip the units from the payload and add to the tasks objects
                const unitId = Number.parseInt(request.payload['unitId-' + s]);
                tasks.releases[s].unitId = Number.isNaN(unitId) ? null : unitId;
            });
        }
    },

    /**
     * Validates the submission saving the state to the cache if the submission is invalid.
     *
     * Returns true if invalid
     * @param request - the request object
     * @param tasks - the tasks read from cache
     * @return {Promise.<boolean>} - promises to be true if invalid
     */
    validate: (request, tasks) => {
        if (tasks.releases) {
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
        }

        return false;
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
    },

    /**
     * Clear any releases with the unconfirmed flag set - this can happen
     * due to unexpected navigation
     * @param request
     * @param tasks
     */
    cleanUnconfirmed: async (request, tasks) => {
        // Clean up any unconfirmed releases
        if (tasks.releases) {
            let haveUnconfirmed = false;

            Object.entries(tasks.releases).forEach(async ([key, value]) => {
                if (value.unconfirmed) {
                    delete tasks.releases[key];
                    haveUnconfirmed = true;
                }
            });

            if (haveUnconfirmed) {
                await request.server.app.userCache.cache('tasks').set(request, tasks);
            }
        }
    },

    /**
     * Sort the substance list by name alphabetically
     * @param a
     * @param b
     * @return {number}
     */
    sortSubstances: (a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

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

    // Expose the validate function
    validate: internals.validate,

    /**
     * Display the confirmation pages - skip if the release type is pre-populated
     * @param request
     * @param task
     * @param stageStatus - the
     * @return {Promise.<boolean>}
     */
    confirm: async (request, reply) => {
        try {
            const { route, tasks } = await cacheHelper(request);

            if (request.method === 'get') {

                if (tasks && tasks.releases && Object.entries(tasks.releases).length > 0) {

                    // Clear any unconfirmed releases
                    internals.cleanUnconfirmed(request, tasks);

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
                // Process the confirmation - the releases page
                if (request.payload.confirmation === 'true') {
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
            const { route, submissionStatus, tasks } = await cacheHelper(request);

            // Clear any unconfirmed releases
            internals.cleanUnconfirmed(request, tasks);

            // Enrich the stored object for page presentation - add descriptions
            let releases = [];

            if (tasks.releases) {
                releases = await Promise.all(Object.keys(tasks.releases).map(async id => {
                    return {
                        substance: await MasterDataService.getSubstanceById(Number.parseInt(id)),
                        value: tasks.releases[id].value,
                        unitId: tasks.releases[id].unitId,
                        errors: tasks.releases[id].errors
                    };
                }));

                // Sort the releases by substance name
                releases.sort(internals.sortReleases);
            }

            reply.view('all-sectors/report/releases', {
                route: route.name,
                eaId: submissionStatus.name,
                releases: releases,
                units: await MasterDataService.getUnits()
            });

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
    action: async (request, reply) => {
        try {
            const { route, tasks } = await cacheHelper(request);

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
                const substanceId = Number.parseInt(Object.keys(request.payload)
                    .find(s => s.startsWith('delete')).substr(7));

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
                reply.redirect(route.page + '/add-substance');
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
     * Detail action
     */
    detail: async (request, reply) => {
        try {
            // Check the permit status has been set
            const permitStatus = await request.server.app.userCache.cache('permit-status').get(request);
            const tasks = await request.server.app.userCache.cache('tasks').get(request);
            const route = TaskListService.getRoute(AllSectorsTaskList, request);

            if (!permitStatus || !tasks || !route) {
                throw new CacheKeyError('invalid cache state');
            }

            if (request.method === 'get') {
                // Get the current release and enrich with the substance details
                const release = tasks.releases[tasks.currentSubstanceId];

                if (!release) {
                    throw new CacheKeyError('invalid cache state');
                }

                const substance = await MasterDataService.getSubstanceById(Number.parseInt(tasks.currentSubstanceId));
                release.substance = substance;

                // Get the methods list
                const methods = await MasterDataService.getMethods();

                // Get the units list
                const units = await MasterDataService.getUnits();

                // Display the detail page
                reply.view('all-sectors/report/release-detail', { route: route.name, release: release, methods: methods, units: units });
            } else {

                // Set the task detail elements
                const { unitId, methodId, value } = request.payload;
                const currentRelease = tasks.releases[tasks.currentSubstanceId];

                // Set up the release object
                currentRelease.unitId = Number.isNaN(Number.parseInt(unitId)) ? null : Number.parseInt(unitId);
                currentRelease.methodId = Number.isNaN(Number.parseInt(methodId)) ? null : Number.parseInt(methodId);
                currentRelease.value = Number.isNaN(Number.parseFloat(value)) ? value : Number.parseFloat(value);

                delete currentRelease.errors;

                // Validate the release object
                const validation = await Validator.release(tasks.releases[tasks.currentSubstanceId]);

                if (validation) {
                    // Update the cache with the validation objects and redirect back to the releases page
                    currentRelease.errors = validation;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect(route.page + '/detail');
                } else {
                    // Write the (removed) validations and cleared unconfirmed flag to the cache
                    delete currentRelease.unconfirmed;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect(route.page);
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
     * Remove a release
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    remove: async (request, reply) => {
        try {

            const tasks = await request.server.app.userCache.cache('tasks').get(request);

            // Check for tasks
            if (!tasks) {
                throw new CacheKeyError('invalid cache state');
            }

            const release = tasks.releases[tasks.currentSubstanceId];
            const route = TaskListService.getRoute(AllSectorsTaskList, request);
            const substance = await MasterDataService.getSubstanceById(Number.parseInt(tasks.currentSubstanceId));

            if (request.method === 'get') {
                release.substance = substance;
                reply.view('all-sectors/report/confirm-delete', { route: route.name, release: release });
            } else {
                delete tasks.releases[tasks.currentSubstanceId];
                await request.server.app.userCache.cache('tasks').set(request, tasks);
                reply.redirect(route.page);
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
     * Add (single) substance
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    add: async (request, reply) => {
        try {
            // Get cache objects
            const { route, tasks } = await cacheHelper(request);

            if (request.method === 'get') {

                // Get a list of all of the substances from the master data service
                let substances = await MasterDataService.getSubstances();

                // Remove any substances already reported
                if (tasks.releases) {
                    const substanceIds = Object.keys(tasks.releases).map(k => Number.parseInt(k));
                    substances = substances.filter(s => !substanceIds.find(i => s.id === i));
                }

                substances = substances.sort(internals.sortSubstances);

                // Render the add substances page
                reply.view('all-sectors/report/add-substance', { route: route, substances: substances });
            } else {
                const substance = await MasterDataService.getSubstanceById(Number.parseInt(request.payload['substanceId']));

                // Add the selected substances to the task if it exists
                if (!substance) {
                    throw new Error('Unknown substance requested from page');
                }

                // Add a new releases array to the task object if it does not exist
                if (!tasks.releases) {
                    tasks.releases = {};
                }

                // Add the substance to the task provided it does not already exist
                if (!tasks.releases[substance.id]) {
                    tasks.releases[substance.id] = NEW_RELEASE_OBJECT;
                }

                // Set the unconfirmed flag which will be removed on save
                tasks.releases[substance.id].unconfirmed = true;

                // Set the current task to allow us to get directly to the detail page
                tasks.currentSubstanceId = substance.id;

                // Write the task object back to the cache
                await request.server.app.userCache.cache('tasks').set(request, tasks);

                reply.redirect(route.page + '/detail');
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

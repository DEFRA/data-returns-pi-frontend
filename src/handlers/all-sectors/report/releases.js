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
const isNumeric = require('../../../lib/utils').isNumeric;
const cacheNames = require('../../../lib/user-cache-policies').names;

const setConfirmation = require('../common').setConfirmation;
const setValidationStatus = require('../common').setValidationStatus;
const setChallengeStatus = require('../common').setChallengeStatus;

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
            Object.keys(tasks.releases).filter(r => isNumeric(r)).forEach(s => {
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
            Object.keys(tasks.releases).filter(r => isNumeric(r)).forEach(s => {
                delete tasks.releases[s].errors;
                const validation = Validator.release(tasks.releases[s]);
                if (validation) {
                    tasks.releases[s].errors = validation;
                    isValid = false;
                }
            });
            return isValid;
        }
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

    // The substances also need to be sorted in the overseas waste
    sortSubstances: internals.sortSubstances,

    /**
     * Display the confirmation pages - skip if the release type is pre-populated
     * @param request
     * @param task
     * @param stageStatus - the
     * @return {Promise.<boolean>}
     */
    confirm: async (request, reply) => {
        try {
            const { submissionContext, route, tasks } = await cacheHelper(request);

            if (request.method === 'get') {

                if (tasks && tasks.releases && Object.keys(tasks.releases).filter(r => isNumeric(r)).length > 0) {

                    // Redirect to main route page
                    reply.redirect(route.page);

                } else {
                    // Display the appropriate confirmation page
                    reply.view('all-sectors/report/confirm', {
                        route: route,
                        selected: false
                    });
                }

            } else {
                // Process the confirmation - the releases page
                if (request.payload && request.payload.confirmation === 'true') {
                    await setChallengeStatus(request, submissionContext, route, true);
                    reply.redirect(route.page);
                } else {
                    // If the challenge page results in false then this is a confirmed route
                    await setConfirmation(request, submissionContext, route, true);

                    // Unset the confirmation status when viewing the page
                    await setChallengeStatus(request, submissionContext, route);
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
            const { submissionContext, route, eaId, tasks } = await cacheHelper(request);

            if (tasks.releases && Object.keys(tasks.releases).filter(r => isNumeric(r)).length > 0) {
                // Enrich the stored object for page presentation - add descriptions
                let releases = [];

                if (tasks.releases) {

                    releases = await Promise.all(Object.keys(tasks.releases).filter(r => isNumeric(r)).map(async id => {
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

                // Unset the confirmation status when viewing the page
                await setConfirmation(request, submissionContext, route);

                reply.view('all-sectors/report/releases', {
                    route: route,
                    eaId: eaId.name,
                    releases: releases,
                    units: await MasterDataService.getUnits()
                });

            } else {

                // Add a release immediately
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
     * Save action - responds to the post request on the main releases summary page
     */
    action: async (request, reply) => {
        try {
            const { route, tasks, submissionContext } = await cacheHelper(request);

            // Save the submission
            await internals.save(request, tasks);

            // If we continue we will need to validate the submission
            if (request.payload.continue) {

                // Test if the releases are valid
                if (await internals.validate(request, tasks)) {
                    // Set the confirmation flag to confirmed
                    await setConfirmation(request, submissionContext, route, true);

                    // Set the overall route validation status to valid
                    await setValidationStatus(request, submissionContext, route, true);

                    // Rewrite the tasks with no error and go back to the task-list
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    reply.redirect('/task-list');
                } else {
                    // Unset the confirmation flag
                    await setConfirmation(request, submissionContext, route);

                    // Set the overall route validation status to invalid
                    await setValidationStatus(request, submissionContext, route);

                    // Rewrite the tasks and go back to the route page
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    reply.redirect(route.page);
                }

            } else if (Object.keys(request.payload).find(s => s.startsWith('detail'))) {

                // Save the substance id and redirect to the release detail page
                tasks.currentSubstanceId = Object.keys(request.payload)
                    .find(s => s.startsWith('detail')).substr(7);

                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                reply.redirect(route.page + '/detail');

            } else if (Object.keys(request.payload).find(s => s.startsWith('delete'))) {
                // Save the substance id and redirect to the delete confirmation page
                const substanceId = Number.parseInt(Object.keys(request.payload)
                    .find(s => s.startsWith('delete')).substr(7));

                // Send to the delete confirmation dialog
                tasks.currentSubstanceId = substanceId;
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                reply.redirect(route.page + '/remove');

            } else if (request.payload.add) {
                // Save the release information to the cache and redirect to the add-substances page
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
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
            const { submissionContext, route, tasks } = await cacheHelper(request);

            if (!tasks.releases || !tasks.currentSubstanceId) {
                throw new CacheKeyError('Cache read error');
            }

            if (request.method === 'get') {
                // Unset the confirmation status when viewing the page
                await setConfirmation(request, submissionContext, route);

                // Get the current release and enrich with the substance details
                const release = tasks.releases[tasks.currentSubstanceId];

                const substance = await MasterDataService.getSubstanceById(Number.parseInt(tasks.currentSubstanceId));
                release.substance = substance;

                // Get the methods list
                const methods = await MasterDataService.getMethods();

                // Get the units list
                const units = await MasterDataService.getUnits();

                // Display the detail page
                reply.view('all-sectors/report/release-detail', { route: route, release: release, methods: methods, units: units });
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
                const validation = Validator.release(tasks.releases[tasks.currentSubstanceId]);

                if (validation) {
                    // Unset the overall validation status
                    await setValidationStatus(request, submissionContext, route);

                    // Update the cache with the validation objects and redirect back to the releases page
                    currentRelease.errors = validation;
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    reply.redirect(route.page + '/detail');
                } else {
                    // Calculate the overall validation status
                    await setValidationStatus(request, submissionContext, route, internals.validate(request, tasks));

                    // Valid to go back to the main releases page
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    reply.redirect(route.page);
                }
            }
        } catch (err) {
            if (err instanceof CacheKeyError) {
                logger.debug(err);
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
            const { route, tasks, submissionContext } = await cacheHelper(request);
            const release = tasks.releases[tasks.currentSubstanceId];
            const substance = await MasterDataService.getSubstanceById(Number.parseInt(tasks.currentSubstanceId));

            if (request.method === 'get') {
                release.substance = substance;
                reply.view('all-sectors/report/confirm-delete', { route: route, release: release });
            } else {
                delete tasks.releases[tasks.currentSubstanceId];
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

                // Recalculate the overall route validation status
                await setValidationStatus(request, submissionContext, route, internals.validate(request, tasks));

                // If this is the last release redirect back to the task list
                if (Object.keys(tasks.releases).filter(r => isNumeric(r)).length > 0) {
                    reply.redirect(route.page);
                } else {
                    // Here we unset the challenge flag - the user must explicitly say no to the route
                    await setChallengeStatus(request, submissionContext, route);
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
     * Add (single) substance
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    add: async (request, reply) => {
        try {
            // Get cache objects
            const { route, tasks, submissionContext } = await cacheHelper(request);

            if (request.method === 'get') {
                // Unset the confirmation status when viewing the page
                await setConfirmation(request, submissionContext, route);

                // Get a list of all of the substances from the master data service
                let substances = await MasterDataService.getSubstances(route.name);

                // Remove any substances already reported
                if (tasks.releases) {
                    const substanceIds = Object.keys(tasks.releases).filter(r => isNumeric(r)).map(k => Number.parseInt(k));
                    substances = substances.filter(s => !substanceIds.find(i => s.id === i));
                }

                substances = substances.sort(internals.sortSubstances);

                if (tasks.releases && tasks.releases.substanceErrors) {
                    reply.view('all-sectors/report/add-substance', {
                        route: route,
                        substances: substances,
                        errors: tasks.releases.substanceErrors
                    });
                } else {
                    reply.view('all-sectors/report/add-substance', {
                        route: route,
                        substances: substances
                    });
                }

            } else {
                let success = false;

                // Add a new releases array to the task object if it does not exist
                if (!tasks.releases) {
                    tasks.releases = {};
                }

                if (request.payload.substanceId) {
                    const substance = await MasterDataService.getSubstanceById(Number.parseInt(request.payload['substanceId']));

                    // Add the selected substances to the task if it exists
                    if (substance) {

                        // Assign this substance to the transfer object
                        if (!tasks.releases[substance.id]) {
                            tasks.releases[substance.id] = NEW_RELEASE_OBJECT;
                        }

                        // Immediately set the overall validation status to false
                        await setValidationStatus(request, submissionContext, route);

                        // Set the current task to allow us to get directly to the detail page
                        tasks.currentSubstanceId = substance.id;
                        delete tasks.releases.substanceErrors;
                        success = true;

                        // If there is no substance then redirect back with an error Write the task object back to the cache
                        await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

                        reply.redirect(route.page + '/detail');
                    }
                }

                if (!success) {
                    tasks.releases.substanceErrors = [ { key: 'substance', errno: 'PI-1004' } ];
                    await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
                    reply.redirect(route.page + '/add-substance');
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
    }
};

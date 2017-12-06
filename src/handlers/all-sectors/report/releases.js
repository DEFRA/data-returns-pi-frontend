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

const internals = {

    /**
     * Save submission to the task object regardless of validation status
     * Does not write the task object back to the cache
     * @param request
     * @return {Promise.<void>}
     */
    save: async (request, tasks) => {
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
    validate: async (request, tasks) => {
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
    }
};

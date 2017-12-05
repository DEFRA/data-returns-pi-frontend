'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const TaskListService = require('../../../service/task-list');
const AllSectorsTaskList = require('../../../model/all-sectors/task-list');
const Validator = require('../../../lib/validator');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;

/**
 * Route handlers for adding substances to a release
 */
module.exports = {
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

    // Remove action
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
    }
};

'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Releases = require('./releases');
const Validator = require('../../../lib/validator');

/**
 * Route handlers for adding substances to a release
 */
module.exports = {
    /**
     * Detail action
     */
    detail: async (request, reply) => {
        try {
            const tasks = await request.server.app.userCache.cache('tasks').get(request);
            const route = Releases.getRoute(request);

            if (request.method === 'get') {
                // Get the current release and enrich with the substance details
                const release = tasks.releases[tasks.currentDetail];
                const substance = await MasterDataService.getSubstanceById(Number.parseInt(tasks.currentDetail));
                release.substance = substance;

                // Get the methods list
                const methods = await MasterDataService.getMethods();

                // Get the units list
                const units = await MasterDataService.getUnits();

                // Display the detail page
                reply.view('all-sectors/report/detail', { route: route.route, release: release, methods: methods, units: units });
            } else {

                // Set the task detail elements
                const { unitId, methodId, value } = request.payload;
                const currentRelease = tasks.releases[tasks.currentDetail];

                // Set up the release object
                currentRelease.unitId = Number.isNaN(Number.parseInt(unitId)) ? null : Number.parseInt(unitId);
                currentRelease.methodId = Number.isNaN(Number.parseInt(methodId)) ? null : Number.parseInt(methodId);
                currentRelease.value = value;
                delete currentRelease.errors;

                // Validate the release object
                const validation = await Validator.release(tasks.releases[tasks.currentDetail]);

                if (validation) {
                    // Update the cache with the validation objects and redirect back to the releases page
                    currentRelease.errors = validation;
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect(route.uri + '/detail');
                } else {
                    // Write the (removed) validations to the cache
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect(route.uri);
                }

            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }

};

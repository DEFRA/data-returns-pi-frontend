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
    detail: async (request, reply, task) => {
        try {
            const tasks = await request.server.app.userCache.cache('tasks').get(request);

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
                reply.view('all-sectors/report/detail', { task: task, release: release, methods: methods, units: units });
            } else {

                // Set the task detail elements
                const { unitId, methodId } = request.payload;
                const value = request.payload['value-' + tasks.currentDetail];

                tasks.releases[tasks.currentDetail].unitId = Number.parseInt(unitId);
                tasks.releases[tasks.currentDetail].methodId = Number.parseInt(methodId);
                tasks.releases[tasks.currentDetail].value = value;

                if (await Validator.release(tasks.releases[tasks.currentDetail])) {
                    // Write the (removed) validations to the cache
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect(Releases.tasks[task].uri);
                } else {
                    // Update the cache with the validation objects and redirect back to the releases page
                    await request.server.app.userCache.cache('tasks').set(request, tasks);
                    reply.redirect(Releases.tasks[task].uri + '-detail');
                }

            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }

};

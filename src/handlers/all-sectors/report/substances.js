'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Releases = require('./releases');

/**
 * Route handlers for adding substances to a release
 */
module.exports = {

    /**
     * Add (multiple) substances
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    add: async (request, reply) => {
        try {
            if (request.method === 'get') {
                const stageStatus = await request.server.app.userCache.cache('permit-status').get(request);

                if (!stageStatus) {
                    throw new Error('Cache error: no permit-status initialized');
                }

                // Get a list of all of the substances from the master data service
                const substances = await MasterDataService.getSubstances();
                reply.view('all-sectors/report/add-substance', { route: stageStatus.currentTask, substances: substances });
            } else {
                // Get the tasks object
                const tasks = await request.server.app.userCache.cache('tasks').get(request);

                if (!tasks) {
                    throw new Error('Cache error: no task cache initialized');
                }

                const substances = await Promise.all(Object.keys(request.payload).map(async id =>
                    MasterDataService.getSubstanceById(Number.parseInt(id))
                ));

                // Add the selected substances to the task
                substances.forEach((substance) => {
                    // Check substance exists
                    if (!substance) {
                        throw new Error('Unknown substance requested from page');
                    }

                    // Add the substance to the task provided it does not already exist
                    if (!tasks.releases[substance.id]) {
                        tasks.releases[substance.id] = { value: null, unitId: null, methodId: 1 };
                    }
                });

                // Write the task object back to the cache
                await request.server.app.userCache.cache('tasks').set(request, tasks);

                // Redirect back to the current submission page
                const stageStatus = await request.server.app.userCache.cache('permit-status').get(request);
                reply.redirect(Releases.routes[stageStatus.currentTask].uri);
            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

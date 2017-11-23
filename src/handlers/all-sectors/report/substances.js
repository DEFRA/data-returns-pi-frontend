'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Releases = require('./releases');

const NEW_RELEASE_OBJECT = { value: null, unitId: null, methodId: null };

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
            // Get the tasks object
            const tasks = await request.server.app.userCache.cache('tasks').get(request);

            if (request.method === 'get') {
                const stageStatus = await request.server.app.userCache.cache('permit-status').get(request);

                if (!stageStatus) {
                    throw new Error('Cache error: no permit-status initialized');
                }

                // Get a list of all of the substances from the master data service
                const substances = await MasterDataService.getSubstances();

                // Remove any substances already reported
                const substanceIds = Object.keys(tasks.releases).map(k => Number.parseInt(k));

                const filtered = substances.filter(s => !substanceIds.find(i => s.id === i));

                reply.view('all-sectors/report/add-substance', { route: stageStatus.currentTask, substances: filtered });
            } else {

                if (!tasks) {
                    throw new Error('Cache error: no task cache initialized');
                }

                const substance = await MasterDataService.getSubstanceById(Number.parseInt(request.payload['substanceId']));

                // Add the selected substances to the task if it exists
                if (!substance) {
                    throw new Error('Unknown substance requested from page');
                }

                // Add the substance to the task provided it does not already exist
                if (!tasks.releases[substance.id]) {
                    tasks.releases[substance.id] = NEW_RELEASE_OBJECT;
                }

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

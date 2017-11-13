'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Helper = require('./helper');

/**
 * Route handlers for adding substances to a release
 */
module.exports = {

    /**
     * Add substances
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    add: async (request, reply) => {
        try {
            if (request.method === 'get') {
                // Get a list of all of the substances from the master data service
                const substances = await MasterDataService.getSubstances();
                reply.view('all-sectors/report/add-substance', {substances: substances});
            } else {
                // Add the selected substance
                const substanceId = parseInt(Object.keys(request.payload)[0]);
                const substance = await MasterDataService.getSubstanceById(substanceId);
                if (!substance || Number.isNaN(substanceId)) {
                    throw new Error(`Unknown substance identifier: ${substanceId}`);
                }

                const tasks = await request.server.app.userCache.cache('tasks').get(request);
                if (!tasks) {
                    throw new Error('Cache error: no task cache initialized');
                }

                tasks.substances[substanceId] = { value: null, units: null };
                await request.server.app.userCache.cache('tasks').set(request, tasks);

                // Redirect back to the current submission page
                const stageStatus = await request.server.app.userCache.cache('permit-status').get(request);
                reply.redirect(Helper.tasks[stageStatus.currentTask].uri);
            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

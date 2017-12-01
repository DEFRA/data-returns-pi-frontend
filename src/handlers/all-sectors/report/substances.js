'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Releases = require('./releases');
const CacheKeyError = require('../../../lib/user-cache-policies').CacheKeyError;
const TaskListService = require('../../../service/task-list');
const AllSectorsTaskList = require('../../../model/all-sectors/task-list');

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
            // Get cache objects
            const tasks = await request.server.app.userCache.cache('tasks').get(request);
            const permitStatus = await request.server.app.userCache.cache('permit-status').get(request);
            const route = TaskListService.mapByName(AllSectorsTaskList).get(permitStatus.currentTask);

            // If permit status is not set go back to the start page
            if (!tasks || !permitStatus || !permitStatus.currentTask || !route) {
                throw new CacheKeyError('invalid cache state');
            }

            if (request.method === 'get') {

                // Get a list of all of the substances from the master data service
                const substances = await MasterDataService.getSubstances();

                // Remove any substances already reported
                const substanceIds = Object.keys(tasks.releases).map(k => Number.parseInt(k));

                const filtered = substances.filter(s => !substanceIds.find(i => s.id === i));

                reply.view('all-sectors/report/add-substance', { route: permitStatus.currentTask, substances: filtered });
            } else {
                const substance = await MasterDataService.getSubstanceById(Number.parseInt(request.payload['substanceId']));

                // Add the selected substances to the task if it exists
                if (!substance) {
                    throw new Error('Unknown substance requested from page');
                }

                // Add the substance to the task provided it does not already exist
                if (!tasks.releases[substance.id]) {
                    tasks.releases[substance.id] = NEW_RELEASE_OBJECT;
                }

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

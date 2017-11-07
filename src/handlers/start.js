'use strict';

const logger = require('../lib/logging').logger;
const MasterDataService = require('../service/master-data');
const SessionHelper = require('./session-helper');
const TaskList = require('../model/all-sectors/task-list');
const TaskListService = require('../service/task-list');

/**
 * The handler for the start page
 * @type {{start: (function(internals.Request, Function))}}
 *
 */
module.exports = {
    /**
     * Start page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    start: async (request, reply) => {
        try {
            const session = await SessionHelper.get(request, request.server.app.sid);

            // Get the permits for the user
            const eaIds = await MasterDataService.getEaIdsForUser(session.user.id);

            // Get the permits grouped by site
            const sites = await MasterDataService.getSitesForEaIdIds(eaIds.map(e => e.id));

            // Return the start page
            reply.view('start', { user: session.user, sites: sites });

        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    },

    /**
     * select handler
     * Selects the appropriate use journey for a given permit and if necessary creates
     * the submission object within the cache
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    select: async (request, reply) => {
        try {
            const session = await SessionHelper.get(request, request.server.app.sid);

            // Get the permits for the user
            const eaIds = await MasterDataService.getEaIdsForUser(session.user.id);

            // Validate ownership of the EaId
            const eaIdName = request.payload.eaId;

            const eaId = eaIds.find((e) => { return e.name === eaIdName; });

            if (!eaId) {
                throw new Error(`The eaId ${eaId} is not visible to user ${session.user.username}`);
            }

            // Set the current permit in the submission cache
            await request.server.app.userCache.cache('submission-status')
                .set(request, eaId);

            /*
             * The permit status is object with containing the statuses and other meta-data
             * for each stage within the user journey for a given (current) permit
             */
            let stageStatus = await request.server.app.userCache.cache('permit-status').get(request);

            if (!stageStatus) {
                const names = TaskListService.names(TaskList);
                stageStatus = {};
                names.forEach(n => { stageStatus[n] = { status: 'REQUIRED' }; });

                // Set the new stage status in the status cache
                await request.server.app.userCache.cache('permit-status')
                    .set(request, stageStatus);
            }

            reply.redirect('/all-sectors');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

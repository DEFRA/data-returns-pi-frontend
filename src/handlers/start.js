'use strict';

const logger = require('../lib/logging').logger;
const MasterDataService = require('../service/master-data');
const SessionHelper = require('./session-helper');
const cacheNames = require('../lib/user-cache-policies').names;

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
                // If attempt to access incorrect EaId then log out
                logger.info(`The selected eaId is not visible to user ${session.user.username}`);
                reply.redirect('/logout');

            } else {

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                /*
                 * The permit status is object with containing the statuses and other meta-data
                 * for each stage within the user journey for a given (current) permit
                 */
                let permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
                    // Initialize a permit status if not exists
                    permitStatus = {};
                } else {
                    // Always unset the current task
                    delete permitStatus.currentTask;
                }

                // Save the permit status cache
                await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);

                reply.redirect('/task-list');

            }
        } catch (err) {
            logger.log('error', err.message);
            reply.redirect('/logout');
        }
    }
};

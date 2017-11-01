'use strict';

const logger = require('../lib/logging').logger;
const userService = require('../service/user-service');
const SessionHelper = require('./session-helper');

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
            const eaIds = userService.getEaIdsForUser(session.user.id);

            // Get the permits grouped by site
            const sites = userService.getSitesForPermits(eaIds.map(e => e.id));

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
            const eaIds = userService.getEaIdsForUser(session.user.id);

            // Validate ownership of the EaId
            const eaIdName = request.payload.eaId;

            const eaId = eaIds.find((e) => { return e.name === eaIdName; });

            if (!eaId) {
                throw new Error(`The eaId ${eaId} is not visible to user ${session.user.username}`);
            }

            await request.server.app.userCache.cache('status')
                .set(request, 'eaIdId', eaId);

            reply.redirect('/all-sectors');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

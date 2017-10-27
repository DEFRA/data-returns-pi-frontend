'use strict';

const logging = require('../lib/logging');
const userService = require('../service/user-service');

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
    start: (request, reply) => {
        request.server.app.cache.get(request.server.app.sid, (err, session) => {

            if (err) {
                logging.logger.log('error', err);
                reply.redirect('/logout');
            }

            // Get the permits for the user
            const eaIds = userService.getEaIdsForUser(session.user.id);

            // Get the permits grouped by site
            const sites = userService.getSitesForPermits(eaIds.map(e => e.id));

            // Return the start page
            reply.view('start', { user: session.user, sites: sites });
        });
    },

    /**
     * select handler
     * Selects the appropriate use journey for a given permit and if necessary creates
     * the submission object within the cache
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    select: (request, reply) => {
        request.server.app.cache.get(request.server.app.sid, (err, session) => {

            if (err) {
                logging.logger.log('error', err);
                reply.redirect('/logout');
            }

            console.log('SESSION;' + JSON.stringify(session));

            // Return the start page
            reply.redirect('/all-sectors');
        });
    }
};

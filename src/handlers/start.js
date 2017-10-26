'use strict';

const logging = require('../lib/logging');

/**
 * The handler for the start page
 * @type {{start: (function(internals.Request, Function))}}
 */

module.exports = {
    /**
     * Landing page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    start: (request, reply) => {

        // TODO The async version of get appears to be broken - it returns undefined. Investigate this further
        request.server.app.cache.get(request.server.app.sid, (err, cached) => {

            if (err) {
                logging.logger.log('error', err);
                reply.redirect('/logout');
            }

            reply.view('start', { message: cached.user.username });

        });

        // try {
        //
        //     // Get the user details from the cache
        //     const sessionData = await request.server.app.cache.get(request.server.app.sid);       //
        //     reply.view('start', { message: request.server.app.sid });
        //
        // } catch (err) {
        //     reply(err);
        //     /*
        //      *logging.logger.log('error', err);
        //      * reply.redirect('/logout');
        //      */
        // }
    }
};

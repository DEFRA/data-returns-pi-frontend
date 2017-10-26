'use strict';

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

        // Get the user details from the cache
        const sid = request.server.app.sid;

      reply.view('start', { message: sid });

        // request.server.methods.sessionData(sid, request.auth.credentials.name, (err, result) => {
        //
        //     if (err) {
        //         return reply(err);
        //     }
        //
        //     reply.view('start', { message: result });
        // });

    }
};

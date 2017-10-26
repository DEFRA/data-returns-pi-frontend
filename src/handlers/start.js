'use strict';

module.exports = {
    /**
     * Landing page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    start: (request, reply) => {

        const sid = request.server.app.sid;

        request.server.methods.sessionData(sid, request.auth.credentials.name, (err, result) => {

            if (err) {
                return reply(err);
            }

            reply.view('start', { message: result });
        });

    }
};

'use strict';

/**
 * This module is concerned with authorizations
 * @type {{validate: module.exports.validate}}
 */
module.exports = {
   /**
   * validation function called on every request
   * @param request
   * @param session
   * @param callback
   */
    validate: (request, session, callback) => {
        const server = request.server;
        server.app.cache.get(session.sid, (err, cached) => {

            if (err) {
                return callback(err, false);
            }

            if (!cached) {
                return callback(null, false);
            }

            // If we are validated add the sid to the request object
            server.app.sid = session.sid;

            // Return a validated callback function
            return callback(null, true, cached.account);
        });

    }
};

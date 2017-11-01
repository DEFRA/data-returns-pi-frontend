'set strict';

/**
 * Helper functions for authorization cache in route handlers
 *
 * Note that the current version of Hapi (16.6.2) includes Version: 7.x of catbox which
 * does not yet include the asynchronous methods
 */
module.exports = {

    /**
     * Promisify the method to get session information
     * @param request
     * @returns {Promise}
     */
    get: (request, key) => {
        return new Promise((resolve, reject) => {
            request.server.app.cache.get(key, (err, cached) => {
                if (err) {
                    reject(err);
                }
                resolve(cached);
            });
        });
    },

    /**
     * Promisfy the method to set session information
     */
    set: (request, key, session) => {
        return new Promise((resolve, reject) => {
            request.server.app.cache.set(key, session, 0, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    },

    /**
     * Promisfy the method to drop session information
     */
    drop: (request, key) => {
        return new Promise((resolve, reject) => {
            request.server.app.cache.drop(key, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }

};

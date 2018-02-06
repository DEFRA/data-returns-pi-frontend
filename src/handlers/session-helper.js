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
    get: async (request, key) => {
        return request.server.app.cache.get(key);
    },

    /**
     * Promisfy the method to set session information
     */
    set: async (request, key, session) => {
        await request.server.app.cache.set(key, session, 0);
    },

    /**
     * Promisfy the method to drop session information
     */
    drop: async (request, key) => {
        await request.server.app.cache.drop(key);
    }

};

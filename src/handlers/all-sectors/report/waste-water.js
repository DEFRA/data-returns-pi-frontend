'use strict';

/**
 * Route handlers for reporting off-site releases in waste water
 */
const Releases = require('./releases');

// This maps to the task name in the task-list object
const TASK = 'OFFSITE_TRANSFERS_IN_WASTE_WATER';

module.exports = {
    /**
     * Report releases offsite in waste water - confirmation page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    confirm: async (request, reply) => {
        await Releases.processConfirmations(request, reply, TASK);
    },

    /**
     * Releases in off site waste water
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    releases: async (request, reply) => {
        await Releases.releases(request, reply, TASK);
    },

    /**
     * Handle the the release page validation and persist the data
     * in the cache
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    validate: async (request, reply) => {
        await Releases.validate(request, reply, TASK);
    },

    detail: async (request, reply) => {
        await Releases.detail(request, reply, TASK);
    }
};

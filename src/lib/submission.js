'use strict';

/*
 * This module contains functions for the final submission stage to the API.
 * It converts the contents of the redis cache and produces the final message
 */
const logger = require('./logging').logger;

const internals = {
    /**
     * Reads the redis cache objects and generates the JSON payload for the submission message
     * @param request
     * @return {Promise.<void>}
     */
    createSubmissionMessage: async (request) => {
        console.log('request');
    }
};

module.exports = {

    // Expose the prepare stage for unit testing
    createSubmissionMessage: internals.createSubmissionMessage,

    /**
     * Prepare the final submission JSON message and submit to the submissions API
     * @param request
     * @return {Promise.<void>}
     */
    submit: async (request) => {

    }
};

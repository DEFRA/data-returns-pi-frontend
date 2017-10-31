'use strict';

/*
 * Expose catbox functions for the user-cache. The user cache is used for the temporary
 * storage of partial submission data.
 *
 * Note that the current version of Hapi (16.6.2) includes Version: 7.x of catbox which
 * does not yet include the asynchronous methods despite the documentation so
 * promises are returned
 */
const Catbox = require('catbox');

const internals = {};

// Name of the user cache
internals.partition_name = 'user-cache-partition';
internals.policies = {};

/**
 * A function to initialize a catbox cache with a number of policies
 * @param provider - The cache provider (redis/s3)
 * @param policies - a {string} defining the policy name
 * @return {Promise} - a promise fulfilled when the cache is connected
 */
internals.startCache = function (provider, policies) {
    return new Promise((resolve, reject) => {

        // Specify a segment of the redis cache
        const options = {
            partition: internals.partition_name,
            host: process.env.HOSTNAME,
            port: process.env.PORT
        };

        // Expire in 90 days
        const config = {
            expiresIn: 1000 * 60 * 60 * 24 * 90
        };

        if (internals.client) {
            reject(new Error('The user cache provider is already initialized'));
        }

        internals.client = new Catbox.Client(provider, options);

        // Create a cache policy for each section
        if (!Array.isArray(policies)) {
            reject(new Error('Please provide an array of the cache policies'));
        }

        for (const policy of policies) {
            internals.policies[policy] = new Catbox.Policy(config, internals.client, policy);
        }

        internals.client.start((err) => {

            if (err) {
                reject(err);
            }

            resolve();
        });
    });
};

/**
 * Promisify the method to get session information
 * @param request
 * @returns {Promise}
 */
const getter = (policy, key) => {
    return new Promise((resolve, reject) => {
        policy.get(key, (err, cached) => {
            if (err) {
                reject(err);
            }
            resolve(cached);
        });
    });
};

/**
 * Promisfy the method to set session information
 */
const setter = (policy, key, value) => {
    return new Promise((resolve, reject) => {
        policy.set(key, value, 0, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};

/**
 * Promisfy the method to drop session information
 */
const dropper = (policy, key) => {
    return new Promise((resolve, reject) => {
        policy.drop(key, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};

module.exports = {
    /**
     * Start the user cache engin
     */
    start: internals.startCache,

    /**
     * Stop the user cache engine
     */
    stop: () => { internals.client.stop(); },

    /**
     * Return a given cache policy object which contains the getter and setter methods
     * to act on that policy segment
     * @param policy
     * @return {{get: (function(*=): Promise), set: (function(*=, *=)), drop: (function(*=))}}
     */
    cache: (policyKey) => {

        // Test that the policy key is set up
        if (!internals.policies[policyKey]) {
            throw new Error(`Policy: ${policyKey} is not defined`);
        }

        if (!internals.client.isReady()) {
            throw new Error('Cache is not ready');
        }

        return {
            get: (key) => getter(internals.policies[policyKey], key),
            set: (key, value) => setter(internals.policies[policyKey], key, value),
            drop: (key) => dropper(internals.policies[policyKey], key)
        };
    }
};

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
const logger = require('./logging').logger;

const internals = {};

// Name of the user cache
internals.partition_name = 'user-cache';
internals.policies = {};

/**
 * A function to initialize a catbox cache with a number of policies
 * @param provider - The cache provider (redis/s3)
 * @param policies - an object like { name, keyFunc } defining the policy name and a function
 * to generate a key prefix.
 * @return {Promise} - a promise fulfilled when the cache is connected
 */
internals.startCache = async (provider, policies) => {

    try {

        logger.info('Starting user-cache instance');

        // Specify a segment of the redis cache
        const options = {
            partition: internals.partition_name,
            host: process.env.REDIS_HOSTNAME,
            port: process.env.REDIS_PORT
        };

        // Expire user cache objects in days
        const config = {
            expiresIn: 1000 * 60 * 60 * 24 * 270
        };

        if (internals.client && internals.client.isReady()) {
            throw new Error('The user cache provider is already initialized');
        }

        internals.client = new Catbox.Client(provider, options);

        // Create a cache policy for each section
        if (!Array.isArray(policies)) {
            throw new Error('Please provide an array of the cache policy objects');
        }

        for (const policy of policies) {
            logger.info('Creating policy: ' + policy.name);
            internals.policies[policy.name] = {};
            internals.policies[policy.name].policy = new Catbox.Policy(config, internals.client, policy.name);
            internals.policies[policy.name].keyFunc = policy.keyFunc;
        }

        await internals.client.start();
        logger.info('Started user-cache instance');

    } catch (err) {
        throw new Error('Failed to connect to user-cache instance' + err);
    }
};

/**
 * Promisify the method to get session information
 * @param request
 * @returns {Promise}
 */
const getter = async (policy, key) => {
    return policy.get(key);
};

/**
 * Promisfy the method to set session information
 */
const setter = async (policy, key, value) => {
    value._last_modified = new Date();
    await policy.set(key, value, 0);
};

/**
 * Promisfy the method to drop session information
 */
const dropper = async (policy, key) => {
    await policy.drop(key);
};

module.exports = {
    /**
     * Start the user cache engin
     */
    start: async (provider, policies) => {
        return internals.startCache(provider, policies);
    },

    /**
     * Stop the user cache engine
     */
    stop: async () => {
        internals.policies = {};
        await internals.client.stop();
        logger.info('Stopped user-cache instance');
    },

    isReady: () => { return internals.client.isReady(); },

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
            // Returns a promise to retrieve the value in the policy for key
            get: async (request) => {
                const key = await internals.policies[policyKey].keyFunc(request);
                return getter(internals.policies[policyKey].policy, key);
            },

            // Returns a promise to set the value in the policy for key
            set: async (request, value) => {
                const key = await internals.policies[policyKey].keyFunc(request);
                return setter(internals.policies[policyKey].policy, key, value);
            },

            // Returns a promise to remove the value in the policy for key
            drop: async (request) => {
                const key = await internals.policies[policyKey].keyFunc(request);
                return dropper(internals.policies[policyKey].policy, key);
            }
        };
    }
};

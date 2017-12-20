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
internals.startCache = function (provider, policies) {
    return new Promise((resolve, reject) => {

        // Specify a segment of the redis cache
        const options = {
            partition: internals.partition_name,
            host: process.env.REDIS_HOSTNAME,
            port: process.env.REDIS_PORT
        };

        // Expire in 90 days
        const config = {
            expiresIn: 1000 * 60 * 60 * 24 * 90
        };

        if (internals.client) {
            throw new Error('The user cache provider is already initialized');
        }

        internals.client = new Catbox.Client(provider, options);

        // Create a cache policy for each section
        if (!Array.isArray(policies)) {
            throw new Error('Please provide an array of the cache policy objects');
        }

        for (const policy of policies) {
            internals.policies[policy.name] = {};
            internals.policies[policy.name].policy = new Catbox.Policy(config, internals.client, policy.name);
            internals.policies[policy.name].keyFunc = policy.keyFunc;
        }

        internals.client.start((err) => {

            if (err) {
                reject('Failed to connect to user-cache instance' + err);
            }

            logger.info('Started user-cache instance');
            resolve();

        });
    });
};

/**
 * Promisify the method to get session information
 * @param request
 * @returns {Promise}
 */
const getter = async (policy, key) => {
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
const setter = async (policy, key, value) => {
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
const dropper = async (policy, key) => {
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
    start: async (provider, policies) => { return internals.startCache(provider, policies); },

    /**
     * Stop the user cache engine
     */
    stop: () => {
        internals.policies = {};
        internals.client.stop();
        delete internals.client;
        logger.info('Stopped user-cache instance');
    },

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

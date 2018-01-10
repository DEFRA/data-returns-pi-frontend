'use strict';

/**
 * This module services requests against the api.
 */
const _ = require('lodash');
const client = require('../lib/api-client');
const Logging = require('../lib/logging');

const internals = {};

module.exports = {
    /**
     * Return all the permits
     * @return {*} - The list of permits
     */
    getEaIds: async () => {
        let entity = internals._entities.eaId;
        if (!entity.arr.length) {
            await internals.entityFetch(entity);
        }
        return entity.arr;
    }
};

/*
 * Specifics for each entity - the api endpoint details and the result mapper
 */
internals._entities = {
    eaId: {
        name: 'uniqueIdentifiers',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'uniqueIdentifierGroups/1/uniqueIdentifiers',
            method: 'GET'
        },
        resultMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        }
    }
};

/**
 * Fetch entity data from the api and populate a map and an array
 * @param entity
 * @return {Promise.<void>}
 */
internals.entityFetch = async (entity) => {
    try {
        const result = await client.request(entity.request.api, entity.request.method, entity.request.uri);

        // Set array
        entity.arr = result._embedded[entity.name].map(entity.resultMapper);

        // Set map
        entity.arr.forEach((i) => {
            entity.map.set(i.id, i);
        });

    } catch (err) {
        Logging.logger.error(err);
        throw err;
    }
};

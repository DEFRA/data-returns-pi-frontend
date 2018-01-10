'use strict';

/**
 * This module services requests against the api.
 */
const _ = require('lodash');
const client = require('../lib/api-client');
const Logging = require('../lib/logging');

let internals = {};

module.exports = internals = {
    /**
     * Return all the permits
     * @return {*} - The list of permits
     */
    getEaIds: async () => {
        return internals.listEntity(internals._entities.eaId);
    },

    /**
     * Return the permits for a given user Id
     * @param id - The permit identifier
     * @return {*} - The list of permits
     *
     * TODO There is no way to currently do this so for now we just get all the permits
     */
    getEaIdsForUser: async (id) => {
        return internals.listEntity(internals._entities.eaId);
    },

    /**
     * Get permit form permit Id (The database key)
     * @param eaIdId - the permit id
     */
    getEaIdFromEaIdId: async (eaIdId) => {
        return internals.getEntityById(internals._entities.eaId, eaIdId);
    },

    /**
     * Return an array of all the substances
     * @returns {Promise.<Array>}
     */
    getUnits: async () => {
        return internals.listEntity(internals._entities.units);
    },

    /**
     * Return a substance object from its id
     * @param id
     * @returns {Promise.<*>}
     */
    getUnitById: async (id) => {
        return internals.getEntityById(internals._entities.units, id);
    }

};

/**
 * List wrapper for a given entity
 * @param entity
 * @return {Promise.<*>}
 */
internals.listEntity = async (entity) => {
    if (!entity.arr.length) {
        await internals.entityFetch(entity);
    }
    return entity.arr;
};

/**
 * Get by Id wrapper for a given entity
 * @param entity
 * @return {Promise.<*>}
 */
internals.getEntityById = async (entity, id) => {
    if (!entity.arr.length) {
        await internals.entityFetch(entity);
    }
    return entity.map.get(id);
};

/*
 * Specifics for each entity - the api endpoint details and the result mapper
 */
internals._entities = {
    // Permits (Unique identifiers)
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
    },

    // Units
    units: {
        name: 'units',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'units',
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

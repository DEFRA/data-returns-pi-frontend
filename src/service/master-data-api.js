'use strict';

/**
 * This module services requests against the api.
 */
const _ = require('lodash');
const client = require('../lib/api-client');
const Logging = require('../lib/logging');
const Data = require('../../data/master-data');

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

    /**
     * Return an array of all the substances
     * @returns {Promise.<Array>}
     */
    getSubstances: async (route) => {
        switch (route) {
            case 'RELEASES_TO_AIR':
                return internals.listEntity(internals._entities.substancesAir);
            case 'RELEASES_TO_LAND':
                return internals.listEntity(internals._entities.substancesLand);
            case 'RELEASES_TO_CONTROLLED_WATERS':
                return internals.listEntity(internals._entities.substancesWater);
            case 'OFFSITE_TRANSFERS_IN_WASTE_WATER':
                return internals.listEntity(internals._entities.substancesWasteWater);
            default:
                return internals.listEntity(internals._entities.substances);
        }
    },

    /**
     * Return a substance object from its id
     * @param id
     * @returns {Promise.<*>}
     */
    getSubstanceById: async (id) => {
        return internals.getEntityById(internals._entities.substances, id);
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
    },

    /**
     * Return a list of the value methods
     */
    getMethods: async () => {
        return Data.methods;
    },

    /**
     * Return a specific method by Id
     * @param id
     */
    getMethodById: async (id) => {
        return Data.methods.find(m => m.id === id);
    },

    /**
     * Get the set of transfer operations (used by overseas transfers)
     * @returns {Promise.<Array>}
     */
    getTransferOperations: async () => {
        return Data.transferOperations;
    },

    getTransferOperationById: async (id) => {
        return Data.transferOperations.find(o => o.id === id);
    },

    /**
     * Get the EWC Activity code
     * @param id
     * @return {Promise.<V>}
     */
    getEwcActivityById: async (id) => {
        return internals.getEntityById(internals._entities.ewcActivities, id);
    },

    /**
     * Get the EWC Chapter code
     * @param id
     * @return {Promise.<V>}
     */
    getEwcChapterById: async (id) => {
        return internals.getEntityById(internals._entities.ewcChapters, id);
    },

    /**
     * Get the EWC Sub chapter code
     * @param id
     * @return {Promise.<V>}
     */
    getEwcSubChapterById: async (id) => {
        return internals.getEntityById(internals._entities.ewcSubchapters, id);
    },

    /**
     * Get a an object containing the id's of the activity, chapter and sub-chapter
     * from the three codes
     * @param activity
     * @param chapter
     * @param subChapter
     * @return {Promise.<*>}
     */
    getEwc: async (activity, chapter, subChapter) => {
        const ewcActivity = await internals.getEntityByNamedMapper(internals._entities.ewcActivities, 'byName', `${chapter} ${subChapter} ${activity}`);
        const ewcSubchapter = await internals.getEntityByNamedMapper(internals._entities.ewcSubchapters, 'byName', `${chapter} ${subChapter}`);
        const ewcChapter = await internals.getEntityByNamedMapper(internals._entities.ewcChapters, 'byCode', chapter);
        const result = {};

        if (ewcActivity && ewcChapter && ewcSubchapter) {
            const _subChapter = await internals.getEwcSubChapterById(ewcActivity.ewc_subchapter);

            if (_subChapter && _subChapter.id === ewcSubchapter.id) {

                const _chapter = await internals.getEwcChapterById(_subChapter.ewc_chapter);
                if (_chapter && _chapter.id === ewcChapter.id) {

                    result.activityId = ewcActivity.id;
                    result.chapterId = ewcChapter.id;
                    result.subChapterId = ewcSubchapter.id;

                    return result;

                }
            }
        }

        return null;
    },

    /**
     * Get the disposal code by the code
     * @param code
     * @return {Promise.<*|null>}
     */
    getDisposalCode: async (code) => {
        return internals.getEntityByNamedMapper(internals._entities.disposalCodes, 'byCode', code);
    },

    /**
     * Get the recovery code by the code
     * @param code
     * @return {Promise.<*|null>}
     */
    getRecoveryCode: async (code) => {
        return internals.getEntityByNamedMapper(internals._entities.recoveryCodes, 'byCode', code);
    },

    /**
     * Get the disposal code by its id
     * @param id
     * @return {Promise.<*>}
     */
    getDisposalById: async (id) => {
        return internals.getEntityById(internals._entities.disposalCodes, id);
    },

    /**
     * Get the recovery code by its id
     * @param id
     * @return {Promise.<*>}
     */
    getRecoveryById: async (id) => {
        return internals.getEntityById(internals._entities.recoveryCodes, id);
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

/**
 * Fetch entity by single value key using named mapper
 * @param entity
 * @param mapper
 * @param key
 * @return {Promise.<void>}
 */
internals.getEntityByNamedMapper = async (entity, mapper, key) => {
    try {
        if (!entity.arr.length) {
            await internals.entityFetch(entity);
        }
        return entity[mapper].get(key);
    } catch (err) {
        Logging.logger.error(err);
        throw err;
    }
};

/**
 * Default ordering function for the arrays uses id
 * @param a
 * @param b
 * @return {number}
 */
internals.sortById = (a, b) => {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0;
};

/**
 * Fetch entity data from the api and populate a map and an array
 * @param entity
 * @return {Promise.<void>}
 */
internals.entityFetch = async (entity) => {
    try {
        const result = await client.request(entity.request.api,
            entity.request.method, entity.request.uri, entity.request.query);

        // Set array
        entity.arr = result._embedded[entity.name].map(entity.idMapper).sort(entity.sorter || internals.sortById);

        // Set map
        entity.arr.forEach((i) => {
            entity.map.set(i.id, i);
        });

        // Set any additional named maps
        if (entity.namedMappers) {
            entity.namedMappers.forEach((mapper) => {
                entity[mapper.name] = new Map();
                entity.arr.forEach((i) => {
                    entity[mapper.name].set(mapper.keyFunc(i), i);
                });
            });
        }
    } catch (err) {
        Logging.logger.error(err);
        throw err;
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
            query: 'projection=inlineSites',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature,
                site: { id: i.site.id, name: i.site.nomenclature }
            };
        },
        sorter: (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    },

    substances: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'parameters',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    },

    substancesAir: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'parameterGroups/3/parameters',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    },

    substancesLand: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'parameterGroups/4/parameters',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    },

    substancesWater: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'parameterGroups/5/parameters',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    },

    substancesWasteWater: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'parameterGroups/2/parameters',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    },

    units: {
        name: 'units',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'units',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    },

    ewcActivities: {
        name: 'ewcActivities',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'ewcActivities',
            query: 'projection=includeSubchapterId',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                ewc_subchapter: i.ewc_subchapter,
                name: i.nomenclature,
                code: i.code,
                description: i.description,
                hazardous: i.hazardous
            };
        },
        namedMappers: [
            { name: 'byName', keyFunc: (i) => i.name }
        ],
        sorter: (a, b) => {
            if (a.code < b.code) {
                return -1;
            }
            if (a.code > b.code) {
                return 1;
            }
            return 0;
        }
    },

    ewcSubchapters: {
        name: 'ewcSubchapters',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'ewcSubchapters',
            query: 'projection=includeChapterId',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                ewc_chapter: i.ewc_chapter,
                name: i.nomenclature,
                code: i.code,
                description: i.description
            };
        },
        namedMappers: [
            { name: 'byName', keyFunc: (i) => i.name }
        ],
        sorter: (a, b) => {
            if (a.code < b.code) {
                return -1;
            }
            if (a.code > b.code) {
                return 1;
            }
            return 0;
        }
    },

    ewcChapters: {
        name: 'ewcChapters',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'ewcChapters',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature,
                code: i.code,
                description: i.description
            };
        },
        namedMappers: [
            { name: 'byCode', keyFunc: (i) => i.code }
        ],
        sorter: (a, b) => {
            if (a.code < b.code) {
                return -1;
            }
            if (a.code > b.code) {
                return 1;
            }
            return 0;
        }
    },

    disposalCodes: {
        name: 'disposalCodes',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'disposalCodes',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                code: i.nomenclature,
                description: i.description
            };
        },
        namedMappers: [
            { name: 'byCode', keyFunc: (i) => i.code }
        ],
        sorter: (a, b) => {
            if (a.code < b.code) {
                return -1;
            }
            if (a.code > b.code) {
                return 1;
            }
            return 0;
        }
    },

    recoveryCodes: {
        name: 'recoveryCodes',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'recoveryCodes',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                code: i.nomenclature,
                description: i.description
            };
        },
        namedMappers: [
            { name: 'byCode', keyFunc: (i) => i.code }
        ],
        sorter: (a, b) => {
            if (a.code < b.code) {
                return -1;
            }
            if (a.code > b.code) {
                return 1;
            }
            return 0;
        }
    }

};

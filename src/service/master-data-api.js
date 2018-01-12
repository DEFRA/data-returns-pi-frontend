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
    getSites: async () => {
        return internals.listEntity(internals._entities.sites);
    },

    /**
     * Return a substance object from its id
     * @param id
     * @returns {Promise.<*>}
     */
    getSiteById: async (id) => {
        return internals.getEntityById(internals._entities.sites, id);
    },

    /**
     * Get the site information for a given permit
     * @param eaIdId - the permit id
     */
    getSiteForEaIdId: async (eaIdId) => {
        try {
            const eaId = await internals.getEaIdFromEaIdId(eaIdId);
            return internals.getSiteById(eaId.siteId);
        } catch (err) {
            return null;
        }
    },

    /*
     * Get the distinct set of sites for a set of permits
     * @param eaIds - an array containing the site objects enriched with an array of the
     * corresponding permits
     */
    getSitesForEaIdIds: async (eaIdIds) => {

        // Get the permits
        const eaIdsP = eaIdIds.map((id) => {
            return internals.getEaIdFromEaIdId(id);
        });

        return Promise.all(eaIdsP).then((eaIds) => {
            const result = [];

            // Find the unique site Ids
            const sites = eaIds
                .sort((e1, e2) => { return e1.siteId - e2.siteId; })
                .filter(e => e)
                .map(async (e) => {
                    return {
                        site: await internals.getSiteById(e.siteId),
                        eaId: e
                    };
                });

                // For each site gather an array of eaIds
            return Promise.all(sites).then((p) => {

                for (const site of p) {
                    if (result.length && site.site.id === result[result.length - 1].id) {
                        result[result.length - 1].eaIds.push(_.cloneDeep(site.eaId));
                    } else {
                        const newSite = _.cloneDeep(site.site);
                        newSite.eaIds = [_.cloneDeep(site.eaId)];
                        result.push(newSite);
                    }
                }

                return result.length ? result : null;
            });

        }).catch((err) => {
            Logging.logger.error(err);
            return null;
        });
    },

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
    }

    /**
     * Get a an object containing the id's of the activity, chapter and sub-chapter
     * from the three codes
     * @param activity
     * @param chapter
     * @param subChapter
     * @return {Promise.<*>}
     */
    // getEwc: async (activity, chapter, subChapter) => {
    //     /*
    //      * const ewcActivity = await internals.listEntity(internals._entities.ewcActivities);
    //      * const ewcChapters = await internals.listEntity(internals._entities.ewcChapters);
    //      * const ewcSubchapters = await internals.listEntity(internals._entities.ewcSubchapters);
    //      */
    //
    //     const result = {};
    //
    //     if (activity && chapter && subChapter) {
    //         const _subChapter = internals._ewcSubChapter.get(activity + '-' + chapter + '-' + subChapter);
    //
    //         if (_subChapter) {
    //
    //             const _chapter = internals._ewcChapter.get(_subChapter.activity + '-' + _subChapter.chapter);
    //             if (_chapter) {
    //                 const _activity = internals._ewcActivity.get(_chapter.activity);
    //
    //                 if (_activity) {
    //                     result.activityId = _activity.id;
    //                     result.chapterId = _chapter.id;
    //                     result.subChapterId = _subChapter.id;
    //
    //                     return result;
    //                 }
    //             }
    //         }
    //     }
    //
    //     return null;
    // }

    /*
     * getDisposalCode: async (code) => {
     * },
     *
     * getRecoveryCode: async (code) => {
     * },
     *
     * getDisposalById: async (id) => {
     * },
     *
     * getRecoveryById: async (id) => {
     * }
     */

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
 * Fetch entity data from the api and populate a map and an array
 * @param entity
 * @return {Promise.<void>}
 */
internals.entityFetch = async (entity) => {
    try {
        const result = await client.request(entity.request.api,
            entity.request.method, entity.request.uri, entity.request.query);

        // Set array
        entity.arr = result._embedded[entity.name].map(entity.idMapper);

        // Set map
        entity.arr.forEach((i) => {
            entity.map.set(i.id, i);
        });

        // Set any additional maps
        if (entity.additionalMappers) {
            entity.additionalMappers.forEach((mapper) => {
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
                siteId: i.site.id
            };
        }
    },

    sites: {
        name: 'sites',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'sites',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
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
        }
    },

    ewcActivities: {
        name: 'ewcActivities',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'ewcActivities',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature,
                code: i.code,
                description: i.description,
                hazardous: i.hazardous
            };
        },
        additionalMappers: [
            {
                name: 'byCode',
                keyFunc: (i) => {
                    return {
                        code: i.code
                    };
                }
            }
        ]
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
        }
    },

    ewcSubchapters: {
        name: 'ewcSubchapters',
        map: new Map(),
        arr: [],
        request: {
            api: 'MD',
            uri: 'ewcSubchapters',
            method: 'GET'
        },
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature,
                code: i.code,
                description: i.description
            };
        }
    }

};

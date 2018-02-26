'use strict';

/**
 * This module services requests against the api.
 */
const client = require('../lib/api-client');
const Logging = require('../lib/logging');
const Static = require('../../data/static-data');

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
     * Get the disposal code by the code
     * @param code
     * @return {Promise.<*|null>}
     */
    getEaIdFromEaId: async (eaId) => {
        return internals.getEntityByNamedMapper(internals._entities.eaId, 'byEaId', eaId);
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
        return Static.methods;
    },

    /**
     * Return a specific method by Id
     * @param id
     */
    getMethodById: async (id) => {
        return Static.methods.find(m => m.id === id);
    },

    /**
     * Get the set of transfer operations (used by overseas transfers)
     * @returns {Promise.<Array>}
     */
    getTransferOperations: async () => {
        return Static.transferOperations;
    },

    getTransferOperationById: async (id) => {
        return Static.transferOperations.find(o => o.id === id);
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
    getEwc: async (chapter, subChapter, activity) => {
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
    },

    /**
     * Get the first level nose-p codes
     * @return {Promise.<void>}
     */
    getNoseActivityClasses: async () => {
        return internals.listEntity(internals._entities.noseActivityClasses);
    },

    /**
     * Get the a first level nose-p code by its Id
     * @return {Promise.<void>}
     */
    getNoseActivityClassById: async (id) => {
        return internals.getEntityById(internals._entities.noseActivityClasses, id);
    },

    /**
     * Get the second level nose-p codes
     * @return {Promise.<void>}
     */
    getNoseActivities: async () => {
        return internals.listEntity(internals._entities.noseActivities);
    },

    /**
     * Get the a second level nose-p code by its Id
     * @return {Promise.<void>}
     */
    getNoseActivityById: async (id) => {
        return internals.getEntityById(internals._entities.noseActivities, id);
    },

    /**
     * Get the third level nose-p codes
     * @return {Promise.<void>}
     */
    getNoseProcesses: async () => {
        return internals.listEntity(internals._entities.noseProcesses);
    },

    /**
     * Get the a third level nose-p code by its Id
     * @return {Promise.<void>}
     */
    getNoseProcessById: async (id) => {
        return internals.getEntityById(internals._entities.noseProcesses, id);
    },

    /**
     * Get
     * @return {Promise.<*>}
     */
    getNoseHierarchies: async () => {
        return internals.listRelation(internals._relations.noseHierarchy);
    },

    /**
     * Get the first level eprtr codes
     * @return {Promise.<void>}
     */
    getEprtrSectors: async () => {
        return internals.listEntity(internals._entities.eprtrSectors);
    },

    /**
     * Get the a first level eprtr code by its Id
     * @return {Promise.<void>}
     */
    getEprtrSectorById: async (id) => {
        return internals.getEntityById(internals._entities.eprtrSectors, id);
    },

    /**
     * Get the second level eprtr codes
     * @return {Promise.<void>}
     */
    getEprtrActivities: async () => {
        return internals.listEntity(internals._entities.eprtrActivities);
    },

    /**
     * Get the a second level eprtr code by its Id
     * @return {Promise.<void>}
     */
    getEprtrActivityById: async (id) => {
        return internals.getEntityById(internals._entities.eprtrActivities, id);
    },

    /**
     * Get the E-PRTR hierarchy
     * @return {Promise.<*>}
     */
    getEprtrHierarchy: async () => {
        return internals.listRelation(internals._relations.eprtrHierarchy);
    },

    /**
     * Get the first level nace codes
     * @return {Promise.<void>}
     */
    getNaceSections: async () => {
        return internals.listEntity(internals._entities.naceSections);
    },

    /**
     * Get the first level nace code by its Id
     * @return {Promise.<void>}
     */
    getNaceSectionById: async (id) => {
        return internals.getEntityById(internals._entities.naceSections, id);
    },

    /**
     * Get the first level nace codes
     * @return {Promise.<void>}
     */
    getNaceDivisions: async () => {
        return internals.listEntity(internals._entities.naceDivisions);
    },

    /**
     * Get the first level nace code by its Id
     * @return {Promise.<void>}
     */
    getNaceDivisionById: async (id) => {
        return internals.getEntityById(internals._entities.naceDivisions, id);
    },

    /**
     * Get the third level nace codes
     * @return {Promise.<void>}
     */
    getNaceGroups: async () => {
        return internals.listEntity(internals._entities.naceGroups);
    },

    /**
     * Get the first level nace code by its Id
     * @return {Promise.<void>}
     */
    getNaceGroupById: async (id) => {
        return internals.getEntityById(internals._entities.naceGroups, id);
    },

    /**
     * Get the fourth level nace codes
     * @return {Promise.<void>}
     */
    getNaceClasses: async () => {
        return internals.listEntity(internals._entities.naceClasses);
    },

    /**
     * Get the first level nace code by its Id
     * @return {Promise.<void>}
     */
    getNaceClassById: async (id) => {
        return internals.getEntityById(internals._entities.naceClasses, id);
    },

    /**
     * Get the nace code hierarchies
     * @return {Promise.<*>}
     */
    getNaceHierarchy: async () => {
        return internals.listRelation(internals._relations.naceHierarchy);
    },

    getNaceHierarchyByKey: async (sectionId, divisionId, groupId, classId) => {
        return internals.getRelationByKey(internals._relations.naceHierarchy, { sectionId, divisionId, groupId, classId });
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
 * List wrapper for a given relation
 * @param entity
 * @return {Promise.<*>}
 */
internals.listRelation = async (relation) => {
    if (!relation.arr.length) {
        await internals.relationFetch(relation);
    }
    return relation.arr;
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

internals.getRelationByKey = async (relation, key) => {
    if (!relation.arr.length) {
        await internals.relationFetch(relation);
    }
    return relation.map.get(relation.keyMap(key));
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
 * Sort an entity by a given property
 * @param a
 * @param b
 * @param property
 * @return {number}
 */
internals.sortByProperty = (a, b, property) => {
    if (a[property] < b[property]) {
        return -1;
    }
    if (a[property] > b[property]) {
        return 1;
    }
    return 0;
};

/**
 * Maps id and nomenclature
 */
internals.defaultMapper = (i) => {
    return {
        id: i.id,
        name: i.nomenclature
    };
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

/**
 * Relations are different from entities - there is no single id
 * @param relation
 * @return {Promise.<void>}
 */
internals.relationFetch = async (relation) => {
    try {
        const result = await client.request(relation.request.api,
            relation.request.method, relation.request.uri, relation.request.query);

        relation.arr = relation.processor(result._embedded[relation.name]);

        relation.arr.forEach((r) => {
            relation.map.set(relation.keyMap(r), r);
        });

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
        request: {api: 'MD', uri: 'uniqueIdentifierGroups/1/uniqueIdentifiers', query: 'projection=inlineSites', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature,
                site: { id: i.site.id, name: i.site.nomenclature }
            };
        },
        namedMappers: [
            { name: 'byEaId', keyFunc: (i) => i.name }
        ],
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    substances: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'parameters', method: 'GET'},
        idMapper: (i) => internals.defaultMapper(i),
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    substancesAir: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: { api: 'MD', uri: 'parameterGroups/3/parameters', method: 'GET' },
        idMapper: (i) => internals.defaultMapper(i),
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    substancesLand: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: { api: 'MD', uri: 'parameterGroups/4/parameters', method: 'GET' },
        idMapper: (i) => internals.defaultMapper(i),
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    substancesWater: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: { api: 'MD', uri: 'parameterGroups/5/parameters', method: 'GET' },
        idMapper: (i) => internals.defaultMapper(i),
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    substancesWasteWater: {
        name: 'parameters',
        map: new Map(),
        arr: [],
        request: { api: 'MD', uri: 'parameterGroups/2/parameters', method: 'GET' },
        idMapper: (i) => internals.defaultMapper(i),
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    units: {
        name: 'units',
        map: new Map(),
        arr: [],
        request: { api: 'MD', uri: 'unitTypes/18/units', method: 'GET' },
        idMapper: (i) => internals.defaultMapper(i),
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    ewcActivities: {
        name: 'ewcActivities',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'ewcActivities', query: 'projection=includeSubchapterId', method: 'GET'},
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
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    ewcSubchapters: {
        name: 'ewcSubchapters',
        map: new Map(),
        arr: [],
        request: { api: 'MD', uri: 'ewcSubchapters', query: 'projection=includeChapterId', method: 'GET' },
        idMapper: (i) => { return { id: i.id, ewc_chapter: i.ewc_chapter, name: i.nomenclature, code: i.code, description: i.description }; },
        namedMappers: [
            { name: 'byName', keyFunc: (i) => i.name }
        ],
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    ewcChapters: {
        name: 'ewcChapters',
        map: new Map(),
        arr: [],
        request: { api: 'MD', uri: 'ewcChapters', method: 'GET' },
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
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    disposalCodes: {
        name: 'disposalCodes',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'disposalCodes', method: 'GET'},
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
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    recoveryCodes: {
        name: 'recoveryCodes',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'recoveryCodes', method: 'GET'},
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
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    naceSections: {
        name: 'naceSections',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'naceSections', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                code: i.nomenclature,
                description: i.description,
                details: i.details
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    naceDivisions: {
        name: 'naceDivisions',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'naceDivisions', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                code: i.nomenclature,
                description: i.description,
                details: i.details
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    naceGroups: {
        name: 'naceGroups',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'naceGroups', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                code: i.nomenclature,
                description: i.description,
                details: i.details
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    naceClasses: {
        name: 'naceClasses',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'naceClasses', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                code: i.nomenclature,
                description: i.description,
                details: i.details
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    noseActivityClasses: {
        name: 'noseActivityClasses',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'noseActivityClasses', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    noseActivities: {
        name: 'noseActivities',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'noseActivities', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    noseProcesses: {
        name: 'noseProcesses',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'noseProcesses', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                name: i.nomenclature
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'name')
    },

    eprtrSectors: {
        name: 'eprtrSectors',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'eprtrSectors', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                code: i.nomenclature,
                description: i.description
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    },

    eprtrActivities: {
        name: 'eprtrActivities',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'eprtrActivities', method: 'GET'},
        idMapper: (i) => {
            return {
                id: i.id,
                code: i.nomenclature,
                description: i.description,
                threshold: i.threshold
            };
        },
        sorter: (a, b) => internals.sortByProperty(a, b, 'code')
    }

};

/*
 * Specifics for relations. These are somewhat different from entities
 */
internals._relations = {
    naceHierarchy: {
        name: 'naceSections',
        map: new Map(),
        arr: [],
        request: { api: 'MD', uri: 'naceSections', method: 'GET', query: 'projection=hierarchy' },

        processor: (results) => {
            const hierarchy = [];
            for (const section of results) {
                for (const division of section.nace_divisions) {
                    for (const group of division.nace_groups) {
                        for (const naceClass of group.nace_classes) {
                            hierarchy.push({
                                sectionId: section.id,
                                divisionId: division.id,
                                groupId: group.id,
                                classId: naceClass.id
                            });
                        }
                    }
                }
            }
            return hierarchy;
        },

        keyMap: (r) => {
            return `${r.sectionId}-${r.divisionId}-${r.groupId}-${r.classId}`;
        }
    },

    noseHierarchy: {
        name: 'noseActivityClasses',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'noseActivityClasses', method: 'GET', query: 'projection=hierarchy'},

        processor: (results) => {
            const hierarchy = [];
            for (const activityClass of results) {
                for (const activity of activityClass.nose_activities) {
                    for (const process of activity.nose_processes) {
                        hierarchy.push({
                            activityClassId: activityClass.id,
                            activityId: activity.id,
                            processId: process.id
                        });
                    }
                }
            }
            return hierarchy;
        },

        keyMap: (r) => {
            return `${r.activityClassId}-${r.activityId}-${r.processId}`;
        }
    },

    eprtrHierarchy: {
        name: 'eprtrSectors',
        map: new Map(),
        arr: [],
        request: {api: 'MD', uri: 'eprtrSectors', method: 'GET', query: 'projection=hierarchy'},

        processor: (results) => {
            const hierarchy = [];
            for (const eprtrSectors of results) {
                for (const activity of eprtrSectors.eprtr_activities) {
                    hierarchy.push({
                        sectorId: eprtrSectors.id,
                        activityId: activity.id
                    });
                }
            }
            return hierarchy;
        },

        keyMap: (r) => {
            return `${r.sectorId}-${r.activityId}`;
        }
    }
};

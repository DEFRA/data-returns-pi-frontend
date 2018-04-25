'use strict';

const _internals = {};

// Map by parameter
_internals.mapByPathParameter = (taskList) => {
    if (!_internals.map) {
        _internals.map = new Map(Object.values(taskList).map(t => [t.pathParam, t]));
    }
    return _internals.map;
};

// By route
_internals.getRoute = (taskList, request) => {
    const route = _internals.mapByPathParameter(taskList).get(request.params.route);
    if (!route) {
        throw new Error(`Request error: incorrect route specified: ${request.params.route}`);
    }
    return route;
};

/**
 * Module to manipulate the task list
 */
module.exports = {

    // Using the regime tree determine which tasks appear in the task list
    getTaskList: (taskList, regimeTree) => {
        const result = {};

        // Add the tasks that are always required
        const keys = Object.keys(taskList)
            .filter(k => ['REVIEW', 'SUBMIT', 'NACE_CODE', 'NOSE_CODES', 'WASTE_TRANSFERS'].includes(k));

        keys.forEach(k => {
            result[k] = taskList[k];
        });

        // Add in the obligation based release routes (with title)
        regimeTree.obligations.forEach(o => {
            switch (o.route.nomenclature) {
                case 'Air':
                    result.RELEASES_TO_AIR = Object.assign({}, taskList.RELEASES_TO_AIR);
                    result.RELEASES_TO_AIR.title = o.description;
                    result.RELEASES_TO_AIR.routeId = o.route.id;
                    break;

                case 'Land':
                    result.RELEASES_TO_LAND = Object.assign({}, taskList.RELEASES_TO_LAND);
                    result.RELEASES_TO_LAND.title = o.description;
                    result.RELEASES_TO_LAND.routeId = o.route.id;
                    break;

                case 'Controlled waters':
                    result.RELEASES_TO_CONTROLLED_WATERS = Object.assign({}, taskList.RELEASES_TO_CONTROLLED_WATERS);
                    result.RELEASES_TO_CONTROLLED_WATERS.title = o.description;
                    result.RELEASES_TO_CONTROLLED_WATERS.routeId = o.route.id;
                    break;

                case 'Waste water':
                    result.OFFSITE_TRANSFERS_IN_WASTE_WATER = Object.assign({}, taskList.OFFSITE_TRANSFERS_IN_WASTE_WATER);
                    result.OFFSITE_TRANSFERS_IN_WASTE_WATER.title = o.description;
                    result.OFFSITE_TRANSFERS_IN_WASTE_WATER.routeId = o.route.id;
                    break;
            }

        });

        return result;
    },

    mapByPathParameter: _internals.mapByPathParameter,
    getRoute: _internals.getRoute
};

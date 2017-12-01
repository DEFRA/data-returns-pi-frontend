'use strict';

/**
 * Module to manipulate the task list
 */
const Hoek = require('hoek');
const logger = require('../lib/logging').logger;

function checkTaskListCorrectness (taskList) {
    try {
        Hoek.assert(taskList.name, 'Tasklist name must be set');

        Hoek.assert(typeof taskList.newTasksObject === 'function', 'Tasklist new function must be set');

        // Perform some checking that the tasklist is well-formed
        Hoek.assert(taskList.stages && Array.isArray(taskList.stages),
            'The taskList object should contain a value "stages" which is an array');

        Hoek.assert(taskList.stages.every((e) => {
            return e.heading && e.items && Array.isArray(e.items);
        }), 'Each taskList item should contain a heading and an array of items');

    } catch (err) {
        logger.error(err);
        throw err;
    }
}

/**
 * Filter function for the task-list
 * @param taskList
 * @param items to include or exclude
 * @param include
 * @return {{stages: Array}}
 */
function filter (taskList, names, include) {
    checkTaskListCorrectness(taskList);

    const newTaskList = { name: taskList.name, stages: [] };
    taskList.stages.forEach(s => {
        const newItemList = s.items.filter((i) => {
            return include ? names.includes(i.name) : !names.includes(i.name);
        });

        if (newItemList.length > 0) {
            s.items = newItemList;
            newTaskList.stages.push(s);
        }
    });

    return newTaskList;
}

let internals = {};

module.exports = internals = {
    // Filters a task list to only include those items with a 'name' attribute in the array names
    include: (taskList, names) => { return filter(taskList, names, true); },
    // Filters a task list to exclude those items with a 'name' attribute in the array names
    exclude: (taskList, names) => { return filter(taskList, names); },
    // Names - retrieves the list of names from a task list
    names: (taskList) => {
        checkTaskListCorrectness(taskList);
        return ([].concat(...taskList.stages.map(i => i.items))).map(n => n.name);
    },

    // Map by parameter
    mapByPathParameter: (taskList) => {
        checkTaskListCorrectness(taskList);
        if (!internals._mapByPathParameter[taskList.name]) {
            internals._mapByPathParameter[taskList.name] = new Map();
            taskList.stages.forEach(s => {
                s.items.forEach(i => {
                    internals._mapByPathParameter[taskList.name].set(i.pathParam, i);
                });
            });
        }
        return internals._mapByPathParameter[taskList.name];
    },

    // Map by name
    mapByName: (taskList) => {
        checkTaskListCorrectness(taskList);
        if (!internals._mapByName[taskList.name]) {
            internals._mapByName[taskList.name] = new Map();
            taskList.stages.forEach(s => {
                s.items.forEach(i => {
                    internals._mapByName[taskList.name].set(i.name, i);
                });
            });
        }
        return internals._mapByName[taskList.name];
    },

    // Get the route from a tasklist
    getRoute: (taskList, request) => {
        const map = internals.mapByPathParameter(taskList);
        const route = map.get(request.params.route);
        if (!route) {
            throw new Error(`Request error: incorrect route specified: ${request.params.route}`);
        }
        return route;
    },

    // Template to create a new tasks object
    newTasksObject: async (taskList, request) => {
        const tasks = taskList.newTasksObject();
        await request.server.app.userCache.cache('tasks').set(request, tasks);
        return tasks;
    }

};

internals._mapByPathParameter = {};
internals._mapByName = {};

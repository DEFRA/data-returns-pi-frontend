'use strict';

/**
 * Module to manipulate the task list
 */
const Hoek = require('hoek');
const logger = require('./logging').logger;

function checkTaskListCorrectness (taskList) {
    try {
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

    const newTaskList = { stages: [] };
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

module.exports = {
    // Filters a task list to only include those items with a 'name' attribute in the array names
    include: (taskList, names) => { return filter(taskList, names, true); },
    // Filters a task list to exclude those items with a 'name' attribute in the array names
    exclude: (taskList, names) => { return filter(taskList, names); },
    // Apply a status to an item in the task list
    status: (taskList, name, status) => {
        checkTaskListCorrectness(taskList);
        taskList.stages.forEach(s => {
            const item = s.items.find((i) => {
                return i.name === name;
            });
            if (item) {
                if (status) {
                    item.status = status;
                } else {
                    delete item.status;
                }
            }
        });
        return taskList;
    }
};

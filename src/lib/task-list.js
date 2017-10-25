'use strict';

const hoek = require('hoek');
const logging = require('./logging');

/**
 *  Filter function for the task-list
 * @param taskList
 * @param items to include or exclude
 * @param include
 * @return {{stages: Array}}
 */
function filter (taskList, names, include) {
    try {

        // Perform some checking that the tasklist is well-formed
        hoek.assert(taskList.stages && Array.isArray(taskList.stages),
            'The taskList object should contain a value "stages" which is an array');

        hoek.assert(taskList.stages.every((e) => {
            return e.heading && e.items && Array.isArray(e.items);
        }), 'Each taskList item should contain a heading and an array of items');

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

    } catch (err) {
        logging.logger.error(err);
        throw err;
    }
}

module.exports = {
    /**
   * Filters a task list to only include those items with a 'name' attribute in the array names
   */
    include: (taskList, names) => { return filter(taskList, names, true); },
    /**
   * Filters a task list to exclude those items with a 'name' attribute in the array names
   */
    exclude: (taskList, names) => { return filter(taskList, names); }
};

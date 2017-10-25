const tasklistLib = require('./src/lib/task-list');
const allSectorsTaskList = require('./src/model/all-sectors/task-list');

// console.log(JSON.stringify(tasklistLib.include(allSectorsTaskList,
//     ['RELEASES_TO_AIR', 'RELEASES_TO_LAND', 'RELEASES_TO_CONTROLLED_WATERS', 'SUBMIT']
// ), null, 4));
//
// console.log(JSON.stringify(tasklistLib.exclude(allSectorsTaskList,
//     ['RELEASES_TO_AIR', 'RELEASES_TO_LAND', 'RELEASES_TO_CONTROLLED_WATERS', 'SUBMIT']
// ), null, 4));
//
// console.log(JSON.stringify(tasklistLib.status(allSectorsTaskList, 'RELEASES_TO_LAND', 'Completed'), null, 4));
//
const add = tasklistLib.status(allSectorsTaskList, 'RELEASES_TO_LAND', 'Completed');
console.log(JSON.stringify(add, null, 4));
const remove = tasklistLib.status(add, 'RELEASES_TO_LAND');
console.log(JSON.stringify(remove, null, 4));

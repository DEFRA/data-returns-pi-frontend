const tasklistLib = require('./src/lib/task-list');
const allSectorsTaskList = require('./src/model/all-sectors/task-list');

console.log(JSON.stringify(tasklistLib.include(allSectorsTaskList,
    ['RELEASES_TO_AIR', 'RELEASES_TO_LAND', 'RELEASES_TO_CONTROLLED_WATERS', 'SUBMIT']
), null, 4));

console.log(JSON.stringify(tasklistLib.exclude(allSectorsTaskList,
    ['RELEASES_TO_AIR', 'RELEASES_TO_LAND', 'RELEASES_TO_CONTROLLED_WATERS', 'SUBMIT']
), null, 4));

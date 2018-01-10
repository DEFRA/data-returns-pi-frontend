
const Service = require('./src/service/master-data');

(async () => {
    try {
        let result = await Service.getEaIds();
        console.log(JSON.stringify(result));
        result = await Service.getEaIdsForUser(0);
        console.log(JSON.stringify(result));
    } catch (err) {
        console.log('error', err);
        process.exit(1);
    }
})();

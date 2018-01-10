/*
 * const client = require('./src/lib/api-client');
 *
 * (async () => {
 *     try {
 *         const result = await client.request('MD', 'GET', 'uniqueIdentifierGroups/1/uniqueIdentifiers');
 *         console.log(JSON.stringify(result));
 *     } catch (err) {
 *         console.log('error', err);
 *         process.exit(1);
 *     }
 * })();
 */

const Service = require('./src/service/master-data');

(async () => {
    try {
        const result = await Service.getEaIds();
        console.log(JSON.stringify(result));
        const result2 = await Service.getEaIds();
        console.log(JSON.stringify(result2));

    } catch (err) {
        console.log('error', err);
        process.exit(1);
    }
})();

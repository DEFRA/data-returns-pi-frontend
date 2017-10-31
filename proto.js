/*
 * // TODO - add these to the unit tests
 *
 * const userService = require('./src/service/user-service');
 *
 * console.log('Users: ' + JSON.stringify(userService.getUsers(), null, 2));
 *
 * const user1 = userService.getUser('JonathanAgnew@email.com');
 *
 * console.log('User: ' + JSON.stringify(user1, null, 2));
 *
 * const permits = userService.getEaIdsForUser(user1.id);
 *
 * console.log('Permits for user: ' + JSON.stringify(permits, null, 2));
 *
 * const allPermits = userService.getEaIds();
 *
 * console.log('Permits: ' + JSON.stringify(allPermits, null, 2));
 *
 * console.log('Authenticate true: ' + JSON.stringify(userService.authenticate(user1.username, user1.password), null, 2));
 *
 * console.log('Authenticate false: ' + JSON.stringify(userService.authenticate(user1.username, 'qewr'), null, 2));
 *
 * const user3 = userService.getUser('gdog');
 *
 * const permits2 = userService.getEaIdsForUser(user3.id);
 *
 * console.log('Gdog Permits: ' + JSON.stringify(permits2, null, 2));
 *
 * const sites = userService.getSitesForPermits(permits2.map(p => p.id));
 *
 * console.log('sites for permits: ' + JSON.stringify(sites));
 *
 */

'use strict';

const userCache = require('./src/lib/user-cache');

(async () => {
    try {

        console.log('Hello World!');

        // Create two cache sections
        await userCache.start(require('catbox-redis'), ['status', 'returns']);

        const key = { id: 'joke' };

        await userCache.cache('status').set(key, [1, 2, 3, 4]);

        const p = await userCache.cache('status').get(key);

        console.log(p);

        console.log('Started');

        userCache.stop();
    } catch (err) {
        console.log(err);
    }
})();

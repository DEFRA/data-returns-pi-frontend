/**
 * Test the user cache module
 */

const Lab = require('lab');
const Code = require('code');
const lab = exports.lab = Lab.script();

const expect = Code.expect;
const test = lab.test;
const experiment = lab.experiment;
const before = lab.before;
const after = lab.after;

const UserCache = require('../../src/lib/user-cache');

experiment('User cache', function () {

    before(() => {
        // Start the server asynchronously
        return UserCache.start(require('catbox-redis'), ['test']);
    });

    test('Test basic cache usage', async () => {

        const value = '__value__';

        const key = { id: 'key' };

        await UserCache.cache('test').set(key, value);

        const value2 = await UserCache.cache('test').get(key);

        expect(value).to.equal(value2);

        await UserCache.cache('test').drop(key);

        const value3 = await UserCache.cache('test').get(key);

        expect(value3).to.be.null();

    });

    after(() => {
        // Start the server asynchronously
        UserCache.stop();
    });

});

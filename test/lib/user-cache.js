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

const TEST_CACHE = require('../../src/lib/user-cache-policies').names.UNIT_TEST

experiment('User cache', () => {
    before(() => {
        return UserCache.start(require('catbox-redis'),
            require('../../src/lib/user-cache-policies').policies);
    });

    test('Test basic cache usage', async () => {
        try {

            const value = { foo: 'bar' };

            await UserCache.cache(TEST_CACHE).set('9045', value);

            const value2 = await UserCache.cache(TEST_CACHE).get('9045');

            expect(value.foo).to.equal(value2.foo);

            await UserCache.cache(TEST_CACHE).drop('9045');

            const value3 = await UserCache.cache(TEST_CACHE).get('9045');

            expect(value3).to.be.null();

        } catch (err) {
            console.log(err);
        }
    });

    after(() => {
        UserCache.stop();
    });
});

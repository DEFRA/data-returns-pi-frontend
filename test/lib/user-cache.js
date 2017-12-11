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

experiment('User cache', () => {
    before(() => {
        return UserCache.start(require('catbox-redis'),
            require('../../src/lib/user-cache-policies').policies);
    });

    test('Test basic cache usage', async () => {
        try {

            const value = '150 runs';

            await UserCache.cache('unit-test').set('9045', value);

            const value2 = await UserCache.cache('unit-test').get('9045');

            expect(value).to.equal(value2);

            await UserCache.cache('unit-test').drop('9045');

            const value3 = await UserCache.cache('unit-test').get('9045');

            expect(value3).to.be.null();

        } catch (err) {
            console.log(err);
        }
    });

    after(() => {
        UserCache.stop();
    });
});

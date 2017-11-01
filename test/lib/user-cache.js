/**
 * Test the user cache module
 */

const Lab = require('lab');
const Code = require('code');
const lab = exports.lab = Lab.script();

const expect = Code.expect;
const test = lab.test;
const experiment = lab.experiment;

const UserCache = require('../../src/lib/user-cache');

experiment('User cache', function () {

    test('Test basic cache usage', async () => {

        try {

            const value = '150 runs';

            const key = '001';

            await UserCache.cache('unit-test').set('9045', key, value);

            const value2 = await UserCache.cache('unit-test').get('9045', key);

            expect(value).to.equal(value2);

            await UserCache.cache('unit-test').drop('9045', key);

            const value3 = await UserCache.cache('unit-test').get('9045', key);

            expect(value3).to.be.null();

        } catch (err) {
            console.log(err);
        }
    });

});

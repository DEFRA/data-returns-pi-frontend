const Common = require('./common');
const server = Common.server;

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const experiment = lab.experiment;
const expect = Code.expect;
const before = lab.before;
const after = lab.after;

const test = lab.test;

/**
 * Important - this test is run first as it is alphabetically first. This
 * means it is this test that establishes the hapi server.
 * @returns {Promise.<void>}
 */
experiment('Authentication', () => {

    before(() => {
        // Start the server asynchronously
        return Common.start();
    });

    test('Test / redirects to login page', async () => {
         await server().inject({
            method: 'GET',
            url: '/'
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/login');
        });
    });

    test('Test invalid login', async () => {
      await server().inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: '1@email.com',
                password: 'wrong'
            }
        }, function (response) {
            expect(response.statusCode).to.equal(200);
        });
    });

    test('Test valid login', async () => {
        await server().inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: '1@email.com',
                password: 'a'
            }
        }, function (response) {
            expect(response.statusCode).to.equal(302);
        });
    });

    test('Test start handler', () => {
        server().inject({
            method: 'GET',
            url: '/'
        }, function (response) {
            expect(response.headers.location).to.equal('/login');
            expect(response.statusCode).to.equal(302);
        });
    });

    test('Test log out', async () => {
        await server().inject({
            method: 'GET',
            url: '/logout'
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/login');
        });
    });

    after(() => {
        // Stop the server asynchronously
        return Common.stop();
    });
});

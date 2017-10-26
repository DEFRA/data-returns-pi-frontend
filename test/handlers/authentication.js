const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const experiment = lab.experiment;
const expect = Code.expect;
const before = lab.before;
const test = lab.test;

const logging = require('../../src/lib/logging');
const server = require('../../src/lib/server');

// Start the server
const start = async () => {
    try {
        await server.initialize();
        await server.server.start();
        logging.logger.info(`Server started at ${server.server.info.uri}`);
    } catch (err) {
        logging.logger.log('error', err);
        process.exit(1);
    }
};

experiment('Authorizations', function () {

    before(() => {
        // Start the server asynchronously
        return start();
    });

    test('Test / redirects to login page', () => {
        server.server.inject({
            method: 'GET',
            url: '/'
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/login');
        });
    });

    test('Test invalid login', () => {
        server.server.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: 'gdog',
                password: 'wrong'
            }
        }, function (response) {
            expect(response.statusCode).to.equal(200);
        });
    });

    test('Test valid login', () => {
        server.server.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: 'gdog',
                password: 'gd'
            }
        }, function (response) {
            expect(response.statusCode).to.equal(200);
        });
    });

    test('Test start handler', () => {
        server.server.inject({
            method: 'GET',
            url: '/'
        }, function (response) {
            expect(response.headers.location).to.equal('/login');
            expect(response.statusCode).to.equal(302);
        });
    });

    test('Test log out', () => {
        server.server.inject({
            method: 'GET',
            url: '/logout'
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/login');
        });
    });

});

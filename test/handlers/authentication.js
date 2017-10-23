const Lab = require('lab');
const lab = exports.lab = Lab.script();
const experiment = lab.experiment;
const before = lab.before;
const expect = lab.expect;
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

    test('Test / redirects to login page', (done) => {
        server.server.inject({
            method: 'GET',
            url: '/'
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/login');
            done();
        });
    });

    test('Test invalid login', (done) => {
        server.server.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: 'gdog',
                password: 'wrong'
            }
        }, function (response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    test('Test valid login', (done) => {
        server.server.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: 'gdog',
                password: 'gd'
            }
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/');
            done();
        });
    });

    test('Test start handler', (done) => {
        server.server.inject({
            method: 'GET',
            url: '/'
        }, function (response) {
            expect(response.headers.location).to.equal('/login');
            expect(response.statusCode).to.equal(302);
            done();
        });
    });

    test('Test log out', (done) => {
        server.server.inject({
            method: 'GET',
            url: '/logout'
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/login');
            done();
        });
    });

});

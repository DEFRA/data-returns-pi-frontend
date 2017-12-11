const Common = require('./common');
const server = Common.server;

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const getCookies = require('./common').getCookies;

const experiment = lab.experiment;
const expect = Code.expect;
const before = lab.before;
const after = lab.after;

const test = lab.test;
const internals = {};

/**
 * Important - this test is run first as it is alphabetically first. This
 * means it is this test that establishes the hapi server.
 * @returns {Promise.<void>}
 */
experiment('Authentication', () => {

    before(() => {
        return Common.start();
    });

    test('Test valid log in sequence', async () => {
        // Requesting the service Gives a redirect to the login page
        let response = await server().inject({
            method: 'GET',
            url: '/'
        });
        expect(response.headers.location).to.equal('/login');
        expect(response.statusCode).to.equal(302);

        // Requesting the login page displays the login page
        response = await server().inject({
            method: 'GET',
            url: '/login'
        });
        expect(response.statusCode).to.equal(200);

        // Login to the server as user1 give a redirect to /
        response = await server().inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: '1@email.com',
                password: 'a'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');

        // Grab the session cookie
        internals.sid = getCookies(response)['sid'];
        expect(internals.sid).to.be.not.null();

        // Now logged in get request to the start page
        response = await server().inject({
            method: 'GET',
            url: '/',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // While logged in
        response = await server().inject({
            method: 'GET',
            url: '/login',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');

        response = await server().inject({
            method: 'GET',
            url: '/',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Test invalid log in sequence', async () => {
    // Requesting the service Gives a redirect to the login page
        let response = await server().inject({
            method: 'GET',
            url: '/'
        });
        expect(response.headers.location).to.equal('/login');
        expect(response.statusCode).to.equal(302);

        // Requesting the login page displays the login page
        response = await server().inject({
            method: 'GET',
            url: '/login'
        });
        expect(response.statusCode).to.equal(200);

        // Login to the server as user1 give a redirect to /
        response = await server().inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: '1@email.com',
                password: 'b'
            }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Test log out', async () => {
        let response = await server().inject({
            method: 'GET',
            url: '/logout',
            headers: { cookie: 'sid=' + internals.sid }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');

        response = await server().inject({
            method: 'GET',
            url: '/'
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/login');

        response = await server().inject({
            method: 'GET',
            url: '/login'
        });

        expect(response.statusCode).to.equal(200);
    });

    after(() => {
        return Common.stop();
    });
});

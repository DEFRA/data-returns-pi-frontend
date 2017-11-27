const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const getCookies = require('./common').getCookies;

const experiment = lab.experiment;
const expect = Code.expect;
const test = lab.test;

const server = require('../../src/lib/server');
const internals = {};

experiment('Unexpected navigation', async () => {

    test('Successful login sequence (2) to the start page', async () => {
        let response = await server.server.inject({
            method: 'GET',
            url: '/'
        });
        expect(response.headers.location).to.equal('/login');
        expect(response.statusCode).to.equal(302);

        // Requesting the login page displays the login page
        response = await server.server.inject({
            method: 'GET',
            url: '/login'
        });
        expect(response.statusCode).to.equal(200);

        // Login to the server as user1 give a redirect to /
        response = await server.server.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: '3@email.com',
                password: 'a'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');

        // Grab the session cookie
        internals.sid = getCookies(response)['sid'];
        expect(internals.sid).to.be.not.null();

        // Now logged in get request to the start page
        response = await server.server.inject({
            method: 'GET',
            url: '/',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Go to the task list without first setting a permit', async () => {
        const response = await server.server.inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to confirm page without first setting a permit', async () => {
        const response = await server.server.inject({
            method: 'GET',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to releases page without first setting a permit', async () => {
        const response = await server.server.inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to add substances page without first setting a permit', async () => {
        const response = await server.server.inject({
            method: 'GET',
            url: '/add-substance',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to release details page without first setting a permit', async () => {
        const response = await server.server.inject({
            method: 'GET',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Select a permit and go straight to the substances page', async () => {
        let response = await server.server.inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                eaId: 'AB7469'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await server.server.inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Select a permit and go straight to the detail page', async () => {
        let response = await server.server.inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                eaId: 'AB7469'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await server.server.inject({
            method: 'GET',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Select a permit and go straight to add substances', async () => {
        let response = await server.server.inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                eaId: 'AB7469'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await server.server.inject({
            method: 'GET',
            url: '/add-substance',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Selecting someone else\'s permit logs user out', async () => {
        const response = await server.server.inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                eaId: 'XX555XX'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/logout');
    });
});

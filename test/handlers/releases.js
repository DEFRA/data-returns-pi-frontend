'use strict';
const Common = require('./common');
const server = Common.server;

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const getCookies = require('./common').getCookies;

const experiment = lab.experiment;
const expect = Code.expect;
const test = lab.test;

const internals = {};
const before = lab.before;
const after = lab.after;

experiment('Releases', () => {

    before(() => {
    // Start the server asynchronously
        return Common.start();
    });

    test('Successful login sequence to the start page', async () => {
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
    });

    test('Select a permit and go to permit list', async () => {
        // Post a selected permit and relocation to the task list
        let response = await server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                eaId: '100311'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        // request the task list
        response = await server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Confirm releases to air = no sends you back to the task list', async () => {
        // request the task list
        let response = await server().inject({
            method: 'GET',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // Post No - expect redirection to the task list
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                confirmation: 'false'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        // request the task list again
        response = await server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Confirm releases to air = yes sends you to the releases page', async () => {
        // request the task list
        let response = await server().inject({
            method: 'GET',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // Post Yes - expect redirection to the task list
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        // request the releases to air page
        response = await server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Add a substance cycle', async () => {
        let response = await server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                add: 'Add substance'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/add-substance');

        // Get the substances page
        response = await server().inject({
            method: 'GET',
            url: '/releases/air/add-substance',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // Select alderin
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/add-substance',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                substanceId: '506'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/detail');

        // Get the detail page
        response = await server().inject({
            method: 'GET',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // Post the detail page invalid redirects you back to the detail page
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                value: null,
                unitId: null,
                methodId: null
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/detail');

        // Posting a valid response returns to the release by air page
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                value: '10',
                unitId: '5',
                methodId: '1'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        // Get the releases to air page
        response = await server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // Go back to the detail page from the main releases page
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                'value-506': '10',
                'unitId-506': '5',
                'detail-506': 'Detail'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/detail');

        // Use the back button here to go back to the substances page
        response = await server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // Attempt continue with an invalid release redirects back to same page
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                'value-506': '10',
                'unitId-506': null,
                'continue': 'Continue'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        response = await server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // Allow exit back to the task list
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + internals.sid },
            payload: {
                'value-506': '10',
                'unitId-506': '5',
                'continue': 'Continue'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        // request the task list again
        response = await server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        // Test removal of substance
        response = await server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: {cookie: 'sid=' + internals.sid},
            payload: {
                'value-506': '10',
                'unitId-506': '5',
                'delete-506': 'Delete'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/remove');

        // request the task list again
        response = await server().inject({
            method: 'GET',
            url: '/releases/air/remove',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);

        response = await server().inject({
            method: 'POST',
            url: '/releases/air/remove',
            headers: {cookie: 'sid=' + internals.sid}
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        response = await server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + internals.sid }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Log out', async () => {
        const response = await server().inject({
            method: 'GET',
            url: '/logout'
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/login');
    });

    after(() => {
    // Start the server asynchronously
        return Common.stop();
    });

});

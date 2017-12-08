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

experiment('Off-site transfers', () => {

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
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Select a permit and go to permit list', async () => {
    // Post a selected permit and relocation to the task list
        let response = await server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: {cookie: 'sid=' + internals.sid},
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
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Confirm off-site transfers = no sends you back to the task list', async () => {
    // request the task list
        let response = await server().inject({
            method: 'GET',
            url: '/transfers/off-site/confirm',
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);

        // Post No - expect redirection to the task list
        response = await server().inject({
            method: 'POST',
            url: '/transfers/off-site/confirm',
            headers: {cookie: 'sid=' + internals.sid},
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
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Confirm off-site transfers = yes sends you to the add an off-site transfer page page', async () => {

        // request off-site transfers page
        let response = await server().inject({
            method: 'GET',
            url: '/transfers/off-site/confirm',
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);

        // Post Yes - expect redirection to the task list
        response = await server().inject({
            method: 'POST',
            url: '/transfers/off-site/confirm',
            headers: {cookie: 'sid=' + internals.sid},
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        // request the off-site transfers page
        response = await server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/add');

        // request the releases to air page
        response = await server().inject({
            method: 'GET',
            url: '/transfers/off-site/add',
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Test invalid transfer', async () => {
        // request the releases to air page
        let response = await server().inject({
            method: 'GET',
            url: '/transfers/off-site/add',
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);

        response = await server().inject({
            method: 'POST',
            url: '/transfers/off-site/add',
            headers: {cookie: 'sid=' + internals.sid},
            payload: {
                ewc: null,
                wfd: null,
                value: 'junk'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/add');

        // request the releases to air page
        response = await server().inject({
            method: 'GET',
            url: '/transfers/off-site/add',
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Test valid transfer', async () => {
    // request the releases to air page
        let response = await server().inject({
            method: 'GET',
            url: '/transfers/off-site/add',
            headers: {cookie: 'sid=' + internals.sid}
        });
        expect(response.statusCode).to.equal(200);

        response = await server().inject({
            method: 'POST',
            url: '/transfers/off-site/add',
            headers: {cookie: 'sid=' + internals.sid},
            payload: {
                ewc: '01 01 01',
                wfd: 'R1',
                value: 100.88
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        // request the releases to air page
        response = await server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: {cookie: 'sid=' + internals.sid}
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

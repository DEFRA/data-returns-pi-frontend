'use strict';

const Common = require('./common');

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const experiment = lab.experiment;
const expect = Code.expect;
const test = lab.test;

const before = lab.before;
const after = lab.after;

experiment('Overseas waste transfers', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('1@email.com', 'a');
    });

    test('Select a permit and go to permit list', async () => {
        let response = await Common.server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: {cookie: 'sid=' + Common.sid()},
            payload: {
                eaId: '100311'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        // request the task list
        response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: {cookie: 'sid=' + Common.sid()}
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Confirm overseas transfers = no sends you back to the task list', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post No - expect redirection to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'false'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Add cycle', async () => {
        // request the task list again
        let response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post No - expect redirection to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/add-substance');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                substanceId: '506'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/detail');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: '99'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/transportation-co-addr');
    });

    test('Logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });

});

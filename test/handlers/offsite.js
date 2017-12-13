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

experiment('Off-site transfers', () => {

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
            headers: { cookie: 'sid=' + Common.sid() },
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
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Confirm off-site transfers = no sends you back to the task list', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post No - expect redirection to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/confirm',
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

    test('Confirm off-site transfers = yes sends you to the add an off-site transfer page page', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post Yes - expect redirection to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        // request the off-site transfers page
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/add');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Test invalid transfer', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                ewc: null,
                wfd: null,
                value: 'junk'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/add');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Test valid transfer', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                ewc: '01 01 01',
                wfd: 'R1',
                value: 100.88
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Test change transfer to invalid', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-0': 'bad',
                continue: 'Continue'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');
    });

    test('Test change transfer to valid and continue', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-0': 221.67,
                continue: 'Continue'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');
    });

    test('Test detail transfer to invalid', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-0': 122,
                'detail-0': 'More detail'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/detail');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: 'bad'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/detail');

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: 100
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Test delete transfer not confirm', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-0': 221.67,
                'delete-0': 'Delete'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/remove');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Test delete transfer confirm', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-0': 221.67,
                'delete-0': 'Delete'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/remove');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/off-site/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/off-site/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });

});

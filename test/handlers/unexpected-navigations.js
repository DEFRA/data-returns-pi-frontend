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

experiment('Unexpected navigation', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('3@email.com', 'a');
    });

    test('Go to the task list without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to confirm page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to releases page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to add substances page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/add-substance',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to release details page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to release remove page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to overseas confirm page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to overseas add page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to overseas detail page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to overseas detail page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: ' /transfers/overseas/transportation-co-address',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to overseas check page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: ' /transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Go to overseas summary page without first setting a permit', async () => {
        const response = await Common.server().inject({
            method: 'GET',
            url: ' /transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Select a permit and go straight to the substances page', async () => {
        const response = await Common.server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                eaId: 'AB7469'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');
    });

    test('Select a permit and go straight to the detail page', async () => {
        let response = await Common.server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                eaId: 'AB7469'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Select a permit and go straight to the removal page', async () => {
        let response = await Common.server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                eaId: 'AB7469'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');
    });

    test('Select a permit and go straight to add substances: (Ok)', async () => {
        let response = await Common.server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                eaId: 'AB7469'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/add-substance',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Selecting someone else\'s permit logs user out', async () => {
        const response = await Common.server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                eaId: 'XX555XX'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/logout');
    });

    test('Test login', async () => {
        return Common.login('1@email.com', 'a');
    });

    test('Half completed off-site waste transfer 1', async () => {

        let response = await Common.server().inject({
            method: 'get',
            url: '/',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'post',
            url: '/select-permit',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                eaId: '100311'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await Common.server().inject({
            method: 'get',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'post',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/add');

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'post',
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
            method: 'get',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'get',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'post',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/add');

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Half completed off-site waste transfer 2', async () => {
        let response = await Common.server().inject({
            method: 'get',
            url: '/',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'post',
            url: '/select-permit',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                eaId: '100311'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await Common.server().inject({
            method: 'get',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'post',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site/add');

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'post',
            url: '/transfers/off-site/add',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                ewc: '01 01 01',
                wfd: 'R2',
                value: '34.4'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'post',
            url: '/transfers/off-site/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-0': 'junk',
                continue: 'Continue'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/off-site');

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'get',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'get',
            url: '/transfers/off-site/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Select a permit and go straight to the overseas pages', async () => {
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

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });

        expect(response.headers.location).to.equal('/');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/destination-address',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/add');

    });

    after(() => {
        return Common.stop();
    });
});

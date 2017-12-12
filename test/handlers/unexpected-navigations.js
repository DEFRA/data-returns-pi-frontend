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

    after(() => {
        return Common.stop();
    });
});

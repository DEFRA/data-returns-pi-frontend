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

experiment('Releases', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('1@email.com', 'a');
    });

    test('Select a permit and go to permit list', async () => {
        // Post a selected permit and relocation to the task list
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

    test('Confirm releases to air = no sends you back to the task list', async () => {
        // request the task list
        let response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post No - expect redirection to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/confirm',
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

    test('Confirm releases to air = yes sends you to the add page', async () => {
        // request the task list
        let response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post Yes - expect redirection to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        // request the releases to air page
        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/add-substance');

        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/add-substance',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/add-substance',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                substanceId: '504'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/detail');

        // Get the detail page
        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: '10',
                unitId: '5',
                methodId: '1'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        // Get the releases to air page
        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Add a substance cycle', async () => {
        // Get the substances page
        let response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                add: 'Add substance'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/add-substance');

        // Get the substances page
        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/add-substance',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Select alderin
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/add-substance',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                substanceId: '509'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/detail');

        // Get the detail page
        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post the detail page invalid redirects you back to the detail page
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: null,
                unitId: null,
                methodId: null
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/detail');

        // Posting a valid response returns to the release by air page
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: '10',
                unitId: '5',
                methodId: '1'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        // Get the releases to air page
        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Go back to the detail page from the main releases page
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-509': '10',
                'unitId-509': '5',
                'detail-509': 'Detail'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/detail');

        // Use the back button here to go back to the substances page
        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Attempt continue with an invalid release redirects back to same page
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-509': '10',
                'unitId-509': null,
                'continue': 'Continue'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Allow exit back to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-509': '10',
                'unitId-509': '5',
                'continue': 'Continue'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Test removal of substance
        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'value-509': '10',
                'unitId-509': '5',
                'delete-509': 'Delete'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air/remove');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/releases/air/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/releases/air');

        response = await Common.server().inject({
            method: 'GET',
            url: '/releases/air',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Test logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });

});

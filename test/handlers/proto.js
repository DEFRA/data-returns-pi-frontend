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

experiment('Proto test', () => {

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

    test('Test logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });
});

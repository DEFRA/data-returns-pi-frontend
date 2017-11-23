'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const experiment = lab.experiment;
const expect = Code.expect;
const before = lab.before;
const after = lab.after;
const test = lab.test;

const server = require('../../src/lib/server');

experiment('Releases', function () {

    test('Login', () => {
        // Login to the server as user1
        server.server.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: '1@email.com',
                password: 'a'
            }
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/login');
        });
    });

    test('Select a permit', () => {
    // Login to the server as user1
        server.server.inject({
            method: 'POST',
            url: '/select-permit',
            payload: {
                'eaId': '100311'
            }
        }, function (response) {
            expect(response.statusCode).to.equal(302);
            expect(response.headers.location).to.equal('/task-list');
        });
    });

    test('Confirmation - no release to air', () => {
        server.server.inject({
            method: 'GET',
            url: '/releases/air/confirm'
        }, function (response) {
            expect(response.headers.location).to.equal('/releases/air/confirm');
            expect(response.statusCode).to.equal(302);
        });
    });

    after(() => {
        server.server.inject({
            method: 'GET',
            url: '/logout'
        }, function (response) {
            expect(response.statusCode).to.equal(302);
        });
    });
});

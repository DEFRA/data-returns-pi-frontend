'use strict';

const Common = require('./common');
// const server = Common.server;

const Lab = require('lab');
const lab = exports.lab = Lab.script();
// const Code = require('code');

const experiment = lab.experiment;
// const expect = Code.expect;
const test = lab.test;

const before = lab.before;
const after = lab.after;

experiment('Proto test', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login();
    });

    test('Test logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });
});

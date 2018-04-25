'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const experiment = lab.experiment;
const test = lab.test;
const before = lab.before;
const after = lab.after;

const naceAndNose = require('./scripts/nace_and_nose');
const releases = require('./scripts/releases');
// const transfers = require('./scripts/transfers');

const Runner = require('./runner');

experiment('Auto-tests', () => {

    before(async () => {
        return Runner.start();
    });

    test('Nace and nose codes', async () => {
        await Runner.run(naceAndNose);
    });

    test('Releases', async () => {
        await Runner.run(releases);
    });

    // test('Transfers', async () => {
    //     await Runner.run(transfers);
    // });

    after(async () => {
        return Runner.stop();
    });
});

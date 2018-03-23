'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const experiment = lab.experiment;
const test = lab.test;
const before = lab.before;
const after = lab.after;

const journey = require('./scripts/journey');

const Runner = require('./runner');

experiment('Auto-tests', () => {

    before(async () => {
        return Runner.start();
    });

    test('User Journey', async () => {
        await Runner.run(journey);
    });

    after(async () => {
        return Runner.stop();
    });
});

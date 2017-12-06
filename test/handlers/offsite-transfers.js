'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
// const getCookies = require('./common').getCookies;

const experiment = lab.experiment;
const expect = Code.expect;
const test = lab.test;

// const server = require('../../src/lib/server');
const findOffSiteTransfer = require('../../src/lib/validator').findOffSiteTransfer;

experiment('Off-site transfers', async () => {

    test('Find off-site transfers', () => {
        const tasks = {};

        tasks.offSiteTransfers = [
            {
                ewc: {
                    activityId: 1,
                    chapterId: 1,
                    subChapterId: 1342
                },
                wfd: {
                    disposalId: 5,
                    recoveryId: null
                },
                value: 236.89
            },

            {
                ewc: {
                    activityId: 1,
                    chapterId: 2,
                    subChapterId: 1342
                },
                wfd: {
                    disposalId: 1,
                    recoveryId: 4
                },
                value: 236.89
            }
        ];

        const rest1 = findOffSiteTransfer(tasks, {
            ewc: {
                activityId: 1,
                chapterId: 2,
                subChapterId: 1342
            },
            wfd: {
                disposalId: 1,
                recoveryId: 4
            },
            value: 236.89
        });

        expect(rest1).to.equal(1);

        const rest2 = findOffSiteTransfer(tasks, {
            ewc: {
                activityId: 9,
                chapterId: 2,
                subChapterId: 1342
            },
            wfd: {
                disposalId: 1,
                recoveryId: 4
            },
            value: 236.89
        });

        expect(rest2).to.equal(-1);

    });

});

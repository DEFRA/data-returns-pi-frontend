'use strict';

/**
 * Task list library test module
 */
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = lab.expect;

const tasklistLib = require('../../../src/lib/task-list');
const allSectorsTaskList = require('../../../src/model/all-sectors/task-list');

const resultInclude = {
    stages: [
        {
            heading: 'Report your data',
            items: [
                {
                    name: 'RELEASES_TO_AIR',
                    title: 'Releases to air',
                    page: '/air'
                },
                {
                    name: 'RELEASES_TO_LAND',
                    title: 'Releases to land',
                    page: '/land'
                },
                {
                    name: 'RELEASES_TO_CONTROLLED_WATERS',
                    title: 'Releases to controlled waters',
                    page: '/controlledWaters'
                }
            ]
        },
        {
            heading: 'Check and submit your report',
            items: [
                {
                    name: 'SUBMIT',
                    title: 'Submit your report',
                    page: '/submit'
                }
            ]
        }
    ]
};

const resultExclude = {
    stages: [
        {
            heading: 'Check your details',
            items: [
                {
                    name: 'CONTACT',
                    title: 'Your contact details',
                    page: '/contact'
                },
                {
                    name: 'SITE',
                    title: 'Your site codes',
                    page: '/site'
                }
            ]
        }
    ]
};

const resultStatus = {
    stages: [
        {
            heading: 'Check your details',
            items: [
                {
                    name: 'CONTACT',
                    title: 'Your contact details',
                    page: '/contact'
                },
                {
                    name: 'SITE',
                    title: 'Your site codes',
                    page: '/site',
                    status: 'Completed'
                }
            ]
        }
    ]
};

const testSet = ['RELEASES_TO_AIR', 'RELEASES_TO_LAND', 'RELEASES_TO_CONTROLLED_WATERS', 'SUBMIT'];

describe('Testing task list library', () => {

    it('Testing include function', (done) => {
        expect(tasklistLib.include(allSectorsTaskList, testSet)).to.equal(resultInclude);
        done();
    });

    it('Testing exclude function', (done) => {
        expect(tasklistLib.exclude(allSectorsTaskList, testSet)).to.equal(resultExclude);
        done();
    });

    it('Testing add status function', (done) => {
        expect(tasklistLib.status(resultExclude, 'SITE', 'Completed')).to.equal(resultStatus);
        done();
    });

    it('Testing remove status function', (done) => {
        expect(resultExclude).to.equal(tasklistLib.status(resultStatus, 'SITE', 'Completed'));
        done();
    });

});

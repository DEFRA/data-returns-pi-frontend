'use strict';

/**
 * Task list library test module
 */
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const _ = require('lodash');

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const tasklistLib = require('../../../src/service/task-list');
const allSectorsTaskList = require('../../../src/model/all-sectors/task-list');

const resultInclude = {

    name: 'test',
    newTasksObject: () => {},

    stages: [
        {
            heading: 'Report your data',
            items: [
                {
                    name: 'RELEASES_TO_AIR',
                    pathParam: 'air',
                    title: 'Releases to air',
                    page: '/releases/air'
                },

                {
                    name: 'RELEASES_TO_LAND',
                    pathParam: 'land',
                    title: 'Releases to land',
                    page: '/releases/land'
                },

                {
                    name: 'RELEASES_TO_CONTROLLED_WATERS',
                    pathParam: 'water',
                    title: 'Releases to controlled waters',
                    page: '/releases/water'
                }
            ]
        },
        {
            heading: 'Check and submit your report',
            items: [
                {
                    name: 'SUBMIT',
                    pathParam: 'submit',
                    title: 'Submit your report',
                    page: '/submit'
                }
            ]
        }
    ]
};

const resultExclude = {

    name: 'test',
    newTasksObject: () => {},

    stages: [
        {
            heading: 'Check your details',
            items: [
                {
                    name: 'CONTACT',
                    pathParam: 'contact',
                    title: 'Your contact details',
                    page: '/contact'
                },

                {
                    name: 'SITE',
                    pathParam: 'site',
                    title: 'Your site codes',
                    page: '/site'
                }
            ]
        }
    ]
};

const resultStatus = {

    name: 'test',
    newTasksObject: () => {},

    stages: [
        {
            heading: 'Check your details',
            items: [
                {
                    name: 'CONTACT',
                    pathParam: 'contact',
                    title: 'Your contact details',
                    page: '/contact'
                },

                {
                    name: 'SITE',
                    pathParam: 'site',
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

    it('Testing include function', () => {
        expect(tasklistLib.include(allSectorsTaskList, testSet).stages).to.equal(resultInclude.stages);
    });

    it('Testing exclude function', () => {
        expect(tasklistLib.exclude(allSectorsTaskList, testSet).stages).to.equal(resultExclude.stages);
    });

    it('Testing names function', () => {
        expect(tasklistLib.names(resultStatus)).to.equal(['CONTACT', 'SITE']);
    });

    it('Testing map function', () => {
        expect(tasklistLib.mapByPathParameter(resultStatus)).to.be.not.null();
        expect(tasklistLib.mapByPathParameter(resultStatus).get('contact').name).to.equal('CONTACT');
        expect(tasklistLib.mapByName(resultStatus)).to.be.not.null();
        expect(tasklistLib.mapByName(resultStatus).get('SITE').name).to.equal('SITE');
    });

});

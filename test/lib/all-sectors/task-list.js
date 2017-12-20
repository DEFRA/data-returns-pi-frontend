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

    // The name of the task list
    name: 'test',

    // Three stages
    stages: [

        {
            heading: 'Report your data',
            items: [

                {
                    name: 'OFFSITE_TRANSFERS_IN_WASTE_WATER',
                    pathParam: 'waste-water',
                    title: 'Off-site transfers in waste water',
                    page: '/releases/waste-water'
                },

                {
                    name: 'OFFSITE_WASTE_TRANSFERS',
                    pathParam: 'off-site',
                    title: 'Off-site waste transfers',
                    page: '/transfers/off-site'
                },

                {
                    name: 'OVERSEAS_WASTE_TRANSFERS',
                    pathParam: 'overseas',
                    title: 'Overseas waste transfers',
                    page: '/transfers/overseas'
                }

            ]
        },

        {
            heading: 'Check and submit your report',
            items: [

                {
                    name: 'CHECK',
                    pathParam: 'check',
                    title: 'Check your data',
                    page: '/check'
                },

                {
                    name: 'SHARE',
                    pathParam: 'share',
                    title: 'Share your data',
                    page: '/share'
                }

            ]
        }
    ]
};

const resultStatus = {

    name: 'test',

    stages: [
        {
            heading: 'Report your data',
            items: [

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
        }
    ]
};

describe('Testing task list library', () => {

    it('Testing names function', () => {
        expect(tasklistLib.names(resultStatus)).to.equal(['RELEASES_TO_LAND', 'RELEASES_TO_CONTROLLED_WATERS']);
    });

    it('Testing map function', () => {
        expect(tasklistLib.mapByPathParameter(resultStatus)).to.be.not.null();
        expect(tasklistLib.mapByPathParameter(resultStatus).get('land').name).to.equal('RELEASES_TO_LAND');
        expect(tasklistLib.mapByName(resultStatus)).to.be.not.null();
        expect(tasklistLib.mapByName(resultStatus).get('RELEASES_TO_CONTROLLED_WATERS').name).to.equal('RELEASES_TO_CONTROLLED_WATERS');
    });

});

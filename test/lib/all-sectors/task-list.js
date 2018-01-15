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

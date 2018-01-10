'use strict';

/**
 * Master data test module using API
 * This will only run where NODE_ENV=local - The API needs to be running
 */
const Lab = require('lab');
const Code = require('code');

const MasterDataService = require('../../src/service/master-data');

const lab = exports.lab = Lab.script();
const experiment = lab.experiment;
const test = lab.test;

const expect = Code.expect;

experiment('Master data service (API)', async () => {

    if (process.env.NODE_ENV === 'local') {
        test('getEaIds ()', async () => {
            const eaIds = await MasterDataService.getEaIds();
            expect(eaIds).to.be.an.array();
        });

        test('getEaIdFromEaIdId ()', async () => {
            const eaIds = await MasterDataService.getEaIds();
            const eaId = await MasterDataService.getEaIdFromEaIdId(eaIds[4].id);
            expect(eaId).to.be.equal(eaIds[4]);
        });

        test('getUnits ()', async () => {
            const units = await MasterDataService.getUnits();
            expect(units).to.be.an.array();
        });

        test('getUnitById ()', async () => {
            const units = await MasterDataService.getUnits();
            const unit = await MasterDataService.getUnitById(units[4].id);
            expect(unit).to.be.equal(units[4]);
        });
    }
});

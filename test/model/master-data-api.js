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

        test('getMethods', async () => {
            const methods = await MasterDataService.getMethods();
            expect(methods).to.be.an.array();
            expect(methods.length).to.equal(3);
        });

        test('getMethodById(id)', async () => {
            const method = await MasterDataService.getMethodById(1);
            expect(method).to.be.an.object();
            expect(method.name).to.equal('Measurement');
        });

        test('getTransferOperations', async () => {
            const methods = await MasterDataService.getTransferOperations();
            expect(methods).to.be.an.array();
            expect(methods.length).to.equal(2);
        });

        test('getTransferOperationById(id)', async () => {
            const method = await MasterDataService.getTransferOperationById(1);
            expect(method).to.be.an.object();
            expect(method.name).to.equal('Disposal');
        });

        test('getEwcActivityById(id)', async () => {
            const activity = await MasterDataService.getEwcActivityById(1);
            expect(activity).to.be.an.object();
            expect(activity.id).to.equal(1);
        });

        test('getEwcChapterById(id)', async () => {
            const chapter = await MasterDataService.getEwcChapterById(1);
            expect(chapter).to.be.an.object();
            expect(chapter.id).to.equal(1);
        });

        test('getEwcSubChapterById(id)', async () => {
            const subChapter = await MasterDataService.getEwcSubChapterById(1);
            expect(subChapter).to.be.an.object();
            expect(subChapter.id).to.equal(1);
        });

        /*
         * test('getEwcSubchapter()', async () => {
         *   const ewc = await MasterDataService.getEwc('01', '01', '01');
         *   expect(ewc).to.be.an.object();
         *   expect(ewc.activityId).to.equal(1);
         *   expect(ewc.chapterId).to.equal(1);
         *   expect(ewc.subChapterId).to.equal(1342);
         * });
         */

        /*
         * test('getEwcActivity(): none', async () => {
         *   const ewc = await MasterDataService.getEwc('ff');
         *   expect(ewc).to.be.null();
         * });
         *
         * test('getEwcChapter(): none', async () => {
         *   const ewc = await MasterDataService.getEwc('ff', 'ff');
         *   expect(ewc).to.be.null();
         * });
         *
         * test('getEwcSubchapter(): none', async () => {
         *   const ewc = await MasterDataService.getEwc('ff', 'ff', 'ff');
         *   expect(ewc).to.be.null();
         * });
         */

    }
});

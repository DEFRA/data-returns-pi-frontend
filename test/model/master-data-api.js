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
            expect(eaId.siteId).to.be.not.null();
        });

        test('getSiteForEaIdId (eaIdId)', async () => {
            const eaIds = await MasterDataService.getEaIds();
            const site = await MasterDataService.getSiteForEaIdId(eaIds[4].id);
            expect(site).to.be.an.object();
            expect(site.name).to.be.not.null();

            const na = await MasterDataService.getSiteForEaIdId(-87);
            expect(na).to.be.null();
        });

        test('getSites()', async () => {
            const sites = await MasterDataService.getSites();
            expect(sites).to.be.an.array();
        });

        test('getSiteById(id)', async () => {
            const sites = await MasterDataService.getSites();
            const site = await MasterDataService.getSiteById(sites[0].id);
            expect(site).to.be.an.object();
            expect(site.name).to.be.not.null();
        });

        test('getSitesForEaIdIds (eaIdIds)', async () => {
            const eaIds = await MasterDataService.getEaIds();
            const sites = await MasterDataService.getSitesForEaIdIds([ eaIds[0].id, eaIds[1].id, eaIds[2].id ]);
            expect(sites).to.be.an.array();
            expect(sites[0].id).to.be.not.null();

            const na = await MasterDataService.getSitesForEaIdIds([-34, -35, -36]);
            expect(na).to.be.null();
        });

        test('getSubstances(\'RELEASES_TO_AIR\')', async () => {
            const substances1 = await MasterDataService.getSubstances('RELEASES_TO_AIR');
            expect(substances1).to.be.an.array();
            const substances2 = await MasterDataService.getSubstances('RELEASES_TO_AIR');
            expect(substances2).to.be.an.array();
            expect(substances1.length).to.equal(substances2.length);
        });

        test('getSubstances(\'RELEASES_TO_LAND\')', async () => {
            const substances = await MasterDataService.getSubstances('RELEASES_TO_LAND');
            expect(substances).to.be.an.array();
        });

        test('getSubstances(\'RELEASES_TO_CONTROLLED_WATERS\')', async () => {
            const substances = await MasterDataService.getSubstances('RELEASES_TO_CONTROLLED_WATERS');
            expect(substances).to.be.an.array();
        });

        test('getSubstances(\'OFFSITE_TRANSFERS_IN_WASTE_WATER\')', async () => {
            const substances = await MasterDataService.getSubstances('OFFSITE_TRANSFERS_IN_WASTE_WATER');
            expect(substances).to.be.an.array();
        });

        test('getSubstances() - routes differ', async () => {
            const ww = await MasterDataService.getSubstances('OFFSITE_TRANSFERS_IN_WASTE_WATER');
            const air = await MasterDataService.getSubstances('RELEASES_TO_AIR');
            expect(ww).to.not.equal(air);
        });

        test('getSubstanceById(id)', async () => {
            const substance = await MasterDataService.getSubstanceById(504);
            expect(substance).to.be.an.object();
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

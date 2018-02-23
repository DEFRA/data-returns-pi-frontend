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

        test('getSubstances(\'RELEASES_TO_AIR\')', async () => {
            const substances1 = await MasterDataService.getSubstances('RELEASES_TO_AIR');
            expect(substances1).to.be.an.array();
            const substances2 = await MasterDataService.getSubstances('RELEASES_TO_AIR');
            expect(substances2).to.be.an.array();
            expect(substances1.length).to.equal(substances2.length);
            console.log('Releases to air: ' + substances1.length);
        });

        test('getSubstances(\'RELEASES_TO_LAND\')', async () => {
            const substances = await MasterDataService.getSubstances('RELEASES_TO_LAND');
            expect(substances).to.be.an.array();
            console.log('Releases to land: ' + substances.length);
        });

        test('getSubstances(\'RELEASES_TO_CONTROLLED_WATERS\')', async () => {
            const substances = await MasterDataService.getSubstances('RELEASES_TO_CONTROLLED_WATERS');
            expect(substances).to.be.an.array();
            console.log('Releases to controlled waters: ' + substances.length);
        });

        test('getSubstances(\'OFFSITE_TRANSFERS_IN_WASTE_WATER\')', async () => {
            const substances = await MasterDataService.getSubstances('OFFSITE_TRANSFERS_IN_WASTE_WATER');
            expect(substances).to.be.an.array();
            console.log('Off-site transfers in waste water: ' + substances.length);
        });

        test('getSubstances() - routes differ', async () => {
            const ww = await MasterDataService.getSubstances('OFFSITE_TRANSFERS_IN_WASTE_WATER');
            const air = await MasterDataService.getSubstances('RELEASES_TO_AIR');
            expect(ww).to.not.equal(air);
        });

        test('getSubstanceById(id)', async () => {
            const substances = await MasterDataService.getSubstances();
            const substance = await MasterDataService.getSubstanceById(substances[0].id);
            expect(substance).to.equal(substances[0]);
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

        test('getEwc()', async () => {
            const ewc = await MasterDataService.getEwc('01', '01', '01');
            expect(ewc).to.be.an.object();
            expect(ewc.activityId).to.equal(1);
            expect(ewc.chapterId).to.equal(1);
            expect(ewc.subChapterId).to.equal(1);
        });

        test('getEwc(): none', async () => {
            const ewc = await MasterDataService.getEwc('ff');
            expect(ewc).to.be.null();
        });

        test('getEwc(): none', async () => {
            const ewc = await MasterDataService.getEwc('ff', 'ff');
            expect(ewc).to.be.null();
        });

        test('getEwc(): none', async () => {
            const ewc = await MasterDataService.getEwc('ff', 'ff', 'ff');
            expect(ewc).to.be.null();
        });

        test('getDisposalCode()', async () => {
            const disposal = await MasterDataService.getDisposalCode('D1');
            expect(disposal).to.be.an.object();
            expect(disposal.code).to.to.equal('D1');
            const disposal2 = await MasterDataService.getDisposalById(disposal.id);
            expect(disposal2).to.to.equal(disposal);
        });

        test('getRecoveryCode()', async () => {
            const recovery = await MasterDataService.getRecoveryCode('R1');
            expect(recovery).to.be.an.object();
            expect(recovery.code).to.to.equal('R1');
            const recovery2 = await MasterDataService.getRecoveryById(recovery.id);
            expect(recovery2).to.to.equal(recovery);
        });

        test('getNoseActivityClasses()', async () => {
            const noseActivityClasses = await MasterDataService.getNoseActivityClasses();
            expect(noseActivityClasses).to.be.an.array();
        });

        test('getNoseActivityClassById()', async () => {
            const noseActivityClasses = await MasterDataService.getNoseActivityClasses();
            const noseActivityClass = await MasterDataService.getNoseActivityClassById(noseActivityClasses[1].id);
            expect(noseActivityClass).to.equal(noseActivityClasses[1]);
        });

        test('getNoseActivities()', async () => {
            const noseActivities = await MasterDataService.getNoseActivities();
            expect(noseActivities).to.be.an.array();
        });

        test('getNoseActivitiyById()', async () => {
            const noseActivities = await MasterDataService.getNoseActivities();
            const noseActivitiy = await MasterDataService.getNoseActivityById(noseActivities[1].id);
            expect(noseActivitiy).to.equal(noseActivities[1]);
        });

        test('getNoseProcesses()', async () => {
            const noseProcesses = await MasterDataService.getNoseProcesses();
            expect(noseProcesses).to.be.an.array();
        });

        test('getNoseProcessesById()', async () => {
            const noseProcesses = await MasterDataService.getNoseProcesses();
            const noseProcess = await MasterDataService.getNoseProcessById(noseProcesses[1].id);
            expect(noseProcess).to.equal(noseProcesses[1]);
        });

        test('getEprtrActivities()', async () => {
            const eprtrActivities = await MasterDataService.getEprtrActivities();
            expect(eprtrActivities).to.be.an.array();
        });

        test('geEprtrActivitiyById()', async () => {
            const eprtrActivities = await MasterDataService.getEprtrActivities();
            const noseActivitiy = await MasterDataService.getEprtrActivityById(eprtrActivities[1].id);
            expect(noseActivitiy).to.equal(eprtrActivities[1]);
        });

        test('getEprtrSectors()', async () => {
            const eprtrSectors = await MasterDataService.getEprtrSectors();
            expect(eprtrSectors).to.be.an.array();
        });

        test('getEprtrSectorById()', async () => {
            const eprtrSectors = await MasterDataService.getEprtrSectors();
            const eprtrSector = await MasterDataService.getEprtrSectorById(eprtrSectors[1].id);
            expect(eprtrSector).to.equal(eprtrSectors[1]);
        });

        test('getNaceSections:', async () => {
            const naceSectors = await MasterDataService.getNaceSections();
            expect(naceSectors).to.be.an.array();
        });

        test('getNaceSectionById:', async (id) => {
            const naceSectors = await MasterDataService.getNaceSections();
            const naceSector = await MasterDataService.getNaceSectionById(naceSectors[2].id);
            expect(naceSector).to.equal(naceSectors[2]);
        });

        test('getNaceDivisions:', async () => {
            const naceDivisions = await MasterDataService.getNaceDivisions();
            expect(naceDivisions).to.be.an.array();
         });

        test('getNaceDivisionById:', async () => {
            const naceDivisions = await MasterDataService.getNaceDivisions();
            const naceDivision = await MasterDataService.getNaceDivisionById(naceDivisions[2].id);
            expect(naceDivision).to.equal(naceDivisions[2]);
        });

        test('getNaceGroups:', async () => {
            const naceGroups = await MasterDataService.getNaceGroups();
            expect(naceGroups).to.be.an.array();
        });

        test('getNaceGroupById:', async () => {
            const naceGroups = await MasterDataService.getNaceGroups();
            const naceGroup = await MasterDataService.getNaceGroupById(naceGroups[2].id);
            expect(naceGroup).to.equal(naceGroups[2]);
        });

        test('getNaceClasses:', async () => {
            const naceClasses = await MasterDataService.getNaceClasses();
            expect(naceClasses).to.be.an.array();
          console.log(JSON.stringify(naceClasses, null, 4));
        });

        test('getNaceClassById:', async () => {
            const naceClasses = await MasterDataService.getNaceClasses();
            const naceClass = await MasterDataService.getNaceClassById(naceClasses[2].id);
            expect(naceClass).to.equal(naceClasses[2]);
        });

    }
});

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

    test('getParameterById(id)', async () => {
        const substances = await MasterDataService.getParameters();
        const substance = await MasterDataService.getParameterById(substances[0].id);
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

    test('getEwcChapters', async () => {
        const chapters = await MasterDataService.getEwcChapters();
        expect(chapters).to.be.an.array();
        // console.log(JSON.stringify(chapters, null, 4));
    });

    test('getEwcChapterById(id)', async () => {
        const chapter = await MasterDataService.getEwcChapterById(1);
        expect(chapter).to.be.an.object();
        expect(chapter.id).to.equal(1);
    });

    test('getEwcSubchapters', async () => {
        const subchapters = await MasterDataService.getEwcSubchapters();
        expect(subchapters).to.be.an.array();
        // console.log(JSON.stringify(subchapters, null, 4));
    });

    test('getEwcSubChapterById(id)', async () => {
        const subChapter = await MasterDataService.getEwcSubChapterById(1);
        expect(subChapter).to.be.an.object();
        expect(subChapter.id).to.equal(1);
    });

    test('getEwcActivityById(id)', async () => {
        const activity = await MasterDataService.getEwcActivityById(1);
        expect(activity).to.be.an.object();
        expect(activity.id).to.equal(1);
    });

    test('getEwcActivities', async () => {
        const activities = await MasterDataService.getEwcActivities();
        expect(activities).to.be.an.array();
        // console.log(JSON.stringify(activities, null, 4));
    });

    test('getEwcHierarchies()', async () => {
        const ewcHierarchy = await MasterDataService.getEwcHierarchies();
        expect(ewcHierarchy).to.be.an.array();
        // console.log(JSON.stringify(ewcHierarchy, null, 4));
    });

    test('getEwcHierarchyByKey()', async () => {
        const ewcHierarchy = await MasterDataService.getEwcHierarchyByKey(20, 110, 830);
        expect(ewcHierarchy).to.be.an.object();
        expect(ewcHierarchy).to.equal({
            'chapterId': 20,
            'subchapterId': 110,
            'activityId': 830
        });
        // console.log(JSON.stringify(ewcHierarchy, null, 4));
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
        // console.log(JSON.stringify(noseActivityClasses, null, 4));
    });

    test('getNoseActivityClassById()', async () => {
        const noseActivityClasses = await MasterDataService.getNoseActivityClasses();
        const noseActivityClass = await MasterDataService.getNoseActivityClassById(noseActivityClasses[1].id);
        expect(noseActivityClass).to.equal(noseActivityClasses[1]);
    });

    test('getNoseActivities()', async () => {
        const noseActivities = await MasterDataService.getNoseActivities();
        expect(noseActivities).to.be.an.array();
        // console.log(JSON.stringify(noseActivities, null, 4));
    });

    test('getNoseActivitiyById()', async () => {
        const noseActivities = await MasterDataService.getNoseActivities();
        const noseActivitiy = await MasterDataService.getNoseActivityById(noseActivities[1].id);
        expect(noseActivitiy).to.equal(noseActivities[1]);
    });

    test('getNoseProcesses()', async () => {
        const noseProcesses = await MasterDataService.getNoseProcesses();
        expect(noseProcesses).to.be.an.array();
        // console.log(JSON.stringify(noseProcesses, null, 4));
    });

    test('getNoseProcessesById()', async () => {
        const noseProcesses = await MasterDataService.getNoseProcesses();
        const noseProcess = await MasterDataService.getNoseProcessById(noseProcesses[1].id);
        expect(noseProcess).to.equal(noseProcesses[1]);
    });

    test('getNoseHierarchies()', async () => {
        const noseHierarchy = await MasterDataService.getNoseHierarchies();
        // console.log(JSON.stringify(noseHierarchy, null, 4));
        expect(noseHierarchy).to.be.an.array();
    });

    test('getNoseHierarchyByKey()', async () => {
        const noseHierarchy = await MasterDataService.getNoseHierarchyByKey(2, 1, 17);
        expect(noseHierarchy).to.be.an.object();
        expect(noseHierarchy).to.equal({
            'activityClassId': 2,
            'activityId': 1,
            'processId': 17
        });
        // console.log(JSON.stringify(noseHierarchy, null, 4));
    });

    test('getEprtrActivities()', async () => {
        const eprtrActivities = await MasterDataService.getEprtrActivities();
        expect(eprtrActivities).to.be.an.array();
        // console.log(JSON.stringify(eprtrActivities, null, 4));
    });

    test('geEprtrActivitiyById()', async () => {
        const eprtrActivities = await MasterDataService.getEprtrActivities();
        const noseActivitiy = await MasterDataService.getEprtrActivityById(eprtrActivities[1].id);
        expect(noseActivitiy).to.equal(eprtrActivities[1]);
    });

    test('getEprtrSectors()', async () => {
        const eprtrSectors = await MasterDataService.getEprtrSectors();
        expect(eprtrSectors).to.be.an.array();
        // console.log(JSON.stringify(eprtrSectors, null, 4));
    });

    test('getEprtrHierarchy()', async () => {
        const eprtrHierarchy = await MasterDataService.getEprtrHierarchy();
        expect(eprtrHierarchy).to.be.an.array();
        // console.log(JSON.stringify(eprtrHierarchy, null, 4));
    });

    test('getEprtrHierarchyByKey()', async () => {
        const eprtrHierarchy = await MasterDataService.getEprtrHierarchyByKey(2, 21);
        expect(eprtrHierarchy).to.be.an.object();
        expect(eprtrHierarchy).to.equal({
            'sectorId': 2,
            'activityId': 21
        });
        // console.log(JSON.stringify(eprtrHierarchy, null, 4));
    });

    test('getEprtrSectorById()', async () => {
        const eprtrSectors = await MasterDataService.getEprtrSectors();
        const eprtrSector = await MasterDataService.getEprtrSectorById(eprtrSectors[1].id);
        expect(eprtrSector).to.equal(eprtrSectors[1]);
    });

    test('getNaceSections:', async () => {
        const naceSectors = await MasterDataService.getNaceSections();
        expect(naceSectors).to.be.an.array();
        // console.log(JSON.stringify(naceSectors, null, 4));
    });

    test('getNaceSectionById:', async (id) => {
        const naceSectors = await MasterDataService.getNaceSections();
        const naceSector = await MasterDataService.getNaceSectionById(naceSectors[2].id);
        expect(naceSector).to.equal(naceSectors[2]);
    });

    test('getNaceDivisions:', async () => {
        const naceDivisions = await MasterDataService.getNaceDivisions();
        expect(naceDivisions).to.be.an.array();
        // console.log(JSON.stringify(naceDivisions, null, 4));
    });

    test('getNaceDivisionById:', async () => {
        const naceDivisions = await MasterDataService.getNaceDivisions();
        const naceDivision = await MasterDataService.getNaceDivisionById(naceDivisions[2].id);
        expect(naceDivision).to.equal(naceDivisions[2]);
    });

    test('getNaceGroups:', async () => {
        const naceGroups = await MasterDataService.getNaceGroups();
        expect(naceGroups).to.be.an.array();
        // console.log(JSON.stringify(naceGroups, null, 4));
    });

    test('getNaceGroupById:', async () => {
        const naceGroups = await MasterDataService.getNaceGroups();
        const naceGroup = await MasterDataService.getNaceGroupById(naceGroups[2].id);
        expect(naceGroup).to.equal(naceGroups[2]);
    });

    test('getNaceClasses:', async () => {
        const naceClasses = await MasterDataService.getNaceClasses();
        expect(naceClasses).to.be.an.array();
        // console.log(JSON.stringify(naceClasses, null, 4));
    });

    test('getNaceClassById:', async () => {
        const naceClasses = await MasterDataService.getNaceClasses();
        const naceClass = await MasterDataService.getNaceClassById(naceClasses[2].id);
        expect(naceClass).to.equal(naceClasses[2]);
    });

    test('getNaceClassByCode:', async () => {
        const naceClasses = await MasterDataService.getNaceClasses();
        const naceClass = await MasterDataService.getNaceClassByCode(naceClasses[2].code);
        expect(naceClass).to.equal(naceClasses[2]);
    });

    test('getNaceHierarchies()', async () => {
        const naceHierarchy = await MasterDataService.getNaceHierarchy();
        expect(naceHierarchy).to.be.an.array();
        // console.log(JSON.stringify(naceHierarchy, null, 4));
    });

    test('getNaceHierarchyByKey()', async () => {
        const naceHierarchy = await MasterDataService.getNaceHierarchyByKey(20, 86, 269, 612);
        expect(naceHierarchy).to.be.an.object();
        // console.log(JSON.stringify(naceHierarchy, null, 4));
        expect(naceHierarchy).to.equal({
            'sectionId': 20,
            'divisionId': 86,
            'groupId': 269,
            'classId': 612
        });
    });

});

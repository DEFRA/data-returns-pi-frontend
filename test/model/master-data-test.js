'use strict';

/**
 * Master data test module
 * This uses test data and only runs where the environment variable NODE_ENV is set to test
 */
const Lab = require('lab');
const Code = require('code');

const MasterDataService = require('../../src/service/master-data');

const lab = exports.lab = Lab.script();
const experiment = lab.experiment;
const test = lab.test;

const expect = Code.expect;

experiment('Master data service (Test data)', function () {

    if (process.env.NODE_ENV === 'localtest') {
        test('getUsers ()', async () => {
            const users = await MasterDataService.getUsers();
            expect(users).to.be.an.array();
        });

        test('getUser (username)', async () => {
            const user = await MasterDataService.getUser('1@email.com');
            expect(user.username).to.equal('1@email.com');

            const user2 = await MasterDataService.getUser('jhagdsg@email.com');
            expect(user2).to.be.null();
        });

        test('getEaIds ()', async () => {
            const eaIds = await MasterDataService.getEaIds();
            expect(eaIds).to.be.an.array();
            expect(eaIds.length).to.equal(20);
        });

        test('getEaIdsForUser (id)', async () => {
            const eaIds = await MasterDataService.getEaIdsForUser(5245);
            expect(eaIds).to.be.an.array();
            expect(eaIds.length).to.equal(5);

            const na = await MasterDataService.getEaIdsForUser(-917678);
            expect(na).to.be.null();
        });

        test('getEaIdFromEaIdId (eaIdId)', async () => {
            const eaId = await MasterDataService.getEaIdFromEaIdId(1);
            expect(eaId).to.be.an.object();
            expect(eaId.name).to.equal('100311');

            const na = await MasterDataService.getEaIdFromEaIdId(-3475);
            expect(na).to.be.null();
        });

        test('getEaIdFromEaId (eaId)', async () => {
            const eaId = await MasterDataService.getEaIdFromEaId('100311');
            expect(eaId).to.be.an.object();
            expect(eaId.name).to.equal('100311');

            const na = await MasterDataService.getEaIdFromEaId('Zip');
            expect(na).to.be.null();
        });

        test('authenticate (username, password) ', async () => {
            const a1 = await MasterDataService.authenticate('1@email.com', 'a');
            expect(a1).to.be.an.object();
            const a2 = await MasterDataService.authenticate('1@email.com', 'b');
            expect(a2).to.be.undefined();
        });

        test('getSubstances()', async () => {
            const substances = await MasterDataService.getSubstances();
            expect(substances).to.be.an.array();
            expect(substances.length).to.equal(179);
        });

        test('getSubstanceById(id)', async () => {
            const substance = await MasterDataService.getSubstanceById(504);
            expect(substance).to.be.an.object();
            expect(substance.name).to.equal('Acrylic acid');
        });

        test('getUnits()', async () => {
            const units = await MasterDataService.getUnits();
            expect(units).to.be.an.array();
            expect(units.length).to.equal(12);
        });

        test('getUnitById(id)', async () => {
            const units = await MasterDataService.getUnitById(1);
            expect(units).to.be.an.object();
            expect(units.name).to.equal('Bq');
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

        test('getEwcSubchapter()', async () => {
            const ewc = await MasterDataService.getEwc('01', '01', '01');
            expect(ewc).to.be.an.object();
            expect(ewc.activityId).to.equal(1342);
            expect(ewc.chapterId).to.equal(1);
            expect(ewc.subChapterId).to.equal(1);
        });

        test('getEwcActivity(): none', async () => {
            const ewc = await MasterDataService.getEwc('ff');
            expect(ewc).to.be.null();
        });

        test('getEwcChapter(): none', async () => {
            const ewc = await MasterDataService.getEwc('ff', 'ff');
            expect(ewc).to.be.null();
        });

        test('getEwcSubchapter(): none', async () => {
            const ewc = await MasterDataService.getEwc('ff', 'ff', 'ff');
            expect(ewc).to.be.null();
        });

        test('getDisposalCode()', async () => {
            const disposal = await MasterDataService.getDisposalCode('D1');
            expect(disposal).to.be.an.object();
            expect(disposal.code).to.to.equal('D1');
        });

        test('getRecoveryCode()', async () => {
            const recovery = await MasterDataService.getRecoveryCode('R1');
            expect(recovery).to.be.an.object();
            expect(recovery.code).to.to.equal('R1');
        });

        test('getEwcActivityById(id)', async () => {
            const activity = await MasterDataService.getEwcActivityById(1342);
            expect(activity).to.be.an.object();
            expect(activity.id).to.equal(1342);
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

        test('getDisposalById(id)', async () => {
            const disposal = await MasterDataService.getDisposalById(1);
            expect(disposal).to.be.an.object();
            expect(disposal.id).to.equal(1);
        });

        test('getRecoveryById(id)', async () => {
            const recovery = await MasterDataService.getRecoveryById(1);
            expect(recovery).to.be.an.object();
            expect(recovery.id).to.equal(1);
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

        test('getNoseActivityById()', async () => {
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

        test('getNoseHierarchies()', async () => {
            const noseProcesses = await MasterDataService.getNoseProcesses();
            const noseProcess = await MasterDataService.getNoseProcessById(noseProcesses[1].id);
            expect(noseProcess).to.equal(noseProcesses[1]);
        });

        test('getNoseHierarchyByKey()', async () => {
            const noseHierarchy = await MasterDataService.getNoseHierarchyByKey(2, 1, 22);
            expect(noseHierarchy).to.be.an.object();
            expect(noseHierarchy).to.equal({
                'activityClassId': 2,
                'activityId': 1,
                'processId': 22
            });
        // console.log(JSON.stringify(noseHierarchy, null, 4));
        });

        test('getEprtrActivities()', async () => {
            const eprtrActivities = await MasterDataService.getEprtrActivities();
            expect(eprtrActivities).to.be.an.array();
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

        test('getEprtrHierarchy()', async () => {
            const eprtrHierarchy = await MasterDataService.getEprtrHierarchy();
            expect(eprtrHierarchy).to.be.an.array();
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
        });

        test('getNaceClassById:', async () => {
            const naceClasses = await MasterDataService.getNaceClasses();
            const naceClass = await MasterDataService.getNaceClassById(naceClasses[2].id);
            expect(naceClass).to.equal(naceClasses[2]);
        });

        test('getNaceHierarchies()', async () => {
            const naceHierarchy = await MasterDataService.getNaceHierarchy();
            expect(naceHierarchy).to.be.an.array();
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
    }
});

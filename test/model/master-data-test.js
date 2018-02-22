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

    }
});

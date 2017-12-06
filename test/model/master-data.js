'use strict';

/**
 * Master data test module
 *
 * By default, lab loads all the '*.js' files inside the local 'test' directory
 *
 */
const Lab = require('lab');
const Code = require('code');

const MasterDataService = require('../../src/service/master-data');

const lab = exports.lab = Lab.script();
const experiment = lab.experiment;
const test = lab.test;

const expect = Code.expect;

experiment('Master data service', function () {

    test('getUsers ()', async () => {
        const users = await MasterDataService.getUsers();
        expect(users).to.be.an.array();
        expect(users.length).to.equal(41);
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
        expect(eaIds.length).to.equal(94);
    });

    test('getEaIdsForUser (id)', async () => {
        const eaIds = await MasterDataService.getEaIdsForUser(5237);
        expect(eaIds).to.be.an.array();
        expect(eaIds.length).to.equal(1);
        expect(eaIds[0].id).to.equal(34);

        const na = await MasterDataService.getEaIdsForUser(-917678);
        expect(na).to.be.null();
    });

    test('getEaIdFromEaIdId (eaIdId)', async () => {
        const eaId = await MasterDataService.getEaIdFromEaIdId(34);
        expect(eaId).to.be.an.object();
        expect(eaId.name).to.equal('AN9123');

        const na = await MasterDataService.getEaIdFromEaIdId(-3475);
        expect(na).to.be.null();
    });

    test('getSiteForEaIdId (eaIdId)', async () => {
        const site = await MasterDataService.getSiteForEaIdId(34);
        expect(site).to.be.an.object();
        expect(site.id).to.equal(9131055256750);

        const na = await MasterDataService.getSiteForEaIdId(-87);
        expect(na).to.be.null();
    });

    test('getSitesForEaIdIds (eaIdIds)', async () => {
        const sites = await MasterDataService.getSitesForEaIdIds([34, 35, 36]);
        expect(sites).to.be.an.array();
        expect(sites[0].id).to.equal(9131055256750);

        const na = await MasterDataService.getSitesForEaIdIds([-34, -35, -36]);
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
        expect(substances.length).to.equal(785);
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

    test('getEwcSubchapter()', async () => {
        const ewc = await MasterDataService.getEwc('01', '01', '01');
        expect(ewc).to.be.an.object();
        expect(ewc.activityId).to.equal(1);
        expect(ewc.chapterId).to.equal(1);
        expect(ewc.subChapterId).to.equal(1342);
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
        const subChapter = await MasterDataService.getEwcSubChapterById(1342);
        expect(subChapter).to.be.an.object();
        expect(subChapter.id).to.equal(1342);
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

});

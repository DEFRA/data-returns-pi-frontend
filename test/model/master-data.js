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

});

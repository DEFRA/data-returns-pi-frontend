'use strict';

const Common = require('./common');

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const experiment = lab.experiment;
const expect = Code.expect;
const test = lab.test;

const before = lab.before;
const after = lab.after;

experiment('Overseas waste transfers', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('1@email.com', 'a');
    });

    test('Select a permit and go to permit list', async () => {
        let response = await Common.server().inject({
            method: 'POST',
            url: '/select-permit',
            headers: {cookie: 'sid=' + Common.sid()},
            payload: {
                eaId: '100311'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        // request the task list
        response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: {cookie: 'sid=' + Common.sid()}
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Confirm overseas transfers = no sends you back to the task list', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post No - expect redirection to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'false'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Add cycle', async () => {
        // request the task list again
        let response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Post No - expect redirection to the task list
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                confirmation: 'true'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/add');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/add-substance');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                substanceId: '506'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/detail');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: '99',
                operationId: '1',
                methodId: '1'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/transportation-co-address');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/transportation-co-address',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/transportation-co-address',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'business-name': 'Druid Wood Limited',
                'address-line-1': 'Howecroft Court',
                'address-line-2': 'Stoke Bishop',
                'town-or-city': 'Bristol',
                'country': 'England'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/destination-address');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/destination-address',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/destination-address',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'business-name': 'Some company',
                'address-line-1': '67 Long Road',
                'address-line-2': 'In Village',
                'town-or-city': 'Barcelona',
                'country': 'Spain'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/check');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Substance invalidation', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: { 'check-0': 'View transfer' }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/check');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: { substanceId: 'not-a-substance' }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/add-substance');

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                substanceId: '506'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/check');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Detail invalidation', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Invalid payload
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: 'not_a_number',
                operationId: '9000'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/detail');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: '99',
                operationId: '1',
                methodId: '1'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/check');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

    });

    test('Transport address invalidation', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Invalid payload
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/transportation-co-address',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'address-line-1': '',
                'address-line-2': '',
                'business-name': '',
                'country': '',
                'town-or-city': ''
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/transportation-co-address');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/transportation-co-address',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/transportation-co-address',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'address-line-1': '56 Ash Tree Close',
                'address-line-2': 'Little Tossingdon',
                'business-name': 'Bee-line',
                'country': 'Endland',
                'town-or-city': 'Barkshire'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/check');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Destination address invalidation', async () => {
        let response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        // Invalid payload
        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/destination-address',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'address-line-1': '',
                'address-line-2': '',
                'business-name': '',
                'country': '',
                'town-or-city': ''
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/destination-address');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/destination-address',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/destination-address',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'address-line-1': '56 Ash Tree Close',
                'address-line-2': 'Little Tossingdon',
                'business-name': 'Bee-line',
                'country': 'Endland',
                'town-or-city': 'Barkshire'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/check');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Add cycle 2', async () => {
        // request the task list again
        let response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/confirm',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/add',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/add-substance');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/add-substance',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                substanceId: '510'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/detail');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/detail',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                value: '234.432',
                operationId: '2',
                methodId: '2'
            }
        });

        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/transportation-co-address');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/transportation-co-address',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/transportation-co-address',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'business-name': 'Smelly Lorries Ltd.',
                'address-line-1': 'Rancid Road',
                'address-line-2': 'Avonmouth',
                'town-or-city': 'Bristol',
                'country': 'England'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/destination-address');

        // request the task list again
        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/destination-address',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/destination-address',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'business-name': 'The Dump',
                'address-line-1': 'The Louvre',
                'address-line-2': '',
                'town-or-city': 'Paris',
                'country': 'France'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/check');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/check',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Delete first', async () => {
        let response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'delete-0': 'Delete'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/remove');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Delete second', async () => {
        let response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/action',
            headers: { cookie: 'sid=' + Common.sid() },
            payload: {
                'delete-0': 'Delete'
            }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/transfers/overseas/remove');

        response = await Common.server().inject({
            method: 'GET',
            url: '/transfers/overseas/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);

        response = await Common.server().inject({
            method: 'POST',
            url: '/transfers/overseas/remove',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(302);
        expect(response.headers.location).to.equal('/task-list');

        response = await Common.server().inject({
            method: 'GET',
            url: '/task-list',
            headers: { cookie: 'sid=' + Common.sid() }
        });
        expect(response.statusCode).to.equal(200);
    });

    test('Logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });

});

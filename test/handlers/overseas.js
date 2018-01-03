'use strict';

const Common = require('./common');

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const steps = Common.steps;

const experiment = lab.experiment;
const test = lab.test;

const before = lab.before;
const after = lab.after;

const check = (id) => {
    const payload = {};
    payload['check-' + id] = 'View transfer';
    return payload;
};

const START_PAGE = { method: 'GET', url: '/', expected: '/' };
const CHOOSE_PERMIT = { method: 'POST', url: '/select-permit', payload: { eaId: '100311' }, expected: '/task-list' };
const TASK_LIST = { method: 'GET', url: '/task-list', expected: '/task-list' };
const CONFIRM_PAGE = { method: 'GET', url: '/transfers/overseas/confirm', expected: '/transfers/overseas/confirm' };
const CONFIRM_NO = { method: 'POST', url: '/transfers/overseas/confirm', payload: { confirmation: 'false' }, expected: '/task-list' };
const CONFIRM_YES = { method: 'POST', url: '/transfers/overseas/confirm', payload: { confirmation: 'true' }, expected: '/transfers/overseas/add-substance' };
const CHOOSE_NO_SUBSTANCE = { method: 'POST', url: '/transfers/overseas/add-substance', payload: { substanceId: null }, expected: '/transfers/overseas/add-substance' };
const CHOOSE_SUBSTANCE = (substanceId) => { return { method: 'POST', url: '/transfers/overseas/add-substance', payload: { substanceId: substanceId }, expected: '/transfers/overseas/detail' }; };
const INVALID_DETAIL = { method: 'POST', url: '/transfers/overseas/detail', payload: { value: 'wqer', operationId: null, methodId: -56 }, expected: '/transfers/overseas/detail' };
const VALID_DETAIL = { method: 'POST', url: '/transfers/overseas/detail', payload: { value: 34, operationId: 1, methodId: 2 }, expected: '/transfers/overseas/transportation-co-address' };
const INVALID_TC_ADDR = { method: 'POST', url: '/transfers/overseas/transportation-co-address', payload: { 'business-name': '', 'address-line-1': 'Druid House', 'address-line-2': 'Stoke Bishop', 'town-or-city': 'Bristol', 'country': 'England' }, expected: '/transfers/overseas/transportation-co-address' };
const VALID_TC_ADDR = { method: 'POST', url: '/transfers/overseas/transportation-co-address', payload: { 'business-name': 'Druid Wood Limited', 'address-line-1': 'Howecroft Court', 'address-line-2': 'Stoke Bishop', 'town-or-city': 'Bristol', 'country': 'England' }, expected: '/transfers/overseas/destination-address' };
const INVALID_DEST_ADDR = { method: 'POST', url: '/transfers/overseas/destination-address', payload: { 'business-name': '', 'address-line-1': '67 Long Road', 'address-line-2': 'In Village', 'town-or-city': 'Barcelona', 'country': 'Spain' }, expected: '/transfers/overseas/destination-address' };
const VALID_DEST_ADDR = { method: 'POST', url: '/transfers/overseas/destination-address', payload: { 'business-name': 'Some company', 'address-line-1': '67 Long Road', 'address-line-2': 'In Village', 'town-or-city': 'Barcelona', 'country': 'Spain' }, expected: '/transfers/overseas/check' };
const CHECK_CONTINUE = { method: 'POST', url: '/transfers/overseas/check', payload: {}, expected: '/transfers/overseas' };

const OVERSEAS = { method: 'GET', url: '/transfers/overseas', expected: '/transfers/overseas' };
const ADD_ANOTHER = { method: 'GET', url: '/transfers/overseas/add', expected: '/transfers/overseas/add-substance' };

// Check modifications
const CHECK = (id) => { return { method: 'POST', url: '/transfers/overseas/action', payload: check(id), expected: '/transfers/overseas/check' }; };
const SUBSTANCE = { method: 'GET', url: '/transfers/overseas/add-substance', expected: '/transfers/overseas/add-substance' };
const CHOOSE_SUBSTANCE2 = (substanceId) => { return { method: 'POST', url: '/transfers/overseas/add-substance', payload: { substanceId: substanceId }, expected: '/transfers/overseas/check' }; };
const DETAIL = { method: 'GET', url: '/transfers/overseas/detail', expected: '/transfers/overseas/detail' };
const VALID_DETAIL2 = { method: 'POST', url: '/transfers/overseas/detail', payload: { value: 99, operationId: 2, methodId: 2 }, expected: '/transfers/overseas/check' };
const TC_ADDR = { method: 'GET', url: '/transfers/overseas/transportation-co-address', expected: '/transfers/overseas/transportation-co-address' };
const DEST_ADDR = { method: 'GET', url: '/transfers/overseas/destination-address', expected: '/transfers/overseas/destination-address' };
const VALID_TC_ADDR2 = { method: 'POST', url: '/transfers/overseas/transportation-co-address', payload: { 'business-name': 'Druid Wood Limited', 'address-line-1': 'Howecroft Court', 'address-line-2': 'Stoke Bishop', 'town-or-city': 'Bristol', 'country': 'England' }, expected: '/transfers/overseas/check' };
const VALID_DEST_ADDR2 = { method: 'POST', url: '/transfers/overseas/destination-address', payload: { 'business-name': 'Some company', 'address-line-1': '67 Long Road', 'address-line-2': 'In Village', 'town-or-city': 'Barcelona', 'country': 'Spain' }, expected: '/transfers/overseas/check' };

const DELETE = { method: 'POST', url: '/transfers/overseas/action', payload: { 'delete-0': 'Delete' }, expected: '/transfers/overseas/remove' };
const DELETE_CONFIRM_1 = { method: 'POST', url: '/transfers/overseas/remove', expected: '/transfers/overseas' };
const DELETE_CONFIRM_2 = { method: 'POST', url: '/transfers/overseas/remove', expected: '/task-list' };

experiment('Overseas transfers', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('1@email.com', 'a');
    });

    test('Select a permit and go to permit list', async () => {
        await steps([ START_PAGE, CHOOSE_PERMIT ]);
    });

    test('Confirm transfers overseas = no sends you back to the task list', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_NO ]);
    });

    test('Confirm transfers overseas = go though the add transfer process', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_YES, CHOOSE_NO_SUBSTANCE, CHOOSE_SUBSTANCE(506), INVALID_DETAIL,
            VALID_DETAIL, INVALID_TC_ADDR, VALID_TC_ADDR, INVALID_DEST_ADDR, VALID_DEST_ADDR, CHECK_CONTINUE ]);
    });

    test('Add another', async () => {
        await steps([ OVERSEAS, ADD_ANOTHER, CHOOSE_SUBSTANCE(512), VALID_DETAIL, VALID_TC_ADDR, VALID_DEST_ADDR, CHECK_CONTINUE ]);
    });

    test('View Transfer and change substance', async () => {
        await steps([ OVERSEAS, CHECK(1), SUBSTANCE, CHOOSE_SUBSTANCE2(518), CHECK_CONTINUE ]);
    });

    test('View Transfer and change detail', async () => {
        await steps([ OVERSEAS, CHECK(1), DETAIL, VALID_DETAIL2, CHECK_CONTINUE ]);
    });

    test('View Transfer and change transportation address', async () => {
        await steps([ OVERSEAS, CHECK(1), TC_ADDR, VALID_TC_ADDR2, CHECK_CONTINUE ]);
    });

    test('View Transfer and change destination address', async () => {
        await steps([ OVERSEAS, CHECK(1), DEST_ADDR, VALID_DEST_ADDR2, CHECK_CONTINUE ]);
    });

    test('Delete transfers', async () => {
        await steps([ OVERSEAS, DELETE, DELETE_CONFIRM_1, DELETE, DELETE_CONFIRM_2 ]);
    });

    test('Test logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });
});

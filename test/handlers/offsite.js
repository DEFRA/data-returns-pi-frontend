'use strict';

const Common = require('./common');

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const steps = Common.steps;

const experiment = lab.experiment;
const test = lab.test;

const before = lab.before;
const after = lab.after;

const START_PAGE = { method: 'GET', url: '/', expected: '/' };
const CHOOSE_PERMIT = { method: 'POST', url: '/select-permit', payload: { eaId: '100311' }, expected: '/task-list' };
const TASK_LIST = { method: 'GET', url: '/task-list', expected: '/task-list' };
const CONFIRM_PAGE = { method: 'GET', url: '/transfers/off-site/confirm', expected: '/transfers/off-site/confirm' };
const CONFIRM_NO = { method: 'POST', url: '/transfers/off-site/confirm', payload: { confirmation: 'false' }, expected: '/task-list' };
const CONFIRM_YES = { method: 'POST', url: '/transfers/off-site/confirm', payload: { confirmation: 'true' }, expected: '/transfers/off-site/add' };
const ADD_INVALID = { method: 'POST', url: '/transfers/off-site/add', payload: { ewc: null, wfd: null, value: 'junk' }, expected: '/transfers/off-site/add' };
const ADD_VALID = { method: 'POST', url: '/transfers/off-site/add', payload: { ewc: '01 01 01', wfd: 'R1', value: 100.88 }, expected: '/transfers/off-site' };
const ADD_ANOTHER = { method: 'GET', url: '/transfers/off-site/add', expected: '/transfers/off-site/add' };
const ADD_DUPLICATE = { method: 'POST', url: '/transfers/off-site/add', payload: { ewc: '01 01 01', wfd: 'R1', value: 455.76 }, expected: '/transfers/off-site/add' };
const CORRECT_DUPLICATE = { method: 'POST', url: '/transfers/off-site/add', payload: { ewc: '01 01 01', wfd: 'R2', value: 455.76 }, expected: '/transfers/off-site' };
const OFFSITE = { method: 'GET', url: '/transfers/off-site', expected: '/transfers/off-site' };
const CHANGE_INVALID = { method: 'POST', url: '/transfers/off-site/action', payload: { 'value-0': 'bad', continue: 'Continue' }, expected: '/transfers/off-site' };
const CHANGE_VALID = { method: 'POST', url: '/transfers/off-site/action', payload: { 'value-0': 221.67, continue: 'Continue' }, expected: '/task-list' };
const DETAIL = { method: 'POST', url: '/transfers/off-site/action', payload: { 'value-0': 221.67, 'detail-0': 'More detail' }, expected: '/transfers/off-site/detail' };
const DETAIL_VALID = { method: 'POST', url: '/transfers/off-site/detail', payload: { value: 56.67 }, expected: '/transfers/off-site' };
const DETAIL_INVALID = { method: 'POST', url: '/transfers/off-site/detail', payload: { value: 'bad' }, expected: '/transfers/off-site/detail' };
const DELETE = { method: 'POST', url: '/transfers/off-site/action', payload: { 'value-0': 0, 'delete-0': 'Delete' }, expected: '/transfers/off-site/remove' };
const DELETE_CONFIRM_1 = { method: 'POST', url: '/transfers/off-site/remove', expected: '/transfers/off-site' };
const DELETE_CONFIRM_2 = { method: 'POST', url: '/transfers/off-site/remove', expected: '/task-list' };

experiment('Off-site transfers', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('1@email.com', 'a');
    });

    test('Select a permit and go to permit list', async () => {
        await steps([ START_PAGE, CHOOSE_PERMIT ]);
    });

    test('Confirm transfers off site = no sends you back to the task list', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_NO ]);
    });

    test('Confirm transfers off site = yes sends you to the add transfer', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_YES ]);
    });

    test('Add an invalid transfer and correct', async () => {
        await steps([ ADD_INVALID, ADD_VALID ]);
    });

    test('Change transfer invalid', async () => {
        await steps([ OFFSITE, CHANGE_INVALID, CHANGE_VALID ]);
    });

    test('Change transfer detail invalid and correct', async () => {
        await steps([ OFFSITE, DETAIL, DETAIL_INVALID, DETAIL_VALID ]);
    });

    test('Add a duplicate transfer detail invalid and correct', async () => {
        await steps([ OFFSITE, ADD_ANOTHER, ADD_DUPLICATE, CORRECT_DUPLICATE ]);
    });

    test('Test delete not confirm', async () => {
        await steps([ OFFSITE, DELETE, OFFSITE ]);
    });

    test('Test delete confirm', async () => {
        await steps([ OFFSITE, DELETE, DELETE_CONFIRM_1, DELETE, DELETE_CONFIRM_2 ]);
    });

    test('Test logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });
});

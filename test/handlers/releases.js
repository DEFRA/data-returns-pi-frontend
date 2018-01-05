'use strict';

const Common = require('./common');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const experiment = lab.experiment;
const test = lab.test;

const before = lab.before;
const after = lab.after;

const steps = Common.steps;

const remove = (substanceId) => {
    const payload = {};
    payload['value-' + substanceId] = 'any';
    payload['unitId-' + substanceId] = 'any';
    payload['delete-' + substanceId] = 'Delete';
    return payload;
};

const detail = (substanceId) => {
    const payload = {};
    payload['value-' + substanceId] = 'any';
    payload['unitId-' + substanceId] = 'any';
    payload['detail-' + substanceId] = 'Detail';
    return payload;
};

const continueInvalid = (substanceId) => {
    const payload = {};
    payload['value-' + substanceId] = 'bad_detail';
    payload['unitId-' + substanceId] = null;
    payload.continue = 'Continue';
    return payload;
};

const continueValid = (substanceId) => {
    const payload = {};
    payload['value-' + substanceId] = '34.7';
    payload['unitId-' + substanceId] = '4';
    payload.continue = 'Continue';
    return payload;
};

const START_PAGE = { method: 'GET', url: '/', expected: '/' };
const CHOOSE_PERMIT = { method: 'POST', url: '/select-permit', payload: { eaId: '100311' }, expected: '/task-list' };
const TASK_LIST = { method: 'GET', url: '/task-list', expected: '/task-list' };
const CONFIRM_PAGE = { method: 'GET', url: '/releases/air/confirm', expected: '/releases/air/confirm' };
const CONFIRM_PAGE2 = { method: 'GET', url: '/releases/air/confirm', expected: '/releases/air' };
const CONFIRM_NO = { method: 'POST', url: '/releases/air/confirm', payload: { confirmation: 'false' }, expected: '/task-list' };
const CONFIRM_YES = { method: 'POST', url: '/releases/air/confirm', payload: { confirmation: 'true' }, expected: '/releases/air/add-substance' };
const RELEASES_AIR = { method: 'GET', url: '/releases/air', expected: '/releases/air' };
const ANOTHER_SUBSTANCE = { method: 'POST', url: '/releases/air/action', payload: { add: 'Add substance' }, expected: '/releases/air/add-substance' };
const CHOOSE_SUBSTANCE = (substanceId) => { return { method: 'POST', url: '/releases/air/add-substance', payload: { substanceId: substanceId }, expected: '/releases/air/detail' }; };
const CHOOSE_NO_SUBSTANCE = { method: 'POST', url: '/releases/air/add-substance', payload: { substanceId: null }, expected: '/releases/air/add-substance' };
const CHOOSE_DETAIL = (value, unitId, methodId) => { return { method: 'POST', url: '/releases/air/detail', payload: { value: value, unitId: unitId, methodId: methodId }, expected: '/releases/air' }; };
const CHOOSE_BAD_DETAIL = { method: 'POST', url: '/releases/air/detail', payload: { value: 'not_a_value', unitId: null, methodId: -8 }, expected: '/releases/air/detail' };
const REMOVE_SUBSTANCE = (substanceId) => { return { method: 'POST', url: '/releases/air/action', payload: remove(substanceId), expected: '/releases/air/remove' }; };
const CONFIRM_REMOVE_YES = { method: 'POST', url: '/releases/air/remove', payload: { confirmation: 'true' }, expected: '/releases/air' };
const CONFIRM_REMOVE_YES_LAST = { method: 'POST', url: '/releases/air/remove', payload: { confirmation: 'true' }, expected: '/task-list' };
const CONFIRM_REMOVE_NO = RELEASES_AIR;
const CHANGE_DETAIL = (substanceId) => { return { method: 'POST', url: '/releases/air/action', payload: detail(substanceId), expected: '/releases/air/detail' }; };
const CONTINUE_INVALID = (substanceId) => { return { method: 'POST', url: '/releases/air/action', payload: continueInvalid(substanceId), expected: '/releases/air' }; };
const CONTINUE_VALID = (substanceId) => { return { method: 'POST', url: '/releases/air/action', payload: continueValid(substanceId), expected: '/task-list' }; };

experiment('Proto test', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('1@email.com', 'a');
    });

    test('Select a permit and go to permit list', async () => {
        await steps([ START_PAGE, CHOOSE_PERMIT ]);
    });

    test('Confirm releases to air = no sends you back to the task list', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_NO ]);
    });

    test('Confirm releases to air = yes sends you to the add substance', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_YES ]);
    });

    test('Add substance', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_YES, CHOOSE_NO_SUBSTANCE, CHOOSE_SUBSTANCE('503'), CHOOSE_BAD_DETAIL, CHOOSE_DETAIL('23.4', 5, 1) ]);
    });

    test('No redirect to add with second substance', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE2, CHOOSE_SUBSTANCE('504'), CHOOSE_BAD_DETAIL, CHOOSE_DETAIL('11.4', 4, 1) ]);
    });

    test('Remove substance', async () => {
        await steps([ RELEASES_AIR, REMOVE_SUBSTANCE('504'), CONFIRM_REMOVE_NO ]);
        await steps([ RELEASES_AIR, REMOVE_SUBSTANCE('504'), CONFIRM_REMOVE_YES ]);
    });

    test('Remove last substance', async () => {
        await steps([ RELEASES_AIR, REMOVE_SUBSTANCE('503'), CONFIRM_REMOVE_YES_LAST ]);
    });

    test('Add another substance', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_YES, CHOOSE_SUBSTANCE('506'), CHOOSE_DETAIL('23.4', 5, 1) ]);
    });

    test('Change detail invalid', async () => {
        await steps([ RELEASES_AIR, CHANGE_DETAIL('506'), CHOOSE_BAD_DETAIL, CHOOSE_DETAIL('11.4', 4, 1) ]);
    });

    test('Change detail from substances page invalid', async () => {
        await steps([ RELEASES_AIR, CONTINUE_INVALID('506') ]);
    });

    test('Change detail from substances page valid', async () => {
        await steps([ RELEASES_AIR, CONTINUE_VALID('506') ]);
    });

    test('Add another 3 substances', async () => {
        await steps([ TASK_LIST, ANOTHER_SUBSTANCE, CHOOSE_SUBSTANCE('511'), CHOOSE_DETAIL('1.4', 1, 1) ]);
        await steps([ TASK_LIST, ANOTHER_SUBSTANCE, CHOOSE_SUBSTANCE('510'), CHOOSE_DETAIL('99.4', 2, 2) ]);
        await steps([ TASK_LIST, ANOTHER_SUBSTANCE, CHOOSE_SUBSTANCE('512'), CHOOSE_DETAIL('88', 3, 2) ]);
    });

    test('Test logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });
});

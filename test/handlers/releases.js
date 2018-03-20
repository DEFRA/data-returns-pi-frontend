'use strict';

const Common = require('./common');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const experiment = lab.experiment;
const test = lab.test;

const before = lab.before;
const after = lab.after;

const steps = Common.steps;

const remove = (parameterId) => {
    const payload = {};
    payload['value-' + parameterId] = 'any';
    payload['unitId-' + parameterId] = 'any';
    payload['delete-' + parameterId] = 'Delete';
    return payload;
};

const detail = (parameterId) => {
    const payload = {};
    payload['value-' + parameterId] = 'any';
    payload['unitId-' + parameterId] = 'any';
    payload['detail-' + parameterId] = 'Detail';
    return payload;
};

const continueInvalid = (parameterId) => {
    const payload = {};
    payload['value-' + parameterId] = 'bad_detail';
    payload['unitId-' + parameterId] = null;
    payload.continue = 'Continue';
    return payload;
};

const continueValid = (parameterId) => {
    const payload = {};
    payload['value-' + parameterId] = '34.7';
    payload['unitId-' + parameterId] = '143';
    payload.continue = 'Continue';
    return payload;
};

const START_PAGE = { id: 'RELEASES_START_PAGE', method: 'GET', url: '/', expected: '/' };
const CHOOSE_PERMIT = { id: 'RELEASES_CHOOSE_PERMIT', method: 'POST', url: '/select-permit', payload: { '12': 'Open' }, expected: '/task-list' };
const TASK_LIST = { id: 'RELEASES_TASK_LIST', method: 'GET', url: '/task-list', expected: '/task-list' };
const CONFIRM_PAGE = { id: 'RELEASES_CONFIRM_PAGE', method: 'GET', url: '/releases/air/confirm', expected: '/releases/air/confirm' };
const CONFIRM_PAGE2 = { id: 'RELEASES_CONFIRM_PAGE2', method: 'GET', url: '/releases/air/confirm', expected: '/releases/air' };
const CONFIRM_NO = { id: 'RELEASES_CONFIRM_NO', method: 'POST', url: '/releases/air/confirm', payload: { confirmation: 'false' }, expected: '/task-list' };
const CONFIRM_YES = { id: 'RELEASES_CONFIRM_YES', method: 'POST', url: '/releases/air/confirm', payload: { confirmation: 'true' }, expected: '/releases/air/add-substance' };
const RELEASES_AIR = { id: 'RELEASES_RELEASES_AIR', method: 'GET', url: '/releases/air', expected: '/releases/air' };
const ANOTHER_SUBSTANCE = { id: 'RELEASES_ANOTHER_SUBSTANCE', method: 'POST', url: '/releases/air/action', payload: { add: 'Add substance' }, expected: '/releases/air/add-substance' };
const CHOOSE_SUBSTANCE = (parameterId) => { return { id: 'RELEASES_CHOOSE_SUBSTANCE', method: 'POST', url: '/releases/air/add-substance', payload: { parameterId: parameterId }, expected: '/releases/air/detail' }; };
const CHOOSE_NO_SUBSTANCE = { id: 'RELEASES_CHOOSE_NO_SUBSTANCE', method: 'POST', url: '/releases/air/add-substance', payload: { parameterId: null }, expected: '/releases/air/add-substance' };
const CHOOSE_DETAIL = (value, unitId, methodId) => { return { id: 'RELEASES_CHOOSE_DETAIL', method: 'POST', url: '/releases/air/detail', payload: { value: value, unitId: unitId, methodId: methodId }, expected: '/releases/air' }; };
const CHOOSE_BAD_DETAIL = { id: 'RELEASES_CHOOSE_BAD_DETAIL', method: 'POST', url: '/releases/air/detail', payload: { value: 'not_a_value', unitId: null, methodId: -8 }, expected: '/releases/air/detail' };
const REMOVE_SUBSTANCE = (parameterId) => { return { id: 'RELEASES_REMOVE_SUBSTANCE', method: 'POST', url: '/releases/air/action', payload: remove(parameterId), expected: '/releases/air/remove' }; };
const CONFIRM_REMOVE_YES = { id: 'RELEASES_CONFIRM_REMOVE_YES', method: 'POST', url: '/releases/air/remove', payload: { confirmation: 'true' }, expected: '/releases/air' };
const CONFIRM_REMOVE_YES_LAST = { id: 'RELEASES_CONFIRM_REMOVE_YES_LAST', method: 'POST', url: '/releases/air/remove', payload: { confirmation: 'true' }, expected: '/task-list' };
const CONFIRM_REMOVE_NO = RELEASES_AIR;
const CHANGE_DETAIL = (parameterId) => { return { id: 'RELEASES_CHANGE_DETAIL', method: 'POST', url: '/releases/air/action', payload: detail(parameterId), expected: '/releases/air/detail' }; };
const CONTINUE_INVALID = (parameterId) => { return { id: 'RELEASES_CONTINUE_INVALID', method: 'POST', url: '/releases/air/action', payload: continueInvalid(parameterId), expected: '/releases/air' }; };
const CONTINUE_VALID = (parameterId) => { return { id: 'RELEASES_CONTINUE_VALID', method: 'POST', url: '/releases/air/action', payload: continueValid(parameterId), expected: '/task-list' }; };

experiment('Releases', async () => {

    before(async () => {
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
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_YES, CHOOSE_NO_SUBSTANCE, CHOOSE_SUBSTANCE('66'), CHOOSE_BAD_DETAIL, CHOOSE_DETAIL('23.4', 5, 1) ]);
    });

    test('No redirect to add with second substance', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE2, CHOOSE_SUBSTANCE('548'), CHOOSE_BAD_DETAIL, CHOOSE_DETAIL('11.4', 4, 1) ]);
    });

    test('Remove substance', async () => {
        await steps([ RELEASES_AIR, REMOVE_SUBSTANCE('548'), CONFIRM_REMOVE_NO ]);
        await steps([ RELEASES_AIR, REMOVE_SUBSTANCE('548'), CONFIRM_REMOVE_YES ]);
    });

    test('Remove last substance', async () => {
        await steps([ RELEASES_AIR, REMOVE_SUBSTANCE('66'), CONFIRM_REMOVE_YES_LAST ]);
    });

    test('Add another substance', async () => {
        await steps([ TASK_LIST, CONFIRM_PAGE, CONFIRM_YES, CHOOSE_SUBSTANCE('588'), CHOOSE_DETAIL('23.4', 5, 1) ]);
    });

    test('Change detail invalid', async () => {
        await steps([ RELEASES_AIR, CHANGE_DETAIL('588'), CHOOSE_BAD_DETAIL, CHOOSE_DETAIL('11.4', 4, 1) ]);
    });

    test('Change detail from substances page invalid', async () => {
        await steps([ RELEASES_AIR, CONTINUE_INVALID('588') ]);
    });

    test('Change detail from substances page valid', async () => {
        await steps([ RELEASES_AIR, CONTINUE_VALID('588') ]);
    });

    test('Add another 3 substances', async () => {
        await steps([ TASK_LIST, ANOTHER_SUBSTANCE, CHOOSE_SUBSTANCE('655'), CHOOSE_DETAIL('1.4', 1, 1) ]);
        await steps([ TASK_LIST, ANOTHER_SUBSTANCE, CHOOSE_SUBSTANCE('733'), CHOOSE_DETAIL('99.4', 2, 2) ]);
        await steps([ TASK_LIST, ANOTHER_SUBSTANCE, CHOOSE_SUBSTANCE('862'), CHOOSE_DETAIL('88', 3, 2) ]);
    });

    test('Test logout', async () => {
        return Common.logout();
    });

    after(async () => {
        return Common.stop();
    });
});

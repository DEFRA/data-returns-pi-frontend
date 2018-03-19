'use strict';

const Common = require('./common');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const experiment = lab.experiment;
const test = lab.test;

const before = lab.before;
const after = lab.after;

const steps = Common.steps;

const releasesPayLoadBuilder = (submission) => {
    const { parameterId, value, unitId } = submission;
    const payload = {};
    payload['value-' + parameterId] = value;
    payload['unitId-' + parameterId] = unitId;
    return payload;
};

const offsitePayLoadBuilder = (submission, index) => {
    const { value } = submission;
    const payload = {};
    payload['value-' + index] = value;
    return payload;
};
// Releases
const START_PAGE = { id: 'SUBMISSION_START_PAGE', method: 'GET', url: '/', expected: '/' };
const CHOOSE_PERMIT = { id: 'SUBMISSION_CHOOSE_PERMIT', method: 'POST', url: '/select-permit', payload: { '17': 'Open' }, expected: '/task-list' };
const CONFIRM_PAGE = (type, route) => { return { id: 'SUBMISSION_CONFIRM_PAGE', method: 'GET', url: `/${type}/${route}/confirm`, expected: `/${type}/${route}/confirm` }; };
const CONFIRM_YES = (type, route, dest) => { return { id: 'SUBMISSION_CONFIRM_YES', method: 'POST', url: `/${type}/${route}/confirm`, payload: { confirmation: 'true' }, expected: `/${type}/${route}/${dest}` }; };
const CHOOSE_SUBSTANCE = (route, parameterId) => { return { id: 'SUBMISSION_CHOOSE_SUBSTANCE', method: 'POST', url: `/releases/${route}/add-substance`, payload: { parameterId: parameterId }, expected: `/releases/${route}/detail` }; };
const CHOOSE_DETAIL = (route, value, unitId, methodId) => { return { id: 'SUBMISSION_CHOOSE_DETAIL', method: 'POST', url: `/releases/${route}/detail`, payload: { value: value, unitId: unitId, methodId: methodId }, expected: `/releases/${route}` }; };
const ANOTHER_SUBSTANCE = (route, payload) => { return { id: 'SUBMISSION_ANOTHER_SUBSTANCE', method: 'POST', url: `/releases/${route}/action`, payload: payload, expected: `/releases/${route}/add-substance` }; };
const CONTINUE = (type, route, payload) => { return { id: 'SUBMISSION_CONTINUE', method: 'POST', url: `/${type}/${route}/action`, payload: payload, expected: '/task-list' }; };

const TASK_LIST = { id: 'SUBMISSION_TASK_LIST', method: 'GET', url: '/task-list', expected: '/task-list' };
const ADD_VALID = (payload) => { return { id: 'SUBMISSION_ADD_VALID', method: 'POST', url: '/transfers/off-site/add', payload: payload, expected: '/transfers/off-site' }; };
const ADD_ANOTHER = (payload) => { return { id: 'SUBMISSION_ADD_ANOTHER', method: 'POST', url: '/transfers/off-site/action', payload: payload, expected: '/transfers/off-site/add' }; };

const SUBMIT = { id: 'SUBMISSION_SUBMIT', method: 'GET', url: '/submit/confirm', expected: '/submit/confirm' };
const CONFIRM = { id: 'SUBMISSION_CONFIRM', method: 'POST', url: '/submit/confirm', expected: '/' };

experiment('Submit data test', () => {

    before(async () => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('3@email.com', 'a');
    });

    // Create a full valid submission
    test('Create releases', async () => {
        for (const route of ['air', 'land', 'water', 'waste-water']) {
            const submissions = [
                { parameterId: 1164, value: 56.34, unitId: 143, methodId: 1 },
                { parameterId: 1227, value: 66.32, unitId: 143, methodId: 1 },
                { parameterId: 1043, value: 76.23, unitId: 143, methodId: 1 },
                { parameterId: 1272, value: 86.87, unitId: 143, methodId: 1 },
                { parameterId: 1966, value: 'BRT', unitId: null, methodId: 1 },
                { parameterId: 935, value: 66.68, unitId: 143, methodId: 1 },
                { parameterId: 953, value: 76.12, unitId: 143, methodId: 1 },
                { parameterId: 1066, value: 928.87, unitId: 143, methodId: 1 },
                { parameterId: 693, value: 'BRT', unitId: null, methodId: 1 }
            ];
            let stepBuilder = [ START_PAGE, CHOOSE_PERMIT, CONFIRM_PAGE('releases', route),
                CONFIRM_YES('releases', route, 'add-substance') ];

            const payload = {};
            submissions.forEach((submission, index, array) => {
                Object.assign(payload, releasesPayLoadBuilder(submission));
                if (index === 0) {
                    stepBuilder = stepBuilder.concat([
                        CHOOSE_SUBSTANCE(route, submission.parameterId),
                        CHOOSE_DETAIL(route, submission.value, submission.unitId, submission.methodId)
                    ]);
                } else if (index === array.length - 1) {
                    const continueObj = {};
                    const chooseObj = {};
                    Object.assign(continueObj, payload, { continue: 'Continue' });
                    Object.assign(chooseObj, payload, { add: 'Add substance' });
                    stepBuilder = stepBuilder.concat([
                        ANOTHER_SUBSTANCE(route, chooseObj),
                        CHOOSE_SUBSTANCE(route, submission.parameterId),
                        CHOOSE_DETAIL(route, submission.value, submission.unitId, submission.methodId),
                        CONTINUE('releases', route, continueObj)
                    ]);
                } else {
                    const chooseObj = {};
                    Object.assign(chooseObj, payload, { add: 'Add substance' });
                    stepBuilder = stepBuilder.concat([
                        ANOTHER_SUBSTANCE(route, chooseObj),
                        CHOOSE_SUBSTANCE(route, submission.parameterId),
                        CHOOSE_DETAIL(route, submission.value, submission.unitId, submission.methodId)
                    ]);
                }
            });
            await steps(stepBuilder);
        }
    });

    // value-0=345.3&value-1=343&add=Add+a+new+off-site+waste+transfer
    test('Create offsite transfers', async () => {
        const transfers = [
            { ewc: '01 01 01', wfd: 'R1', value: 234 },
            { ewc: '01 01 02', wfd: 'R2', value: 567.45 },
            { ewc: '01 03 04', wfd: 'R3', value: 34 },
            { ewc: '01 03 05', wfd: 'D1', value: 2455.88 },
            { ewc: '01 03 07', wfd: 'D2', value: 12 }
        ];

        const route = 'off-site';
        let stepBuilder = [ TASK_LIST, CONFIRM_PAGE('transfers', route), CONFIRM_YES('transfers', route, 'add') ];
        const payload = {};
        transfers.forEach((transfer, index, array) => {
            Object.assign(payload, offsitePayLoadBuilder(transfer, index));
            if (index === 0) {
                stepBuilder.push(ADD_VALID(transfer));
            } else if (index === array.length - 1) {
                const continueObj = {};
                const chooseObj = {};
                Object.assign(continueObj, payload, { continue: 'Continue' });
                Object.assign(chooseObj, payload, { add: 'Add a new off-site waste transfer' });
                stepBuilder = stepBuilder.concat([
                    ADD_ANOTHER(chooseObj),
                    ADD_VALID(transfer),
                    CONTINUE('transfers', route, continueObj)
                ]);
            } else {
                const chooseObj = {};
                Object.assign(chooseObj, payload, { add: 'Add a new off-site waste transfer' });
                stepBuilder = stepBuilder.concat([
                    ADD_ANOTHER(chooseObj),
                    ADD_VALID(transfer)
                ]);
            }
        });
        // console.log(JSON.stringify(stepBuilder.splice(0, 5), null, 4));
        await steps(stepBuilder);
    });

    /*
     * TODO - removed for now
     * test('Create overseas waste transfers', async () => {
     *     await steps([ START_PAGE, CHOOSE_PERMIT, CONFIRM_PAGE('releases', 'overseas'),
     *         CONFIRM_NO('transfers', 'overseas') ]);
     * });
     */

    test('Submit', async () => {
        await steps([SUBMIT, CONFIRM]);
    });

    after(async () => {
        return Common.stop();
    });

});

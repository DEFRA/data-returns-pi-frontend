/**
 * Test the validation module
 */
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const releaseValidator = require('../../src/lib/validator').release;
const ewcParse = require('../../src/lib/validator').ewcParse;
const offsiteValidator = require('../../src/lib/validator').offsite;

const MasterDataService = require('../../src/service/master-data');

const experiment = lab.experiment;
const test = lab.test;
const expect = Code.expect;

experiment('Validation', async () => {

    // Should give no value and no method errors
    test('Empty object', () => {
        const releaseObj = {};
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.not.null();
        expect(validation).to.include({'key': 'value', 'errno': 'PI-1000'});
        expect(validation).to.include({'key': 'methodId', 'errno': 'PI-1003'});
    });

    // Value not number or BRT
    test('Incorrect value', () => {
        const releaseObj = { value: 'not_a_value' };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.not.null();
        expect(validation).to.include({'key': 'value', 'errno': 'PI-1000'});
        expect(validation).to.include({'key': 'unitId', 'errno': 'PI-1002'});
        expect(validation).to.include({'key': 'methodId', 'errno': 'PI-1003'});
    });

    test('Correct text number -108.89 value with unit and method', () => {
        const releaseObj = { value: '-108.89', unitId: 1, methodId: 1 };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.null();
    });

    test('Correct numeric number -108.89 value with unit and method', () => {
        const releaseObj = { value: -108.89, unitId: 1, methodId: 1 };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.null();
    });

    test('Correct text number BRT value with method', () => {
        const releaseObj = { value: 'BRT', methodId: 1 };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.null();
    });

    test('Correct text number brt value with method', () => {
        const releaseObj = { value: 'brt', methodId: 1 };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.null();
    });

    test('BRT with unit error', () => {
        const releaseObj = { value: 'brt', unitId: 1, methodId: 1 };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.not.null();
        expect(validation).to.include({'key': 'unitId', 'errno': 'PI-1001'});
    });

    test('BRT with unit null', () => {
        const releaseObj = { value: 'brt', unitId: null, methodId: 1 };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.null();
    });

    test('Unit no value error', () => {
        const releaseObj = { unitId: 1, methodId: 1 };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.not.null();
        expect(validation).to.include({ key: 'value', errno: 'PI-1000' });
    });

    test('Value no unit error', () => {
        const releaseObj = { value: 546.2, methodId: 1 };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.not.null();
        expect(validation).to.include({'key': 'unitId', 'errno': 'PI-1002'});
    });

    test('Value null unit error', () => {
        const releaseObj = { value: 546.2, methodId: 1, unitId: null };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.not.null();
        expect(validation).to.include({'key': 'unitId', 'errno': 'PI-1002'});
    });

    test('Value empty unit error', () => {
        const releaseObj = { value: '', methodId: 1, unitId: null };
        const validation = releaseValidator(releaseObj);
        expect(validation).to.be.not.null();
        expect(validation).to.include({'key': 'unitId', 'errno': 'PI-1002'});
    });

    test('Valid ewc strings', async () => {
        const expObj = await MasterDataService.getEwc(10, 11, 12);
        let ewc = await ewcParse('10 11 12');
        expect(ewc).to.be.not.null();
        expect(ewc).to.equal(expObj);

        ewc = await ewcParse('10.11.12');
        expect(ewc).to.be.not.null();
        expect(ewc).to.equal(expObj);

        ewc = await ewcParse(' 10  11  12 ');
        expect(ewc).to.be.not.null();
        expect(ewc).to.equal(expObj);

        ewc = await ewcParse('101112');
        expect(ewc).to.be.not.null();
        expect(ewc).to.equal(expObj);

        ewc = await ewcParse('10-11-12');
        expect(ewc).to.be.not.null();
        expect(ewc).to.equal(expObj);
    });

    test('Invalid ewc strings', async () => {
        let ewc = await ewcParse('10 11');
        expect(ewc).to.be.null();

        ewc = await ewcParse('10/11/12');
        expect(ewc).to.be.null();

        ewc = await ewcParse('99 11 12');
        expect(ewc).to.be.null();

        ewc = await ewcParse('Bloody monday morning!');
        expect(ewc).to.be.null();
    });

    test('Valid off-site transfer object part 1', async () => {
        const validObj = {
            ewc: {
                activityId: 1,
                chapterId: 1,
                subChapterId: 1342
            },
            wfd: {
                disposalId: 5,
                recoveryId: null
            },
            value: 236.89
        };

        const validation = await offsiteValidator(validObj);
        expect(validation).to.be.null();
    });

});

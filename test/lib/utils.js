/**
 * Test the utilities module
 */
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');

const experiment = lab.experiment;
const test = lab.test;
const expect = Code.expect;

const Utilities = require('../../src/lib/utils');

experiment('Utilities', () => {
    test('Test is number', () => {
        expect(Utilities.isNumeric(1)).to.be.true();
        expect(Utilities.isNumeric('1')).to.be.true();
        expect(Utilities.isNumeric(-0.5)).to.be.true();
        expect(Utilities.isNumeric('-0.5')).to.be.true();
        expect(Utilities.isNumeric('.42')).to.be.true();
        expect(Utilities.isNumeric('0x89f')).to.be.true();

        expect(Utilities.isNumeric('BRT')).to.be.false();
        expect(Utilities.isNumeric('99,99')).to.be.false();
        expect(Utilities.isNumeric('7.j')).to.be.false();
        expect(Utilities.isNumeric('100A')).to.be.false();
    });
});

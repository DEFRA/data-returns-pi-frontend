'use strict';

/**
 * Root test module
 *
 * By default, lab loads all the '*.js' files inside the local 'test' directory
 *
 */
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = lab.expect;

const system = require('../src/lib/system.js');

describe('Testing Framework', () => {
    before((done) => {
        done();
    });

    after((done) => {
        done();
    });

    it('Testing configuration is alive', (done) => {
        expect(system.configuration).to.be.an.object();
        done();
    });

    it('Testing logging is alive', (done) => {
        expect(() => system.logger.info('Testing logging...')).to.not.throw();
        expect(system.goodWinstonStream).to.be.an.object();
        done();
    });
});

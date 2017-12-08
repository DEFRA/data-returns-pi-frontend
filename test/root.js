'use strict';

/**
 * Root test module
 *
 * By default, lab loads all the '*.js' files inside the local 'test' directory
 *
 */
const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const logging = require('../src/lib/logging');
const system = require('../src/lib/system.js');

describe('Testing Framework', () => {

    it('Testing configuration is alive', () => {
        expect(system.configuration).to.be.an.object();
    });

    it('Testing logging is alive', () => {
        expect(() => logging.logger.info('Testing logging...')).to.not.throw();
        expect(logging.goodWinstonStream).to.be.a.function();
    });
});

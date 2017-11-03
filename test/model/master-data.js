'use strict';

/**
 * Master data test module
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
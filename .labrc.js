'use strict';

const reporters = new Map([
    ['console', 'stdout'],
    ['html', 'reports/coverage.html'],
    ['junit', 'reports/coverage.xml']
]);

module.exports = {
    'environment': 'local',
    'colors': true,
    'coverage': true,
    'coverage-path': 'app/',
    'threshold': 80,
    'lint': true,
    'lint-errors-threshold': 0,
    'lint-warnings-threshold': -1,
    'leaks': true,
    'reporter': Array.from(reporters.keys()),
    'output': Array.from(reporters.values()),
    'verbose': true,
    'debug': true
};
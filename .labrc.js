'use strict';

const reporters = new Map([
    ['console', 'stdout'],
    ['html', 'reports/coverage.html'],
    ['junit', 'reports/coverage.xml']
]);

module.exports = {
    'environment': 'local',
    'colors': true,
    'coverage': false,
    'coverage-path': 'src/',
    'threshold': 80,
    'lint': false,
    'lint-errors-threshold': 0,
    'lint-warnings-threshold': -1,
    'leaks': true,
    'reporter': Array.from(reporters.keys()),
    'output': Array.from(reporters.values()),
    'verbose': true,
    'debug': true
};

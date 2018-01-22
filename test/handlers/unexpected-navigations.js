'use strict';

const routes = require('../../src/routes');

const Common = require('./common');

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const steps = Common.steps;

const experiment = lab.experiment;
const test = lab.test;

const before = lab.before;
const after = lab.after;

const expand = (p) => {

    if (p.includes('{route}')) {
        const paths = [];
        [ 'air', 'land', 'water', 'waste-water' ].forEach(route => {
            paths.push(p.replace('{route}', route));
        });

        return paths;
    }

    return [ p ];
};

const getHandlerRoutes = [].concat(...routes.dynamicHandlers
    .filter(h => h.method === 'GET' || h.method.includes('GET'))
    .map(h => expand(h.path)));

const postHandlerRoutes = [].concat(...routes.dynamicHandlers
    .filter(h => h.method === 'POST' || h.method.includes('POST'))
    .map(h => expand(h.path)));

experiment('Unexpected navigations', () => {

    before(() => {
        return Common.start();
    });

    test('Test login', async () => {
        return Common.login('4@email.com', 'a');
    });

    test('No permit set - GET routes', async () => {
        const methods = getHandlerRoutes.filter(f => ![ '/login', '/', '/logout', '/select-permit', '/review/confirm', '/submit/confirm' ]
            .includes(f)).map(r => {
            return { id: 'UNEXPECTED_GET_' + r, method: 'GET', url: r, expected: '/' };
        });
        // console.log('get routes' + JSON.stringify(methods.map(r => r.url), null, 2));
        await steps(methods);
    });

    test('No permit set - POST routes', async () => {
        const methods = postHandlerRoutes.filter(f => ![ '/login', '/select-permit', '/review/confirm', '/submit/confirm' ]
            .includes(f)).map(r => {
            return { id: 'UNEXPECTED_POST_' + r, method: 'POST', url: r, expected: '/' };
        });
        // console.log('post routes' + JSON.stringify(methods, null, 2));
        await steps(methods);
    });

    test('Test logout', async () => {
        return Common.logout();
    });

    after(() => {
        return Common.stop();
    });
});

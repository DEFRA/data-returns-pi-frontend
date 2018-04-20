'use strict';

const MasterDataService = require('../../../service/master-data');

const isNumeric = require('../../../lib/utils').isNumeric;
const cacheNames = require('../../../lib/user-cache-policies').names;
const BaseStage = require('../common').BaseStage;
const setConfirmation = require('../common').setConfirmation;
const setValidationStatus = require('../common').setValidationStatus;
const setChallengeStatus = require('../common').setChallengeStatus;

const internals = {};

class Confirm extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {
        if (cacheState.tasks && cacheState.tasks.releases && Object.keys(cacheState.tasks.releases)
            .filter(r => isNumeric(r)).length > 0) {
            // Redirect to main route page
            return h.redirect(cacheState.route.page);

        } else {
            // Display the appropriate confirmation page
            return h.view(this.path, {
                route: cacheState.route,
                selected: false
            });
        }
    }

    async doPost (request, h, cacheState) {
        // Process the confirmation - the releases page
        if (request.payload && request.payload.confirmation === 'true') {
            await setChallengeStatus(request, cacheState.submissionContext, cacheState.route, true);
            return h.redirect(cacheState.route.page + '/add-substance');
        } else {
        // If the challenge page results in false then this is a confirmed route
            await setConfirmation(request, cacheState.submissionContext, cacheState.route, true);

            // Unset the confirmation status when viewing the page
            await setChallengeStatus(request, cacheState.submissionContext, cacheState.route);
            return h.redirect('/task-list');
        }
    }
}

class Substances extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {
        const { route, tasks, submissionContext, eaId } = cacheState;
        // Unset the confirmation status when viewing the page
        await setConfirmation(request, submissionContext, route);

        // Calculate the obligation for this route
        const obligation = await MasterDataService.getReleaseObligation(eaId.regime.id, route);

        // Remove any parameters already reported and sort the parameters and the groups
        const parameterGroups = obligation.parameterGroups.map(g => {
            const group = {};
            group.id = g.id;
            group.nomenclature = g.nomenclature;
            if (tasks.releases) {
                group.parameters = g.parameters.filter(p => !Object.keys(tasks.releases).map(n => Number.parseInt(n))
                    .includes(p.id)).sort(internals.sortParameters);
            } else {
                group.parameters = g.parameters.sort(internals.sortParameters);
            }
            return group;
        });

        if (tasks.currentRelease && tasks.currentRelease.incomplete) {
            return h.view(this.path, {
                route: route,
                parameterGroups: parameterGroups,
                release: tasks.currentRelease.incomplete,
                obligation: obligation
            });
        }

        return h.view(this.path, {
            route: route,
            parameterGroups: parameterGroups,
            obligation: obligation
        });

    }

    async doPost (request, h, cacheState, errors) {
        if (errors) {
            cacheState.tasks.currentRelease = {
                incomplete: {
                    errors: errors,
                    page: request.payload
                }
            };
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, cacheState.tasks);
            return h.redirect(cacheState.route.page + '/add-substance');
        }
        cacheState.tasks.currentRelease = {};
        cacheState.tasks.currentRelease.parameterIds = request.payload.parameterId;
        await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, cacheState.tasks);
        return h.redirect(cacheState.route.page + '/details');
    };
}

class Details extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {
        const { eaId, route, tasks } = cacheState;

        const obligation = await MasterDataService.getReleaseObligation(eaId.regime.id, route);

        const parameterMap = new Map([].concat(...obligation.parameterGroups
            .map(g => g.parameters))
            .map(p => [p.id, p]));

        if (tasks.currentRelease.parameterIds && tasks.currentRelease.parameterIds.length) {
            const release = {
                parameter: parameterMap.get(Number.parseInt(tasks.currentRelease.parameterIds[0]))
            };

            obligation.units.sort((a, b) => a.conversion - b.conversion);

            return h.view(this.path, {
                route: route,
                release: release,
                obligation: obligation,
                methods: await MasterDataService.getMethods()
            });
        }

        return h.view(this.path);
    }

    async doPost (request, h, cacheState, errors) {
        const { route } = cacheState;
        return h.redirect(route.page + '/details');
    }
}

internals.confirm = new Confirm('all-sectors/report/confirm');
internals.substances = new Substances('all-sectors/report/add-substance', null, async (payload) => {
    if (!payload.parameterId) {
        return [ { key: 'parameter', errno: 'PI-1004' } ];
    }
});
internals.details = new Details('all-sectors/report/release-details');

module.exports = {
    confirm: async (request, h) => {
        return internals.confirm.handler(request, h);
    },

    substances: async (request, h) => {
        return internals.substances.handler(request, h);
    },

    details: async (request, h) => {
        return internals.details.handler(request, h);
    }
};

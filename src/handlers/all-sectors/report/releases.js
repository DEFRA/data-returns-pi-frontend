/* eslint-disable camelcase */
'use strict';

const MasterDataService = require('../../../service/master-data');

const isNumeric = require('../../../lib/utils').isNumeric;
const cacheNames = require('../../../lib/user-cache-policies').names;
const BaseStage = require('../common').BaseStage;
const setConfirmation = require('../common').setConfirmation;
const setChallengeStatus = require('../common').setChallengeStatus;

const internals = {};

internals.validateDetail = async (payload) => {
    const result = [];

    const { brt, unit, value, notifiable, notifiable_value, notifiable_reason, notifiable_unit } = payload;

    if (brt === 'true') {
        if (value.trim()) {
            result.push({key: 'value', errno: 'PI-1000'});
        }
    } else if (!isNumeric(value)) {
        result.push({ key: 'value', errno: 'PI-1001' });
    }

    if (notifiable === 'true') {
        if (isNumeric(value) && isNumeric(notifiable_value)) {
            const valueUnit = await MasterDataService.getUnitById(Number.parseInt(unit));
            const notifiableValueUnit = await MasterDataService.getUnitById(Number.parseInt(notifiable_unit));
            const valueNormalized = Number.parseFloat(value) * valueUnit.conversion;
            const notifiableValueNormalized = Number.parseFloat(notifiable_value) * notifiableValueUnit.conversion;
            if (valueNormalized < notifiableValueNormalized) {
                result.push({ key: 'value', errno: 'PI-1003' });
            }
        }

        if (!isNumeric(notifiable_value)) {
            result.push({ key: 'notifiable_value', errno: 'PI-1001' });
        }

        if (!notifiable_reason.trim()) {
            result.push({ key: 'notifiable_reason', errno: 'PI-1002' });
        }
    }

    // No value where brt is set

    return result.length > 0 ? result : null;
};

class Confirm extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {

        // Clear up any incomplete releases
        if (cacheState.tasks.currentRelease) {
            delete cacheState.tasks.currentRelease;
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, cacheState.tasks);
        }

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
        cacheState.tasks.currentRelease.parameterIds =
          Array.isArray(request.payload.parameterId) ? request.payload.parameterId : [ request.payload.parameterId ];

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
            let release = {
                parameter: parameterMap.get(Number.parseInt(tasks.currentRelease.parameterIds[0]))
            };

            if (tasks.currentRelease.incomplete) {
                release = Object.assign(release, tasks.currentRelease.incomplete);
            }

            obligation.units.sort((a, b) => a.conversion - b.conversion);

            return h.view(this.path, {
                count: tasks.releases ? Object.keys(tasks.releases).length : 0,
                route: route,
                release: release,
                obligation: obligation,
                methods: await MasterDataService.getMethods()
            });
        }

        return h.redirect('/task-list');
    }

    async doPost (request, h, cacheState, errors) {
        const { route, tasks } = cacheState;

        if (errors) {
            cacheState.tasks.currentRelease = Object.assign(tasks.currentRelease, {
                incomplete: {
                    errors: errors,
                    page: request.payload
                }
            });

            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect(route.page + '/details');
        }

        // No errors so write the release into the cache
        const { brt, method, unit, value, notifiable, notifiable_value,
            notifiable_reason, notifiable_unit, subroute_id } = request.payload;

        delete cacheState.tasks.currentRelease.incomplete;

        // Create a new release object
        tasks.releases = tasks.releases || {};
        const currentParameterId = tasks.currentRelease.parameterIds.shift();
        tasks.releases[currentParameterId] = {};
        tasks.releases[currentParameterId].method = method;

        if (brt === 'true') {
            tasks.releases[currentParameterId].brt = true;
        } else {
            tasks.releases[currentParameterId].value = Number.parseFloat(value);
            tasks.releases[currentParameterId].unitId = Number.parseFloat(unit);
        }

        if (notifiable === 'true') {
            tasks.releases[currentParameterId].notifiable = {};
            tasks.releases[currentParameterId].notifiable.value = Number.parseFloat(notifiable_value);
            tasks.releases[currentParameterId].notifiable.unitId = Number.parseInt(notifiable_unit);
            tasks.releases[currentParameterId].notifiable.reason = notifiable_reason;
        }

        if (subroute_id) {
            tasks.releases[currentParameterId].subroute_id = subroute_id;
        }

        await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

        // If there are no queued entries go to the main route summary otherwise ask return to the detail
        if (tasks.currentRelease.parameterIds.length > 0) {
            return h.redirect(route.page + '/details');
        }

        return h.redirect(route.page);
    }
}

class Releases extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {

        // Always un-confirm when viewing summary
        await setConfirmation(request, cacheState.submissionContext, cacheState.route, false);

        const obligation = await MasterDataService.getReleaseObligation(cacheState.eaId.regime.id, cacheState.route);

        const parameterMap = new Map([].concat(...obligation.parameterGroups
            .map(g => g.parameters))
            .map(p => [p.id, p]));

        const releasesEnriched = await Promise.all(Object.keys(cacheState.tasks.releases).map(async parameterId => {
            const result = {};
            result.parameter = parameterMap.get(Number.parseInt(parameterId));
            result.method = cacheState.tasks.releases[parameterId].method;

            if (cacheState.tasks.releases[parameterId].brt) {
                result.brt = true;
            } else {
                result.value = cacheState.tasks.releases[parameterId].value;
                result.unit = await MasterDataService.getUnitById(cacheState.tasks.releases[parameterId].unitId);
            }

            if (cacheState.tasks.releases[parameterId].notifiable) {
                result.notifiable = {};
                result.notifiable.value = cacheState.tasks.releases[parameterId].notifiable.value;
                result.notifiable.unit = await MasterDataService.getUnitById(cacheState.tasks.releases[parameterId].notifiable.unitId);
            }

            if (cacheState.tasks.releases[parameterId].subroute_id) {
                result.subroute = obligation.route.subRoutes
                    .find(r => r.id === Number.parseInt(cacheState.tasks.releases[parameterId].subroute_id)).nomenclature;
            }

            return result;
        }));

        return h.view(this.path, {
            route: cacheState.route,
            releases: releasesEnriched,
            obligation: obligation
        });
    }

    async doPost (request, h, cacheState) {
        const { tasks, route, submissionContext } = cacheState;
        if (request.payload.add) {
            // Add another release
            return h.redirect(route.page + '/add-substance');
        } else if (request.payload.continue) {
            await setConfirmation(request, submissionContext, route, true);
            return h.redirect('/task-list');
        } else if (Object.keys(request.payload).find(k => k.startsWith('release-change'))) {
            // Change
            tasks.currentRelease = {};
            const parameterId = Object.keys(request.payload).find(k => k.startsWith('release-change')).split(':')[1];
            const release = tasks.releases[parameterId];

            tasks.currentRelease = {
                parameterIds: [parameterId],
                incomplete: {
                    page: {
                        method: release.method
                    }
                }
            };

            if (release.brt) {
                tasks.currentRelease.incomplete.page.brt = 'true';
            } else {
                tasks.currentRelease.incomplete.page = Object.assign(tasks.currentRelease.incomplete.page, {
                    value: release.value,
                    method: release.method,
                    unit: release.unitId
                });
            }

            if (release.notifiable) {
                tasks.currentRelease.incomplete.page = Object.assign(tasks.currentRelease.incomplete.page, {
                    notifiable: 'true',
                    notifiable_value: release.notifiable.value,
                    notifiable_unit: release.notifiable.unitId,
                    notifiable_reason: release.notifiable.reason
                });
            }

            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect(route.page + '/details');
        } else if (Object.keys(request.payload).find(k => k.startsWith('release-delete'))) {
            const parameterId = Object.keys(request.payload).find(k => k.startsWith('release-delete')).split(':')[1];
            tasks.currentRelease = {
                parameterIds: [parameterId]
            };
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
            return h.redirect(route.page + '/remove');
        }
    }
}

class Remove extends BaseStage {
    constructor (...args) {
        super(args);
    }

    async doGet (request, h, cacheState) {
        const { tasks, route } = cacheState;
        const obligation = await MasterDataService.getReleaseObligation(cacheState.eaId.regime.id, cacheState.route);
        const parameterMap = new Map([].concat(...obligation.parameterGroups
            .map(g => g.parameters))
            .map(p => [p.id, p]));

        const parameter = parameterMap.get(Number.parseInt(tasks.currentRelease.parameterIds[0]));

        return h.view(this.path, {
            route: route,
            parameter: parameter,
            obligation: obligation
        });
    }

    async doPost (request, h, cacheState) {
        const { tasks, route, submissionContext } = cacheState;
        const parameterId = tasks.currentRelease.parameterIds.shift();
        delete tasks.releases[parameterId];
        await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);

        // If this is the last release redirect back to the task list
        if (Object.keys(tasks.releases).filter(r => isNumeric(r)).length > 0) {
            return h.redirect(route.page);
        } else {
            // Here we unset the challenge flag - the user must explicitly say no to the route
            await setChallengeStatus(request, submissionContext, route);
            return h.redirect('/task-list');
        }

    }
}

internals.confirm = new Confirm('all-sectors/report/confirm');
internals.substances = new Substances('all-sectors/report/add-substance', null, async (payload) => {
    if (!payload.parameterId) {
        return [ { key: 'parameter', errno: 'PI-1004' } ];
    }
});
internals.details = new Details('all-sectors/report/release-details', null, internals.validateDetail);
internals.releases = new Releases('all-sectors/report/releases');
internals.remove = new Remove('all-sectors/report/confirm-delete');

module.exports = {
    confirm: async (request, h) => {
        return internals.confirm.handler(request, h);
    },

    substances: async (request, h) => {
        return internals.substances.handler(request, h);
    },

    details: async (request, h) => {
        return internals.details.handler(request, h);
    },

    releases: async (request, h) => {
        return internals.releases.handler(request, h);
    },

    remove: async (request, h) => {
        return internals.remove.handler(request, h);
    }
};

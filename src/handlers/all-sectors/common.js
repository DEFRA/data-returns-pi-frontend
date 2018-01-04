'use strict';

// const journey = require('../../lib/task-list');
const AllSectorsTaskList = require('../../model/all-sectors/task-list');
const CacheKeyError = require('../../lib/user-cache-policies').CacheKeyError;
const TaskListService = require('../../service/task-list');
const Hoek = require('hoek');
const cacheNames = require('../../lib/user-cache-policies').names;

module.exports = {

    /**
     * Wrapper for the common cache get functions in handlers
     * which will throw CacheKeyError on an unexpected read. Some redundant reads
     * but simplifies
     * @param request - extract the route from the request
     * @param routeParameter - supply the route identifier
     * @returns  {Promise.<{route: *, submissionStatus: *, permitStatus: *, tasks: *}>}
     */
    cacheHelper: async (request, routeParameter) => {

        try {

            const route = routeParameter ? TaskListService.mapByPathParameter(AllSectorsTaskList).get(routeParameter)
                : TaskListService.getRoute(AllSectorsTaskList, request);

            const submissionStatus = await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).get(request);
            const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

            Hoek.assert(route, 'Invalid cache state: route');
            Hoek.assert(submissionStatus, 'Invalid cache state: submission-status');
            Hoek.assert(permitStatus, 'Invalid cache state: permit-status');

            // We can always set the current route here
            permitStatus.currentTask = route.name;
            await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);

            // Get the tasks object or create an empty new one
            const tasks = await request.server.app.userCache.cache(cacheNames.TASK_STATUS).get(request) || {};

            return {
                route: route,
                submissionStatus: submissionStatus,
                permitStatus: permitStatus,
                tasks: tasks
            };

        } catch (err) {
            throw new CacheKeyError(err.message);
        }
    },

    /**
     * Set or unset the completed flag for a given route
     * @param request
     * @param permitStatus
     * @param route
     * @param completed
     * @return {Promise.<void>}
     */
    setConfirmation: async (request, permitStatus, route, confirmation) => {
        permitStatus.confirmation[route.name] = !!confirmation;
        await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
    },

    /**
     * Sets the validation status at the permit level.
     * @param request
     * @param permitStatus
     * @param route
     * @param valid
     * @return {Promise.<void>}
     */
    setValidationStatus: async (request, permitStatus, route, valid) => {
        permitStatus.valid[route.name] = !!valid;
        await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
    },

    /**
     * Set the challenge status flag
     * @param request
     * @param permitStatus
     * @param route
     * @param challengeStatus
     * @return {Promise.<void>}
     */
    setChallengeStatus: async (request, permitStatus, route, challengeStatus) => {
        permitStatus.challengeStatus[route.name] = !!challengeStatus;
        await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);
    }
};

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
     * @returns  {Promise.<{route: *, submissionStatus: *, submissionContext: *, tasks: *}>}
     */
    cacheHelper: async (request, routeParameter) => {

        try {

            const route = routeParameter ? TaskListService.mapByPathParameter(AllSectorsTaskList).get(routeParameter)
                : TaskListService.getRoute(AllSectorsTaskList, request);

            const { eaId, year, roles } = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

            Hoek.assert(route, 'Invalid cache state: route');
            Hoek.assert(eaId, `Invalid cache state: ${cacheNames.USER_CONTEXT}`);
            Hoek.assert(submissionContext, 'Invalid cache state: permit-status');

            // We can always set the current route here
            submissionContext.currentTask = route.name;
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);

            // Get the tasks object or create an empty new one
            const tasks = await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).get(request) || {};

            return {
                route: route,
                eaId: eaId,
                year: year,
                isOperator: roles.includes('OPERATOR'),
                submissionContext: submissionContext,
                tasks: tasks
            };

        } catch (err) {
            throw new CacheKeyError(err.message);
        }
    },

    /**
     * Set or unset the confirmation flag for a given route - this is where the user
     * Ok's the route either by challenge no or by the continue button on the
     * main route page. If the user causes and unconfirm this will also unset the review confirmation.
     * @param request
     * @param submissionContext
     * @param route
     * @param completed
     * @return {Promise.<void>}
     */
    setConfirmation: async (request, submissionContext, route, confirmation) => {
        submissionContext.confirmation[route.name] = !!confirmation;

        if (!confirmation) {
            submissionContext.confirmation['REVIEW'] = false;
            submissionContext.confirmation['SUBMIT'] = false;
        }

        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
    },

    /**
     * Sets the validation status at the permit level.
     * @param request
     * @param submissionContext
     * @param route
     * @param valid
     * @return {Promise.<void>}
     */
    setValidationStatus: async (request, submissionContext, route, valid) => {
        submissionContext.valid[route.name] = !!valid;
        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
    },

    /**
     * Set the challenge status flag
     * @param request
     * @param submissionContext
     * @param route
     * @param challengeStatus
     * @return {Promise.<void>}
     */
    setChallengeStatus: async (request, submissionContext, route, challengeStatus) => {
        submissionContext.challengeStatus[route.name] = !!challengeStatus;
        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
    },

    /**
     * Calculate the TASK completed status - the status required to make the submission for a given route
     * @param submissionContext
     * @param name
     */
    setCompletedStatus: (submissionContext, name) => {
        submissionContext.completed = submissionContext.completed || {};

        // Calculate the permit status completed flag for each route
        submissionContext.completed[name] = false;

        // Deemed valid if no validity status or validity status true
        const valid = submissionContext.valid[name] === undefined || submissionContext.valid[name];

        // Completed if confirmed and challenged no - in this case there may or may not be a validation
        if (submissionContext.confirmation[name] && !submissionContext.challengeStatus[name] && valid) {
            submissionContext.completed[name] = true;
        }

        // Completed if confirmed and challenged yes and valid
        if (submissionContext.confirmation[name] && submissionContext.challengeStatus[name] && valid) {
            submissionContext.completed[name] = true;
        }
    },

    /**
     * Helper function for status
     * @param submissionContext
     * @return {{}}
     */
    statusHelper: (submissionContext) => {
        const result = {};
        result.challengeStatus = Object.keys(submissionContext.challengeStatus).filter(p => submissionContext.challengeStatus[p]);
        result.valid = Object.keys(submissionContext.valid).filter(p => submissionContext.valid[p]);
        result.completed = Object.keys(submissionContext.completed).filter(p => submissionContext.completed[p]);
        return result;
    }

};

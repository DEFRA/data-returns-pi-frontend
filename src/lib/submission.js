'use strict';

/*
 * This module contains functions for the final submission stage to the API.
 * It converts the contents of the redis cache and produces the final message
 */
const Joi = require('joi');
const Hoek = require('hoek');

const MasterDataService = require('../service/master-data');

const cacheNames = require('./user-cache-policies').names;
const CacheKeyError = require('./user-cache-policies').CacheKeyError;
const Api = require('./api-client');
const TaskListService = require('../service/task-list');
const allSectorsTaskList = require('../model/all-sectors/task-list');
const setCompletedStatus = require('../handlers/all-sectors/common').setCompletedStatus;
const statusHelper = require('../handlers/all-sectors/common').statusHelper;
const isNumeric = require('./utils').isNumeric;
const isBrt = require('../lib/validator').isBrt;
const logger = require('./logging').logger;

// Allowable submission status codes
const submissionStatusCodes = {
    UNSUBMITTED: 'Unsubmitted',
    SUBMITTED: 'Submitted',
    APPROVED: 'Approved'
};

const internals = {

    /**
     * Get a submission by id from the API
     * @param id
     * @return {Promise.<*>}
     */
    getSubmission: async (id) => {
        return Api.request('SUB', 'GET', `submissions/${id}`);
    },

    /**
     * Eager fetch the current submission expanding out all of the children.
     * (The id is used if provided otherwise uses the submission cache context
     * @param request
     * @return {Promise.<void>}
     */
    fetchSubmission: async (request, tasks, id) => {
        if (!id) {
            const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
            id = submissionContext.id;
        }

        const submission = await internals.getSubmission(id);

        if (!submission) {
            throw new Error('Unexpected - no submission id: ' + id);
        }

        const result = {};
        result.id = submission.id;
        result.applicable_year = submission.applicable_year;
        result.status = submission.status;
        result.reporting_reference = submission.reporting_reference;
        result.nace_id = submission.nace_id;
        result.nose_ids = submission.nose_ids;

        // Get the releases
        const releases = await Api.request('SUB', 'GET', `submissions/${id}/releases`);

        // Assigned the releases to the result - by route/task
        Object.assign(result, releases._embedded.releases.reduce((accumulator, release) => {
            const task = Object.keys(tasks).find(k => tasks[k].routeId === release.route_id);
            if (!accumulator[task]) {
                accumulator[task] = [];
            }
            accumulator[task].push(release);
            return accumulator;
        }, {}));

        // Get the transfers
        const transfers = await Api.request('SUB', 'GET', `submissions/${id}/offsiteWasteTransfers`);

        // Assign the transfers to the result
        if (transfers._embedded.offsiteWasteTransfers.length) {
            result.OFFSITE_WASTE_TRANSFERS = transfers._embedded.offsiteWasteTransfers;
        }

        return result;
    },

    /**
     * Append the submission status to each eaId object - used in the start page handler
     * @param eaIds
     * @return {Promise.<*>}
     */
    addStatusToEaIds: async (eaIds, year) => {
        const submissionResponse = await internals.getSubmissionsForYear(year);

        if (submissionResponse) {

            Hoek.assert(Array.isArray(submissionResponse._embedded.submissions),
                `Invalid submission response: ${submissionResponse}`);

            const submissionStatus = submissionResponse._embedded.submissions
                .map(s => { return { eaIdId: s.reporting_reference, status: s.status, changed: s._last_modified }; });

            return eaIds.map(e => {
                // We don't want to write the status into the map so clone
                const newObject = Object.assign({}, e);
                const status = submissionStatus.find(s => s.eaIdId === e.id);
                newObject.status = status ? status.status : null;
                newObject.changed = status ? new Date().toLocaleString('en-GB') : null;

                return newObject;
            });

        }

        return eaIds;
    },

    /**
     * Retrieve the submission states for a given set of permit identifiers
     * @param eaIdIds - an array of the permit id's
     * @return {Promise.<void>}
     */
    getSubmissionsForYear: async (year) => {
        const query = 'applicable_year=' + year.toString();
        return Api.request('SUB', 'GET', 'submissions/search/findByApplicableYear', query);
    },

    /**
     * Get a submission from eaId and year
     * @param eaIdIds
     * @param year
     * @return {Promise.<*>}
     */
    getSubmissionForEaIdAndYear: async (eaIdId, year) => {
        const query = 'applicable_year=' + year.toString() + '&reporting_reference=' + eaIdId;
        const submissionResponse = await Api.request('SUB', 'GET', 'submissions/search/getByReportingReferenceAndApplicableYear', query);

        if (submissionResponse) {
            const submissions = submissionResponse._embedded.submissions;

            Hoek.assert(Array.isArray(submissions),
                `Invalid submission response: ${submissionResponse}`);

            if (submissions.length === 1) {
                return submissionResponse._embedded.submissions[0];
            }
        }
    },

    /**
     * Create a new submission with a given reporting reference (eaIdId) and year
     * return the submission
     *
     * @param eaIdId
     * @param year
     * @return {Promise.<void>}
     */
    createSubmissionForEaIdAndYear: async (eaIdId, year) => {
        return Api.request('SUB', 'POST', 'submissions', null, {
            applicable_year: year,
            reporting_reference: eaIdId,
            status: 'Unsubmitted'
        });
    },

    /**
     * Fire the submission at the API
     * @param request
     * @return {Promise.<void>}
     */
    submit: async (request) => {

        // Get the tasks
        const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
        const regimeTree = await MasterDataService.getRegimeTreeById(userContext.eaId.regime.id);
        const tasks = TaskListService.getTaskList(allSectorsTaskList, regimeTree);

        // Fetch submission with children from the PI submissions API
        const submission = await internals.fetchSubmission(request, tasks);

        // Everything except submit is required to be evaluated and review
        const routes = Object.keys(tasks).filter(k => !['SUBMIT', 'REVIEW'].includes(k)).map(r => tasks[r]);

        // Apply the changes to the routes/tasks
        await internals.applyToRoutes(request, routes, submission, {
            RELEASES_TO_LAND: internals.releaseRouteOperator,
            RELEASES_TO_AIR: internals.releaseRouteOperator,
            RELEASES_TO_CONTROLLED_WATERS: internals.releaseRouteOperator,
            OFFSITE_TRANSFERS_IN_WASTE_WATER: internals.releaseRouteOperator,
            OFFSITE_WASTE_TRANSFERS: internals.transferRouteOperator
        });

        // Prepare the submission and send the submission
        const preparedSubmission = await internals.prepareSubmission(request, submission);
        logger.debug('Submission: ' + JSON.stringify(preparedSubmission, null, 4));
        await Api.request('SUB', 'PUT', `submissions/${submission.id}`, null, preparedSubmission);

        // Finally drop the contexts
        await internals.remove(request);
    },

    // Prepare the submission data - data items at top level only
    prepareSubmission: async (request, submission) => {

        const newSubmission = ((s) => {
            return Object.assign({}, {
                applicable_year: s.applicable_year,
                id: s.id,
                reporting_reference: s.reporting_reference,
                status: s.status });
        })(submission);

        const setTask = async (currentTask, setter) => {
            const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
            submissionContext.currentTask = currentTask;
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            const task = await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).get(request);
            return setter(task);
        };

        Object.assign(newSubmission, await setTask('NACE_CODE', (task) => {
            return {
                nace_id: task.nace.id
            };
        }));

        Object.assign(newSubmission, await setTask('NOSE_CODES', (task) => {
            return {
                nose_ids: task.nose.noseIds || []
            };
        }));

        newSubmission.status = 'Submitted';

        return newSubmission;
    },

    // Create release element of message
    releasesObj: async (route, task, release) => {
        if (isBrt(task.releases[release].value)) {
            return {
                route_id: route.routeId,
                substance_id: Number.parseInt(release),
                method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                below_reporting_threshold: true
            };
        } else if (isNumeric(task.releases[release].value)) {
            return {
                route_id: route.routeId,
                substance_id: Number.parseInt(release),
                value: Number.parseFloat(task.releases[release].value),
                unit_id: task.releases[release].unitId,
                method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                below_reporting_threshold: false,
                notifiable_value: task.releases[release].notifiable ? task.releases[release].notifiable.value : null,
                notifiable_unit_id: task.releases[release].notifiable ? task.releases[release].notifiable.unitId : null,
                notifiable_reason: task.releases[release].notifiable ? task.releases[release].notifiable.reason : null
            };
        } else {
            throw new CacheKeyError('Malformed release object: ' + JSON.stringify(release));
        }
    },

    transferObj: (transfer) => {
        if (transfer.wfd.disposalId) {
            return {
                ewc_activity_id: transfer.ewc.activityId,
                wfd_disposal_id: transfer.wfd.disposalId,
                tonnage: transfer.value
            };
        } else if (transfer.wfd.recoveryId) {
            return {
                ewc_activity_id: transfer.ewc.activityId,
                wfd_recovery_id: transfer.wfd.recoveryId,
                tonnage: transfer.value
            };
        }
    },

    /**
     * Applies an object of asynchronous functions to apply to each route
     * @param request
     * @param routes
     * @param func
     * @return {Promise.<void>}
     */
    applyToRoutes: async (request, routes, submission, func) => {
        const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
        const results = {};
        for (const route of routes) {
            if (func[route.name]) {
                // We need to see the current task in the eaId
                submissionContext.currentTask = route.name;
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
                const task = await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).get(request);

                // Call the function
                if (task) {
                    results[route.name] = await func[route.name](task, submission[route.name] || [],
                        route, `submissions/${submissionContext.id}`);
                } else {
                    results[route.name] = null;
                }
            } else {
                results[route.name] = null;
            }
        }
        return results;
    },

    /**
     * Write release to submissions API.
     *
     * Release route function as in the func argument of applyToRoutes. It determines the set of API operations
     * required for a given route / task and applies them.
     * @param task - the cache task object
     * @param apiArr - an array of the corresponding objects read from the submissions API
     * @param name - the name of the route, read from the task-list object
     * @param uri - the URI of the parent submission
     * @return {Promise.<void>}
     */
    releaseRouteOperator: async (task, apiArr, route, uri) => {
        const releaseSchema = Joi.object({
            submission: Joi.string().uri({ allowRelative: true }),
            substance_id: Joi.number().integer().required(),
            route_id: Joi.number().integer().required(),
            below_reporting_threshold: Joi.boolean().required(),
            method: Joi.valid(['Measurement', 'Calculation', 'Estimation']),
            value: Joi.alternatives().when('below_reporting_threshold', {
                is: true, then: Joi.forbidden(), otherwise: Joi.number().required()
            }),
            unit_id: Joi.alternatives().when('below_reporting_threshold', {
                is: true, then: Joi.forbidden(), otherwise: Joi.number().integer().required()
            }),
            notifiable_value: [ Joi.allow(null), Joi.number() ],
            notifiable_unit_id: [ Joi.allow(null), Joi.number() ],
            notifiable_reason: [ Joi.allow(null), Joi.string() ]
        });

        // We need to sort our tasks into POST, PUT and DELETE
        const posts = [];
        const puts = [];

        if (task.releases) {
            for (const release of Object.keys(task.releases)) {
                if (apiArr) {
                    const apiObj = apiArr.find(a => a.substance_id === Number.parseInt(release));
                    if (apiObj) {
                        // Updating PUT
                        const put = await internals.releasesObj(route, task, release);
                        put.submission = uri;
                        puts.push({ id: apiObj.id, put: put });
                    } else {
                        // Creating POST
                        const post = await internals.releasesObj(route, task, release);
                        post.submission = uri;
                        posts.push(post);
                    }
                } else {
                    // Creating POST
                    const post = await internals.releasesObj(route, task, release);
                    post.submission = uri;
                    posts.push(post);
                }
            }
        }

        // Validate the objects to be sent to the API
        posts.concat(puts.map(p => p.put)).forEach(r => {
            Joi.assert(r, releaseSchema, 'Badly formed releases message: ' + JSON.stringify(r));
        });

        // Objects existing in the api but not in the task cache are removed
        let deletes = [];
        if (apiArr) {
            deletes = apiArr.filter(a => !Object.keys(task.releases)
                .map(r => Number.parseInt(r)).includes(a.substance_id));
        }

        logger.debug('Route: ' + route.name);
        logger.debug('Deletes: ' + JSON.stringify(deletes, null, 4));
        logger.debug('Posts: ' + JSON.stringify(posts, null, 4));
        logger.debug('Puts: ' + JSON.stringify(puts, null, 4));

        await Promise.all(deletes.map(async del => {
            await Api.request('SUB', 'DELETE', `releases/${del.id}`, null);
        }));

        await Promise.all(posts.map(async post => {
            await Api.request('SUB', 'POST', 'releases', null, post);
        }));

        await Promise.all(puts.map(async put => {
            await Api.request('SUB', 'PUT', `releases/${put.id}`, null, put.put);
        }));
    },

    /**
     * Write transfer object to submissions API
     *
     * Release route function as in the func argument of applyToRoutes. It determines the set of API operations
     * required for a given route / task and applies them.
     * @param task - the cache task object
     * @param apiArr - an array of the corresponding objects read from the submissions API
     * @param name - the name of the route, read from the task-list object
     * @param uri - the URI of the parent submission
     * @return {Promise.<void>}
     */
    transferRouteOperator: async (task, apiArr, route, uri) => {
        const transferSchema = Joi.alternatives().try(Joi.object({
            submission: Joi.string().uri({ allowRelative: true }),
            ewc_activity_id: Joi.number().integer(),
            wfd_disposal_id: Joi.number().integer().required(),
            wfd_recovery_id: Joi.forbidden(),
            tonnage: Joi.number()
        }), Joi.object({
            submission: Joi.string().uri({ allowRelative: true }),
            ewc_activity_id: Joi.number().integer(),
            wfd_disposal_id: Joi.forbidden(),
            wfd_recovery_id: Joi.number().integer().required(),
            tonnage: Joi.number()
        })
        ).optional();

        // We need to sort our tasks into POST, PUT and DELETE
        const posts = [];
        const puts = [];

        const transferEquals = (a, b) => {
            return a.ewc_activity_id === b.ewc_activity_id && (a.wfd_recovery_id === b.wfd_recovery_id ||
                a.wfd_disposal_id === b.wfd_disposal_id);
        };

        if (task.transfers) {
            for (const transfer of task.transfers) {
                const apiObj = await internals.transferObj(transfer);
                const transferObj = apiArr.find(a => transferEquals(a, apiObj));

                if (transferObj) {
                    // Updating PUT
                    apiObj.submission = uri;
                    puts.push({ id: transferObj.id, put: apiObj });
                } else {
                    // Creating POST
                    apiObj.submission = uri;
                    posts.push(apiObj);
                }
            }
        }

        // Validate the objects to be sent to the API
        posts.concat(puts.map(p => p.put)).forEach(r => {
            Joi.assert(r, transferSchema, 'Badly formed releases message: ' + JSON.stringify(r));
        });

        const tasks = task.transfers.map(t => internals.transferObj(t));

        const deletes = apiArr.filter(a => !tasks.find(t => transferEquals(a, t)));

        logger.debug('route: ' + route.name);
        logger.debug('Deletes: ' + JSON.stringify(deletes, null, 4));
        logger.debug('Posts: ' + JSON.stringify(posts, null, 4));
        logger.debug('Puts: ' + JSON.stringify(puts, null, 4));

        await Promise.all(deletes.map(async del => {
            await Api.request('SUB', 'DELETE', `offsiteWasteTransfers/${del.id}`, null);
        }));

        await Promise.all(posts.map(async post => {
            await Api.request('SUB', 'POST', 'offsiteWasteTransfers', null, post);
        }));

        await Promise.all(puts.map(async put => {
            await Api.request('SUB', 'PUT', `offsiteWasteTransfers/${put.id}`, null, put.put);
        }));
    },

    /**
     * Remove the cache entries after a (successful) submission
     * @param request
     * @return {Promise.<void>}
     */
    remove: async (request) => {
        let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
        const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
        const { challengeStatus } = statusHelper(submissionContext);
        const regimeTree = await MasterDataService.getRegimeTreeById(userContext.eaId.regime.id);

        // Get appropriate the task list
        const tasks = TaskListService.getTaskList(allSectorsTaskList, regimeTree);

        const routes = Object.keys(tasks).filter(c => challengeStatus.includes(c));

        for (const route of routes) {
            submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
            submissionContext.currentTask = route;
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            if (await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).get(request)) {
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).drop(request);
            }
        }

        // Remove the submission context
        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).drop(request);
    },

    /**
     * Restore the redis cache from the submissions database
     * @param request
     * @param eaId
     * @return {Promise.<null>}
     */
    restore: async (request, id) => {
        try {
            const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            const regimeTree = await MasterDataService.getRegimeTreeById(userContext.eaId.regime.id);
            const tasks = TaskListService.getTaskList(allSectorsTaskList, regimeTree);

            // Fetch submission with children from the PI submissions API
            const submission = await internals.fetchSubmission(request, tasks, id);
            Hoek.assert(['Unsubmitted', 'Submitted', 'Approved'].includes(submission.status), `Cannot restore submission: ${id}`);

            // Site codes etc
            await internals.setSubmissionCache(request, submission);

            // Releases
            await internals.setReleasesCache(request, submission, tasks);

            // Transfers
            await internals.setTransfersCache(request, submission);

            // When restoring the submitted and checked tasks are also always complete
            const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

            ['REVIEW', 'SUBMIT'].forEach(e => {
                submissionContext.confirmation[e] = false;
                submissionContext.challengeStatus[e] = false;
                setCompletedStatus(submissionContext, e);
            });

            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
        } catch (err) {
            logger.error(err);
            throw err;
        }
    },

    /**
     * Set the task cache and submission cache associated with the submission
     * @param request
     * @param submission
     * @return {Promise.<void>}
     */
    setSubmissionCache: async (request, submission) => {
        let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

        if (!submissionContext) {
            submissionContext = {};
            submissionContext.confirmation = {};
            submissionContext.challengeStatus = {};
            submissionContext.valid = {};
            submissionContext.completed = {};
        }

        submissionContext.id = submission.id;
        submissionContext.applicable_year = submission.applicable_year;
        submissionContext.status = submission.status;
        submissionContext._created = submission._created;
        submissionContext._last_modifed = submission._last_modifed;

        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);

        const setTask = async (submissionContext, currentTask, setter) => {
            submissionContext.currentTask = currentTask;
            submissionContext.confirmation[currentTask] = true;
            submissionContext.challengeStatus[currentTask] = true;
            setCompletedStatus(submissionContext, currentTask);
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            const task = setter(submission);
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, task);
        };

        if (submission.status !== submissionStatusCodes.UNSUBMITTED) {
            await setTask(submissionContext, 'NACE_CODE', (submission) => {
                const result = {};
                result.nace = {};
                result.nace.id = submission.nace_id;
                return result;
            });

            await setTask(submissionContext, 'NOSE_CODES', (submission) => {
                const result = {};
                result.nose = {
                    noseIds: submission.nose_ids
                };
                return result;
            });
        }
    },

    /**
     * Set the task and permit status caches for releases
     * @param id
     * @return {Promise.<void>}
     */
    setReleasesCache: async (request, submission, tasks) => {
        let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

        if (!submissionContext) {
            submissionContext = {};
            submissionContext.confirmation = {};
            submissionContext.challengeStatus = {};
            submissionContext.valid = {};
            submissionContext.completed = {};
        }

        const releaseTaskNames = Object.keys(tasks).filter(t => tasks[t].type === 'RELEASE');
        const methods = await MasterDataService.getMethods();

        for (const taskName of releaseTaskNames) {
            if (submission[taskName]) {
                submissionContext.currentTask = taskName;
                const task = { releases: {} };

                for (const release of submission[taskName]) {
                    const result = {};
                    if (release.below_reporting_threshold) {
                        result[release.substance_id] = {
                            methodId: methods.find(m => m.name === release.method).id,
                            value: 'BRT'
                        };
                    } else {
                        result[release.substance_id] = {
                            methodId: methods.find(m => m.name === release.method).id,
                            value: release.value.toString(),
                            unitId: release.unit_id
                        };

                        if (release.notifiable_value) {
                            result[release.substance_id].notifiable = {};
                            result[release.substance_id].notifiable.value = release.notifiable_value.toString();
                            result[release.substance_id].notifiable.unitId = release.notifiable_unit_id;
                            result[release.substance_id].notifiable.reason = release.notifiable_reason;
                        }
                    }
                    task.releases = Object.assign(task.releases, result);
                }

                submissionContext.currentTask = taskName;
                submissionContext.confirmation[taskName] = true;
                submissionContext.challengeStatus[taskName] = true;
                submissionContext.valid[taskName] = true;
                setCompletedStatus(submissionContext, taskName);
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, task);
            } else {
                if (submission.status !== submissionStatusCodes.UNSUBMITTED) {
                    submissionContext.confirmation[taskName] = true;
                    submissionContext.challengeStatus[taskName] = false;
                    setCompletedStatus(submissionContext, taskName);
                }
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            }
        }
    },

    /**
     * Set the task and permit status caches for transfers
     * @param request
     * @param transfers
     * @param transferType
     * @return {Promise.<void>}
     */
    setTransfersCache: async (request, submission) => {
        // Initialize a new permit status
        let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

        const transferType = 'OFFSITE_WASTE_TRANSFERS';

        if (!submissionContext) {
            submissionContext = {};
            submissionContext.confirmation = {};
            submissionContext.challengeStatus = {};
            submissionContext.valid = {};
            submissionContext.completed = {};
        }

        if (submission[transferType]) {
            const tasks = {};
            tasks.transfers = [];

            submissionContext.currentTask = transferType;
            submissionContext.confirmation[transferType] = true;
            submissionContext.challengeStatus[transferType] = true;
            submissionContext.valid[transferType] = true;
            setCompletedStatus(submissionContext, transferType);

            for (const transfer of submission[transferType]) {
                const hierarchies = await MasterDataService.getEwcHierarchies();
                const hierarchy = hierarchies.find(h => h.activityId === transfer.ewc_activity_id);

                tasks.transfers.push({
                    ewc: {
                        chapterId: hierarchy.chapterId,
                        subChapterId: hierarchy.subchapterId,
                        activityId: hierarchy.activityId
                    },
                    wfd: {
                        disposalId: transfer.wfd_disposal_id ? transfer.wfd_disposal_id : null,
                        recoveryId: transfer.wfd_recovery_id ? transfer.wfd_recovery_id : null
                    },
                    value: Number.parseFloat(transfer.tonnage)
                });
            }

            // Set the caches
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
        } else {
            if (submission.status !== submissionStatusCodes.UNSUBMITTED) {
                submissionContext.currentTask = transferType;
                submissionContext.confirmation[transferType] = true;
                submissionContext.challengeStatus[transferType] = false;
                setCompletedStatus(submissionContext, transferType);
            }
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
        }
    },

    setStatusForSubmission: async (request, status) => {
        try {

            Hoek.assert(['Unsubmitted', 'Submitted', 'Approved'].includes(status), `Unknown status: ${status}`);

            const { eaId, year } = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            const submission = await internals.getSubmissionForEaIdAndYear(eaId.id, year);
            submission.status = status;
            await Api.request('SUB', 'PUT', `submissions/${submission.id}`, null, submission);

            // Drop the submission context
            await internals.remove(request);
        } catch (err) {
            logger.error(err);
            throw err;
        }
    }

};

module.exports = {
    // Submission status by eaId/year
    addStatusToEaIds: internals.addStatusToEaIds,

    // Fetch a submission
    getSubmissionForEaIdAndYear: internals.getSubmissionForEaIdAndYear,

    // Create a new submission
    createSubmissionForEaIdAndYear: internals.createSubmissionForEaIdAndYear,

    // Expose redis cache restore
    restore: internals.restore,

    // The submission status codes
    submissionStatusCodes: submissionStatusCodes,

    // Set the status for a given submission
    setStatusForSubmission: internals.setStatusForSubmission,

    // Submit to the API
    submit: internals.submit
};

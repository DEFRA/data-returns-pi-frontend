/* eslint-disable camelcase */
'use strict';

/*
 * This module contains functions for the final submission stage to the API.
 * It converts the contents of the redis cache and produces the final message
 */
const Joi = require('joi');
const Hoek = require('hoek');
const uuid = require('uuid');

const MasterDataService = require('../service/master-data');
const client = require('../lib/api-client');

const transferMethods = require('../../data/static-data').transferMethods;
const cacheNames = require('./user-cache-policies').names;
const CacheKeyError = require('./user-cache-policies').CacheKeyError;
const Api = require('./api-client');
const TaskListService = require('../service/task-list');
const allSectorsTaskList = require('../model/all-sectors/task-list');
const setCompletedStatus = require('../handlers/all-sectors/common').setCompletedStatus;
const statusHelper = require('../handlers/all-sectors/common').statusHelper;
const findTransfer = require('../handlers/all-sectors/report/waste').findTransfer;
const isNumeric = require('./utils').isNumeric;
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
     * It sorts the submission routes so that they have the same name as the
     * task cache key
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
            throw new Error('Unexpected - no submission: ' + id);
        }

        const result = {};
        result.id = submission.id;
        result.applicable_year = submission.applicable_year;
        result.status = submission.status;
        result.reporting_reference = submission.reporting_reference;
        result.nace_id = submission.nace_id;
        result.nose_ids = submission.nose_ids;
        result._created = submission._created;
        result._last_modifed = submission._last_modifed;

        const releasesResponse = await client.requestLink(submission._links.releases);
        const transfersResponse = await client.requestLink(submission._links.transfers);

        if (releasesResponse._embedded.releases.length) {
            Object.assign(result, releasesResponse._embedded.releases.reduce((accumulator, release) => {
                const task = Object.keys(tasks).find(k => tasks[k].routeId === release.route_id);
                if (!accumulator[task]) {
                    accumulator[task] = [];
                }
                accumulator[task].push(release);
                return accumulator;
            }, {}));
        }

        if (transfersResponse._embedded.transfers.length) {
            result.WASTE_TRANSFERS = await Promise.all(transfersResponse._embedded.transfers.map(async transfer => {

                const result = (({ id,
                    ewc_activity_id,
                    wfd_recovery_id,
                    wfd_disposal_id,
                    tonnage,
                    below_reporting_threshold,
                    method }) =>
                    ({ id,
                        ewc_activity_id,
                        wfd_recovery_id,
                        wfd_disposal_id,
                        tonnage,
                        below_reporting_threshold,
                        method }))(transfer);

                const overseasTransfersResponse = await client.requestLink(transfer._links.overseasTransfers);

                result.overseas = overseasTransfersResponse._embedded.overseasTransfers.map(overseasTransfer => {
                    const result = (({ id,
                        tonnage,
                        method,
                        destination_address,
                        responsible_company_name,
                        responsible_company_address }) =>
                        ({ id,
                            tonnage,
                            method,
                            destination_address,
                            responsible_company_name,
                            responsible_company_address }))(overseasTransfer);

                    return result;
                });

                return result;
            }));
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
                newObject.changed = status ? new Date(status.changed).toLocaleString('en-GB') : null;

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
            WASTE_TRANSFERS: internals.transferRouteOperator
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

        newSubmission.status = submissionStatusCodes.SUBMITTED;

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
                const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);

                // Call the function
                if (task) {
                    results[route.name] = await func[route.name](userContext, task, submission[route.name] || [],
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
    releaseRouteOperator: async (userContext, task, apiArr, route, uri) => {
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
     * Used by the transferRouteOperator - creates a transfer payload
     * @param transfer
     */
    transferPayload: (transfer) => {
        const result = {};
        result.ewc_activity_id = transfer.ewc.activityId;

        if (transfer.wfd.disposalId) {
            result.wfd_disposal_id = transfer.wfd.disposalId;
        } else {
            result.wfd_recovery_id = transfer.wfd.recoveryId;
        }

        result.tonnage = transfer.value;
        result.method = transfer.method;

        if (transfer.brt) {
            result.below_reporting_threshold = true;
        }

        return result;
    },

    /**
     * Used by the transferRouteOperator - creates a overseas payload
     * @param transfer
     */
    overseasPayload: (userContext, overseas) => {
        const result = {};
        const businessAddress = userContext.addresses.business[overseas.businessAddressKey];
        const siteAddress = userContext.addresses.site[overseas.siteAddressKey];

        result.tonnage = overseas.value;
        result.method = overseas.method;
        result.responsible_company_name = businessAddress.businessName;

        result.responsible_company_address = {
            line1: businessAddress.addressLine1,
            line2: businessAddress.addressLine2,
            town_or_city: businessAddress.townOrCity,
            post_code: businessAddress.postalCode,
            country: businessAddress.country
        };

        result.destination_address = {
            line1: siteAddress.addressLine1,
            line2: siteAddress.addressLine2,
            town_or_city: siteAddress.townOrCity,
            post_code: siteAddress.postalCode,
            country: siteAddress.country
        };

        return result;
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
    transferRouteOperator: async (userContext, task, apiArr, route, uri) => {

        // Joi validator for the address
        const addressSchema = {
            line1: Joi.string().required(),
            line2: Joi.string().optional(),
            town_or_city: Joi.string().required(),
            post_code: Joi.string().required(),
            country: Joi.string().required()
        };

        // Joi validator for the overseas payload
        const overseasSchema = {
            transfer: Joi.string().uri({ allowRelative: true }),
            responsible_company_name: Joi.string().required(),
            responsible_company_address: Joi.object(addressSchema).required(),
            destination_address: Joi.object(addressSchema).required(),
            tonnage: Joi.number().required(),
            method: Joi.string().valid(transferMethods).required()
        };

        // Joi validator for the transfer payload
        const transferSchema = Joi.object({
            submission: Joi.string().uri({ allowRelative: true }),
            ewc_activity_id: Joi.number().integer(),
            wfd_disposal_id: Joi.number().integer().optional(),
            wfd_recovery_id: Joi.number().integer().optional(),
            method: Joi.string().valid(transferMethods).required(),
            below_reporting_threshold: Joi.boolean().optional(),
            tonnage: Joi.alternatives().when('below_reporting_threshold', {
                is: true, then: Joi.forbidden(), otherwise: Joi.number().required()
            })
        });

        // Equality test for two (payload) transfers
        const transferEquals = (a, b) => {
            return a.ewc_activity_id === b.ewc_activity_id && (a.wfd_recovery_id === b.wfd_recovery_id ||
                a.wfd_disposal_id === b.wfd_disposal_id);
        };

        // Determine the deletes first
        const transfersTmp = task.transfers.map(t => internals.transferPayload(t));

        if (transfersTmp) {
            const deletes = apiArr.filter(a => !transfersTmp.find(t => transferEquals(a, t)));
            const requests = deletes.map(d => `transfers/${d.id}`);
            logger.debug('Delete transfers: ' + JSON.stringify(requests, null, 4));

            // Run the requests
            await Promise.all(requests.map(async request => {
                await Api.request('SUB', 'DELETE', request);
            }));
        }

        // For each transfer in the cache determine if it is a new of changed item
        if (task.transfers) {
            for (const transfer of task.transfers) {
                const transferPayload = internals.transferPayload(transfer);
                const exists = apiArr.find(a => transferEquals(a, transferPayload));
                transferPayload.submission = uri;
                Joi.assert(transferPayload, transferSchema, 'Badly formed transfer message: ' + JSON.stringify(transferPayload));

                if (exists) {
                    // Updating PUT
                    const newTransferResponse = await Api.request('SUB', 'PUT', `transfers/${exists.id}`, null, transferPayload);
                    logger.debug('Existing Transfer: ' + JSON.stringify(newTransferResponse, null, 4));

                    // Determine the overseas transfers DELETES
                    if (exists.overseas && exists.overseas.length) {
                        let deletes = [];

                        if (!transfer.overseas) {
                            deletes = exists.overseas.map(o => String(o.id));
                        } else {
                            deletes = exists.overseas.map(o => String(o.id)).filter(a => !Object.keys(transfer.overseas).includes(a));
                        }

                        await Promise.all(deletes.map(async id => {
                            await Api.request('SUB', 'DELETE', `overseasTransfers/${id}`);
                            logger.debug('Deleted overseas: ' + id);
                        }));
                    }

                    if (transfer.overseas) {
                        const response = await Promise.all(Object.keys(transfer.overseas)
                            .filter(k => k !== 'currentKey')
                            .map(async overseasTransferKey => {
                                const overseasPayload = internals.overseasPayload(userContext, transfer.overseas[overseasTransferKey]);
                                overseasPayload.transfer = `transfer/${exists.id}`;
                                Joi.assert(overseasPayload, overseasSchema, 'Badly formed overseas message: ' + JSON.stringify(overseasPayload));
                                if (exists.overseas.map(o => String(o.id)).includes(overseasTransferKey)) {
                                    // PUT
                                    return Api.request('SUB', 'PUT', `overseasTransfers/${overseasTransferKey}`, null, overseasPayload);
                                } else {
                                    // POST
                                    return Api.request('SUB', 'POST', 'overseasTransfers', null, overseasPayload);
                                }
                            }));

                        logger.debug('Overseas transfers: ' + JSON.stringify(response, null, 4));
                    }
                } else {
                    logger.debug('New Transfer: ' + JSON.stringify(transferPayload, null, 4));
                    // The transfer is new. Create a single POST request for the transfer and the associated overseas
                    const newTransferResponse = await Api.request('SUB', 'POST', 'transfers', null, transferPayload);
                    logger.debug('New Transfer: ' + JSON.stringify(newTransferResponse, null, 4));

                    // Any overseas transfers must also be new. Create a POST request for each.
                    if (transfer.overseas) {
                        transferPayload.overseas = [];
                        Object.keys(transfer.overseas)
                            .filter(k => k !== 'currentKey')
                            .map(k => transfer.overseas[k])
                            .forEach(async overseas => {
                                // For each overseas transfer create the message, validate it and merge into the payload
                                const overseasPayload = internals.overseasPayload(userContext, overseas);
                                overseasPayload.transfer = `transfer/${newTransferResponse.id}`;
                                Joi.assert(overseasPayload, overseasSchema, 'Badly formed overseas message: ' + JSON.stringify(overseasPayload));
                                const newOverseasTransferResponse = await Api.request('SUB', 'POST', 'overseasTransfers', null, overseasPayload);
                                logger.debug('New Overseas Transfer: ' + JSON.stringify(newOverseasTransferResponse, null, 4));
                            });
                    }

                }
            }
        }
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
                submissionContext.confirmation[taskName] = true;
                submissionContext.challengeStatus[taskName] = false;
                setCompletedStatus(submissionContext, taskName);
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            }
        }
    },

    /**
     * Set the task and permit status caches for transfers from a submission
     * @param request
     * @param transfers
     * @param transferType
     * @return {Promise.<void>}
     */
    setTransfersCache: async (request, submission) => {
        // Initialize a new permit status
        let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
        const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);

        // Find an address returned by the api in the cache
        const findAddress = (addressCache, address) => {
            for (const cacheKey of Object.keys(addressCache)) {
                const cacheAddress = addressCache[cacheKey];

                if (cacheAddress.businessName && address.responsible_company_name) {
                    if (cacheAddress.businessName !== address.responsible_company_name) {
                        continue;
                    }
                } else if (cacheAddress.businessName || address.responsible_company_name) {
                    continue;
                }

                if (cacheAddress.addressLine2 !== address.line2) {
                    continue;
                }

                if (cacheAddress.addressLine2 !== address.line2) {
                    continue;
                }

                if (cacheAddress.townOrCity !== address.town_or_city) {
                    continue;
                }

                if (cacheAddress.postalCode !== address.post_code) {
                    continue;
                }

                if (cacheAddress.country !== address.country) {
                    continue;
                }

                return cacheKey;
            }

            return false;
        };

        // Convert an API format address into a cache address
        const mapAddress = (address) => {
            const cacheAddress = {};
            if (address.responsible_company_name) {
                cacheAddress.businessName = address.responsible_company_name;
            }
            cacheAddress.addressLine1 = address.line1;
            if (address.line2) {
                cacheAddress.addressLine2 = address.line2;
            }
            cacheAddress.townOrCity = address.town_or_city;
            cacheAddress.postalCode = address.post_code;
            cacheAddress.country = address.country;
            return cacheAddress;
        };

        const transferType = 'WASTE_TRANSFERS';

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
            const hierarchies = await MasterDataService.getEwcHierarchies();

            for (const transfer of submission[transferType]) {
                const hierarchy = hierarchies.find(h => h.activityId === transfer.ewc_activity_id);
                const ewcActivity = await MasterDataService.getEwcActivityById(hierarchy.activityId);
                const result = {};

                result.ewc = {
                    chapterId: hierarchy.chapterId,
                    subChapterId: hierarchy.subchapterId,
                    activityId: hierarchy.activityId
                };

                result.wfd = {
                    disposalId: transfer.wfd_disposal_id ? transfer.wfd_disposal_id : null,
                    recoveryId: transfer.wfd_recovery_id ? transfer.wfd_recovery_id : null
                };

                if (findTransfer(tasks, result) !== -1) {
                    throw new Error('Illegal Duplicate transfer returned from API: ' + JSON.stringify(result));
                }

                result.method = transfer.method;
                result.hazardous = ewcActivity.hazardous;

                if (transfer.below_reporting_threshold) {
                    result.brt = true;
                } else {
                    result.value = Number.parseFloat(transfer.tonnage);
                }

                if (transfer.overseas) {
                    result.overseas = result.overseas || {};
                    for (const overseas of transfer.overseas) {
                        const transfer = {};
                        transfer.value = overseas.tonnage;
                        transfer.method = overseas.method;
                        transfer.complete = true;

                        // Look for the address in the cache
                        if (userContext.addresses && userContext.addresses.business) {

                            const businessAddress = Object.assign(overseas.responsible_company_address, {
                                responsible_company_name: overseas.responsible_company_name
                            });

                            const businessAddressKey = findAddress(userContext.addresses.business, businessAddress);

                            if (businessAddressKey) {
                                transfer.businessAddressKey = businessAddressKey;
                            } else {
                                transfer.businessAddressKey = uuid();
                                userContext.addresses.business[transfer.businessAddressKey] = mapAddress(businessAddress);
                            }
                        } else {
                            transfer.businessAddressKey = uuid();
                            userContext.addresses = userContext.addresses || {};
                            userContext.addresses.business = userContext.addresses.business || {};
                            const businessAddress = Object.assign(overseas.responsible_company_address, {
                                responsible_company_name: overseas.responsible_company_name
                            });
                            userContext.addresses.business[transfer.businessAddressKey] = mapAddress(businessAddress);
                        }

                        if (userContext.addresses && userContext.addresses.site) {
                            const siteAddressKey = findAddress(userContext.addresses.site, overseas.destination_address);

                            if (siteAddressKey) {
                                transfer.siteAddressKey = siteAddressKey;
                            } else {
                                transfer.siteAddressKey = uuid();
                                userContext.addresses.site[transfer.siteAddressKey] = mapAddress(overseas.destination_address);
                            }
                        } else {
                            transfer.siteAddressKey = uuid();
                            userContext.addresses = userContext.addresses || {};
                            userContext.addresses.site = userContext.addresses.site || {};
                            userContext.addresses.site[transfer.siteAddressKey] = mapAddress(overseas.destination_address);
                        }

                        result.overseas[String(overseas.id)] = transfer;
                    }
                }

                tasks.transfers.push(result);
            }

            // Set the caches
            await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).set(request, userContext);
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
        } else {
            submissionContext.currentTask = transferType;
            submissionContext.confirmation[transferType] = true;
            submissionContext.challengeStatus[transferType] = false;
            setCompletedStatus(submissionContext, transferType);
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
        }
    },

    // Sets the status for a submission
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

    // Restore the redis cache submission from the submissions API
    restore: internals.restore,

    // The submission status codes
    submissionStatusCodes: submissionStatusCodes,

    // Set the status for a given submission
    setStatusForSubmission: internals.setStatusForSubmission,

    // Submit to the API
    submit: internals.submit
};

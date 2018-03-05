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
const allSectorsTaskList = require('../model/all-sectors/task-list');
const required = require('../service/task-list').required(allSectorsTaskList);
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
        const result = await Api.request('SUB', 'GET', `submissions/${id}`);
        return result;
    },

    /**
     * Append the submission status to each eaId object - used in the start page handler
     * @param eaIds
     * @return {Promise.<*>}
     */
    addStatusToEaIds: async (eaIds, year) => {
        const submissionResponse = await internals.getSubmissionStatusForEaIdsAndYear(eaIds.map(e => e.id), year);

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
    getSubmissionStatusForEaIdsAndYear: async (eaIdIds, year) => {
        const query = 'applicable_year=' + year.toString() + '&reporting_references=' + eaIdIds.join(',');
        const response = await Api.request('SUB', 'GET', 'submissions/search/findByReportingReferenceInAndApplicableYear', query);
        return response;
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
     * Remove the cache entries after a (successful) submission
     * @param request
     * @return {Promise.<void>}
     */
    remove: async (request) => {
        const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

        const { challengeStatus, valid, completed } = statusHelper(submissionContext);

        const routes = required.filter(r => {
            return challengeStatus.find(c => c === r) &&
                valid.find(v => v === r) &&
                completed.find(d => d === r);
        });

        for (const route of routes) {
            submissionContext.currentTask = route;
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).drop(request);
        }
        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).drop(request);
    },

    getReleasesToControlledWater: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/releasesToControlledWater`);
        return result._embedded.releasesToControlledWater;
    },

    getReleasesToWasteWater: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/releasesToWasteWater`);
        return result._embedded.releasesToWasteWater;
    },

    getOffsiteWasteTransfers: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/offsiteWasteTransfers`);
        return result._embedded.offsiteWasteTransfers;
    },

    getReleasesToAir: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/releasesToAir`);
        return result._embedded.releasesToAir;
    },

    getReleasesToLand: async (id) => {
        const result = await Api.request('SUB', 'GET', `submissions/${id}/releasesToLand`);
        return result._embedded.releasesToLand;
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

        submissionContext.currentTask = 'SITE_CODES';
        submissionContext.confirmation[submissionContext.currentTask] = true;
        submissionContext.challengeStatus[submissionContext.currentTask] = true;
        setCompletedStatus(submissionContext, submissionContext.currentTask);

        const tasks = {};
        tasks.nace = { id: submission.nace_id };
        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);

        await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
    },

    /**
     * Set the task and permit status caches for releases
     * @param id
     * @return {Promise.<void>}
     */
    setReleasesCache: async (request, releases, releaseType) => {
        // Initialize a new permit status
        let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

        if (!submissionContext) {
            submissionContext = {};
            submissionContext.confirmation = {};
            submissionContext.challengeStatus = {};
            submissionContext.valid = {};
            submissionContext.completed = {};
        }

        const methods = await MasterDataService.getMethods();

        if (releases.length) {
            const tasks = {};
            tasks.releases = {};

            submissionContext.currentTask = releaseType;
            submissionContext.confirmation[releaseType] = true;
            submissionContext.challengeStatus[releaseType] = true;
            submissionContext.valid[releaseType] = true;
            setCompletedStatus(submissionContext, releaseType);

            for (const release of releases) {
                if (release.below_reporting_threshold) {
                    tasks.releases[release.substance_id] = {
                        methodId: methods.find(m => m.name === release.method).id,
                        value: 'BRT'
                    };

                } else {
                    tasks.releases[release.substance_id] = {
                        methodId: methods.find(m => m.name === release.method).id,
                        value: release.value,
                        unitId: release.unit_id
                    };

                    if (release.notifiable_value) {
                        tasks.releases[release.substance_id].notifiable = {};
                        tasks.releases[release.substance_id].notifiable.value = release.notifiable_value;
                        tasks.releases[release.substance_id].notifiable.unitId = release.notifiable_unit_id;
                        tasks.releases[release.substance_id].notifiable.reason = release.notifiable_reason;
                    }
                }
            }

            // Set the caches
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).set(request, tasks);
        } else {
            submissionContext.currentTask = releaseType;
            submissionContext.confirmation[releaseType] = true;
            submissionContext.challengeStatus[releaseType] = false;
            setCompletedStatus(submissionContext, releaseType);

            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
        }
    },

    /**
     * Set the task and permit status caches for transfers
     * @param request
     * @param transfers
     * @param transferType
     * @return {Promise.<void>}
     */
    setTransfersCache: async (request, transfers, transferType) => {
        // Initialize a new permit status
        let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

        if (!submissionContext) {
            submissionContext = {};
            submissionContext.confirmation = {};
            submissionContext.challengeStatus = {};
            submissionContext.valid = {};
            submissionContext.completed = {};
        }

        if (transfers.length) {
            const tasks = {};
            tasks.transfers = [];

            submissionContext.currentTask = transferType;
            submissionContext.confirmation[transferType] = true;
            submissionContext.challengeStatus[transferType] = true;
            submissionContext.valid[transferType] = true;
            setCompletedStatus(submissionContext, transferType);

            for (const transfer of transfers) {
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
            submissionContext.currentTask = transferType;
            submissionContext.confirmation[transferType] = true;
            submissionContext.challengeStatus[transferType] = false;
            setCompletedStatus(submissionContext, transferType);
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
        }
    },

    /**
     * Fetch the current submission expanding out all of the children
     * @param request
     * @return {Promise.<void>}
     */
    fetchSubmission: async (request) => {
        const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

        const result = Object.assign({}, submissionContext);

        const fetches = [ 'releasesToAir', 'releasesToLand', 'releasesToWasteWater',
            'releasesToControlledWater', 'offsiteWasteTransfers' ];

        await Promise.all(fetches.map(async fetch => {
            const response = await Api.request('SUB', 'GET', `submissions/${submissionContext.id}/${fetch}`);
            result[fetch] = {
                data: response._embedded[fetch]
            };
        }));

        return result;
    },

    // Create release element of message
    releasesObj: async (task, release) => {
        if (isBrt(task.releases[release].value)) {
            return {
                substance_id: Number.parseInt(release),
                method: (await MasterDataService.getMethodById(task.releases[release].methodId)).name,
                below_reporting_threshold: true
            };
        } else if (isNumeric(task.releases[release].value)) {
            return {
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
                // We need to se the current task in the eaId
                submissionContext.currentTask = route.name;
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
                const task = await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).get(request);

                // Call the function
                if (task) {
                    results[route.name] = await func[route.name](task, submission[route.message.fetch].data,
                        route.message.fetch, `submissions/${submissionContext.id}`);
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
     * Release route function as in the func argument of applyToRoutes. It determines the set of API operations
     * required for a given route / task and applies them.
     * @param task - the cache task object
     * @param apiArr - an array of the corresponding objects read from the submissions API
     * @param name - the name of the route, read from the task-list object
     * @param uri - the URI of the parent submission
     * @return {Promise.<void>}
     */
    releaseRouteOperator: async (task, apiArr, name, uri) => {
        const releaseSchema = Joi.object({
            submission: Joi.string().uri({ allowRelative: true }),
            substance_id: Joi.number().integer().required(),
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
                const apiObj = apiArr.find(a => a.substance_id === Number.parseInt(release));
                if (apiObj) {
                    // Updating PUT
                    const put = await internals.releasesObj(task, release);
                    put.submission = uri;
                    puts.push({ id: apiObj.id, put: put });
                } else {
                    // Creating POST
                    const post = await internals.releasesObj(task, release);
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
        const deletes = apiArr.filter(a => !Object.keys(task.releases)
            .map(r => Number.parseInt(r)).includes(a.substance_id));

        await Promise.all(deletes.map(async del => {
            await Api.request('SUB', 'DELETE', `${name}/${del.id}`, null);
        }));

        await Promise.all(posts.map(async post => {
            await Api.request('SUB', 'POST', name, null, post);
        }));

        await Promise.all(puts.map(async put => {
            await Api.request('SUB', 'PUT', `${name}/${put.id}`, null, put.put);
        }));

    },

    /**
     * Release route function as in the func argument of applyToRoutes. It determines the set of API operations
     * required for a given route / task and applies them.
     * @param task - the cache task object
     * @param apiArr - an array of the corresponding objects read from the submissions API
     * @param name - the name of the route, read from the task-list object
     * @param uri - the URI of the parent submission
     * @return {Promise.<void>}
     */
    transferRouteOperator: async (task, apiArr, name, uri) => {
        const transferSchema = Joi.alternatives().try(Joi.object({
            submission: Joi.string().uri({ allowRelative: true }),
            ewc_activity_id: Joi.number().integer(),
            wfd_disposal_id: Joi.number().integer().required(),
            wfd_recovery_id: Joi.forbidden(),
            tonnage: Joi.number()
        }), Joi.object({
            submission: Joi.string().uri({ allowRelative: false }),
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

        await Promise.all(deletes.map(async del => {
            await Api.request('SUB', 'DELETE', `${name}/${del.id}`, null);
        }));

        await Promise.all(posts.map(async post => {
            await Api.request('SUB', 'POST', name, null, post);
        }));

        await Promise.all(puts.map(async put => {
            await Api.request('SUB', 'PUT', `${name}/${put.id}`, null, put.put);
        }));
    },

    /**
     * Restore the redis cache from the submissions database
     * @param request
     * @param eaId
     * @return {Promise.<null>}
     */
    restore: async (request, id) => {
        try {
            const submission = await internals.getSubmission(id);
            Hoek.assert(['Unsubmitted', 'Submitted', 'Approved'].includes(submission.status), `Cannot restore submission: ${id}`);

            // Site codes
            await internals.setSubmissionCache(request, submission);

            // Releases
            const releasesToAir = await internals.getReleasesToAir(id);
            const releasesToLand = await internals.getReleasesToLand(id);
            const releasesToControlledWater = await internals.getReleasesToControlledWater(id);
            const releasesToWasteWater = await internals.getReleasesToWasteWater(id);

            await internals.setReleasesCache(request, releasesToAir, 'RELEASES_TO_AIR');
            await internals.setReleasesCache(request, releasesToLand, 'RELEASES_TO_LAND');
            await internals.setReleasesCache(request, releasesToControlledWater, 'RELEASES_TO_CONTROLLED_WATERS');
            await internals.setReleasesCache(request, releasesToWasteWater, 'OFFSITE_TRANSFERS_IN_WASTE_WATER');

            // Transfers
            const offsiteWasteTransfers = await internals.getOffsiteWasteTransfers(id);
            await internals.setTransfersCache(request, offsiteWasteTransfers, 'OFFSITE_WASTE_TRANSFERS');

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

    // Prepare the submission data
    prepareSubmission: async (request, submission) => {
        // Initialize a new permit status
        const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
        submissionContext.currentTask = 'SITE_CODES';
        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
        const task = await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).get(request);
        if (task.nace) {
            submission.nace_id = task.nace.id;
        }

        if (task.nose.nose_ids) {
            submission.nose_ids = task.nose.nose_ids;
        }

        submission.status = 'Submitted';
        return submission;
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

    /**
     * Set the status on a given submission
     * @param request
     * @return {Promise.<void>}
     */
    setStatusForSubmission: async (request, status) => {
        try {

            Hoek.assert(['Unsubmitted', 'Submitted', 'Approved'].includes(status), `Unknown status: ${status}`);

            const { eaId, year } = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            const submission = await internals.getSubmissionForEaIdAndYear(eaId.id, year);
            submission.status = status;
            await Api.request('SUB', 'PUT', `submissions/${submission.id}`, null, submission);

            // Drop the submission context
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).drop(request);
        } catch (err) {
            logger.error(err);
            throw err;
        }
    },

    /**
     * Prepare the final submission JSON message and submit to the submissions API
     * @param request
     * @return {Promise.<void>}
     */
    submit: async (request) => {

        // In local test mode do nothing
        if (process.env.NODE_ENV !== 'local') {

            // Fetch submission with children from the PI submissions API
            const submission = await internals.fetchSubmission(request);

            // Submission context
            const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
            const { challengeStatus, invalid, completed } = statusHelper(submissionContext);

            // Get the required routes
            const routes = required.filter(r => challengeStatus.find(c => c === r.name))
                .filter(r => completed.find(c => c === r.name))
                .filter(r => !invalid.find(c => c === r.name));

            const result = await internals.applyToRoutes(request, routes, submission, {
                RELEASES_TO_LAND: internals.releaseRouteOperator,
                RELEASES_TO_AIR: internals.releaseRouteOperator,
                RELEASES_TO_CONTROLLED_WATERS: internals.releaseRouteOperator,
                OFFSITE_TRANSFERS_IN_WASTE_WATER: internals.releaseRouteOperator,
                OFFSITE_WASTE_TRANSFERS: internals.transferRouteOperator
            });

            logger.debug(JSON.stringify(result, null, 4));

            // Now change the status to submitted
            const newSubmission = await internals.getSubmission(submission.id);
            const preparedSubmission = await internals.prepareSubmission(request, newSubmission);
            await Api.request('SUB', 'PUT', `submissions/${submission.id}`, null, preparedSubmission);

            // Finally drop the submission context
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).drop(request);
        }
    }

};

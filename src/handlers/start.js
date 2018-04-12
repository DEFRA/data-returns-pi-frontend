'use strict';

const MasterDataService = require('../service/master-data');
const Submission = require('../lib/submission');
const errHdlr = require('../lib/utils').generalErrorHandler;
const allSectorsTaskList = require('../model/all-sectors/task-list');
const logger = require('../lib/logging').logger;

const SessionHelper = require('./session-helper');
const cacheNames = require('../lib/user-cache-policies').names;
const Hoek = require('hoek');

// Hard code year in single place
const year = 2017;

/**
 * The handler for the start page
 * @type {{start: (function(internals.Request, Function))}}
 *
 */

const internals = {

    cacheSynchronize: async (request, eaIdId, year) => {
        let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
        let submission = await Submission.getSubmissionForEaIdAndYear(eaIdId, year);

        /*
         * if there is no submission in the database then create one and create the cache with the same timestamp
         * Clear any old cache items (There should always be a db entry created when the permit-year is opened
         */
        if (!submission) {
            logger.debug(`Creating submission for eaId: ${eaIdId} and year ${year}...`);
            submission = await Submission.createSubmissionForEaIdAndYear(eaIdId, year);
            submissionContext = {};
            submissionContext.id = submission.id;
            submissionContext.applicable_year = submission.applicable_year;
            submissionContext.status = submission.status;
            submissionContext._created = submission._created;
            submissionContext._last_modifed = submission._last_modifed;
            submissionContext.confirmation = {};
            submissionContext.challengeStatus = {};
            submissionContext.valid = {};
            submissionContext.completed = {};
            logger.debug(`Creating submission cache context for submission: Id: ${submissionContext.id}`);
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);

            // Here we also need to remove the task cache entries
            for (const route of Object.keys(allSectorsTaskList)) {
                submissionContext.currentTask = route;
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
                await request.server.app.userCache.cache(cacheNames.TASK_CONTEXT).drop(request);
            }

            return submission;
        }

        // If there is no submission context (cache) then restore from the database
        if (!submissionContext) {
            logger.debug(`No submission context, restoring for submission id: ${submission.id}`);
            await Submission.restore(request, submission.id);
            return submission;
        }

        const cacheDate = new Date(submissionContext._last_modified);
        const submissionDate = new Date(submission._last_modified);

        // If the submission is newer than the cache then restore the cache
        if (submissionDate > cacheDate) {
            logger.debug(`Stale submission context, restoring for submission id: ${submission.id}`);
            await Submission.restore(request, submission.id);
            return submission;
        }

        // If the cache is newer then the submission then do nothing - we may be editing. We always reset current task
        logger.debug(`Found submission context id: ${submission.id}`);
        delete submissionContext.currentTask;
        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);

        return submission;
    }
};

module.exports = {
    /**
     * Start page handler
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */
    start: async (request, h) => {
        try {
            const session = await SessionHelper.get(request, request.auth.artifacts.sid);
            const isOperator = session.user.roles.includes('OPERATOR');

            // If we have an eaId remove it
            const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);
            if (userContext) {
                delete userContext.eaId;
                await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).set(request, userContext);
            }

            // Get the permits for the user
            const regimes = await MasterDataService.getRegimes();

            const regimeEaIdArr = await Promise.all(regimes.map(async r => {
                // Get the eaId array
                let eaIds = await MasterDataService.getEaIdsByRegimeId(r.id);

                // We need to get the submission status for each permit and map it to the permit
                eaIds = await Submission.addStatusToEaIds(eaIds, year);

                return {
                    regime: r,
                    eaIds: eaIds
                };
            }));

            // Return the start page
            return h.view('start', { user: session.user, regimes: regimeEaIdArr, is_operator: isOperator });

        } catch (err) {
            return errHdlr(err, h);
        }
    },

    /**
     * An internal user can see and edit any submitted or approved submissions
     * the operators can only go into the task list for open permits
     * otherwise they are redirected to the read only review page.
     *
     * Selects the appropriate use journey for a given permit and if necessary creates
     * the submission object within the cache
     *
     * @param {internals.Request} request - The server request object
     * @return {undefined}
     */
    select: async (request, h) => {
        try {
            const session = await SessionHelper.get(request, request.auth.artifacts.sid);

            // Determine if the logged in user in an operator or an internal user
            const isOperator = session.user.roles.includes('OPERATOR');

            const eaIdId = Number.parseInt(Object.keys(request.payload)[0]);
            const action = Object.values(request.payload)[0];

            Hoek.assert(['Open', 'View', 'Review'].includes(action), 'Unspecified action requested');

            // Get the chosen permit
            const eaId = await MasterDataService.getEaIdFromEaIdId(eaIdId);

            // Set the current permit and the current year in the user context to the user context
            const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request) || {};
            userContext.year = year;
            userContext.eaId = eaId;
            userContext.roles = session.user.roles;
            await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).set(request, userContext);

            // Determine the submission status
            const submissionContext = await internals.cacheSynchronize(request, eaIdId, year);

            if (isOperator) {

                // Operator actions
                if (action === 'View') {
                    if (submissionContext.status === Submission.submissionStatusCodes.SUBMITTED ||
                        submissionContext.status === Submission.submissionStatusCodes.APPROVED) {

                        return h.redirect('/review/confirm');
                    } else {
                        return h.redirect('/');
                    }

                } else if (action === 'Review') {
                    if (submissionContext.status === Submission.submissionStatusCodes.SUBMITTED ||
                      submissionContext.status === Submission.submissionStatusCodes.APPROVED) {

                        return h.redirect('/review/confirm');
                    } else {
                        return h.redirect('/');
                    }

                } else if (action === 'Open') {
                    if (submissionContext.status === Submission.submissionStatusCodes.UNSUBMITTED) {

                        return h.redirect('/task-list');
                    } else {
                        return h.redirect('/');
                    }
                }

            } else {

                // Internal user actions
                if (action === 'View') {
                    return h.redirect('/review/confirm');
                } else if (action === 'Review') {
                    return h.redirect('/review/confirm');
                } else if (action === 'Open') {
                    // Not yet allowed
                    return h.redirect('/');
                }
            }

        } catch (err) {
            return errHdlr(err, h);
        }
    }
};

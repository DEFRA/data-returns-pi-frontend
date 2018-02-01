'use strict';

const logger = require('../lib/logging').logger;
const MasterDataService = require('../service/master-data');
const Submission = require('../lib/submission');

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

        // if there is no submission then create one and create the cache with the same timestamp
        if (!submission) {
            submission = await Submission.createSubmissionForEaIdAndYear(eaIdId, year);
            submissionContext = {};
            submissionContext.submission = submission;
            submissionContext.confirmation = {};
            submissionContext.challengeStatus = {};
            submissionContext.valid = {};
            submissionContext.completed = {};
            await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            return submission;
        }

        // If there is no submission context then restore from the database
        if (!submissionContext) {
            await Submission.restore(request, submission.id);
            return submission;
        }

        const cacheDate = new Date(submissionContext._last_modified);
        const submissionDate = new Date(submission._last_modified);

        // If the submission is newer than the cache then restore the cache
        if (submissionDate > cacheDate) {
            await Submission.restore(request, submission.id);
            return submission;
        }

        // If the cache is newer then the submission then do nothing - we may be editing. We always reset current task
        delete submissionContext.currentTask;
        await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);

        return submission;
    }
};

module.exports = {
    /**
     * Start page handler
     * @param {internals.Request} request - The server request object
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    start: async (request, reply) => {
        try {
            const session = await SessionHelper.get(request, request.server.app.sid);
            const isOperator = session.user.roles.includes('OPERATOR');

            // Get the permits for the user
            let eaIds = await MasterDataService.getEaIdsForUser(session.user.id);

            // We need to get the submission status for each permit and map it to the permit
            eaIds = await Submission.addStatusToEaIds(eaIds, year);

            // Return the start page
            reply.view('start', { user: session.user, eaIds: eaIds, is_operator: isOperator });

        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
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
     * @param {function} reply - The server reply function
     * @return {undefined}
     */
    select: async (request, reply) => {
        try {
            const session = await SessionHelper.get(request, request.server.app.sid);

            // Determine if the logged in user in an operator or an internal user
            const isOperator = session.user.roles.includes('OPERATOR');

            const eaIdId = Number.parseInt(Object.keys(request.payload)[0]);
            const action = Object.values(request.payload)[0];

            Hoek.assert(['Open', 'View', 'Review'].includes(action), 'Unspecified action requested');

            // Get the chosen permit
            const eaId = await MasterDataService.getEaIdFromEaIdId(eaIdId);

            // Set the current permit and the current year in the user context to the user context
            await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).set(request, {
                year: year, eaId: eaId, roles: session.user.roles
            });

            // Determine the submission status
            let submission;
            if (process.env.NODE_ENV === 'localtest') {
                submission = {
                    id: 1, status: Submission.submissionStatusCodes.UNSUBMITTED
                };
                const submissionContext = {};
                submissionContext.submission = submission;
                submissionContext.confirmation = {};
                submissionContext.challengeStatus = {};
                submissionContext.valid = {};
                submissionContext.completed = {};
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
            } else {
                submission = await internals.cacheSynchronize(request, eaIdId, year);
            }

            if (isOperator) {

                // Operator actions
                if (action === 'View') {
                    if (submission.status === Submission.submissionStatusCodes.SUBMITTED ||
                        submission.status === Submission.submissionStatusCodes.APPROVED) {

                        reply.redirect('/review/confirm');
                    } else {
                        reply.redirect('/');
                    }

                } else if (action === 'Review') {
                    if (submission.status === Submission.submissionStatusCodes.SUBMITTED ||
                        submission.status === Submission.submissionStatusCodes.APPROVED) {

                        reply.redirect('/review/confirm');
                    } else {
                        reply.redirect('/');
                    }

                } else if (action === 'Open') {
                    if (submission.status === Submission.submissionStatusCodes.UNSUBMITTED) {

                        reply.redirect('/task-list');
                    } else {
                        reply.redirect('/');
                    }
                }

            } else {

                // Internal user actions
                if (action === 'View') {
                    reply.redirect('/review/confirm');
                } else if (action === 'Review') {
                    reply.redirect('/review/confirm');
                } else if (action === 'Open') {
                    // Not yet allowed
                    reply.redirect('/');
                }
            }

        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

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
                submission = {};
                submission.id = 1;
                submission.status = Submission.submissionStatusCodes.UNSUBMITTED;
            } else {
                // Get a submission or create a new one
                submission = await Submission.getSubmissionForEaIdAndYear(eaIdId, year) ||
                  await Submission.createSubmissionForEaIdAndYear(eaIdId, year);
            }

            if (isOperator && action === 'View' && (
                submission.status === Submission.submissionStatusCodes.SUBMITTED ||
                submission.status === Submission.submissionStatusCodes.APPROVED)) {

                // Operator View summary

                // If there is no permit cache then read from the database layer
                const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

                if (!submissionContext) {
                    // Rewrite the redis cache from the database
                    await Submission.restore(request, submission.id);
                }

                reply.redirect('/review/confirm');

            } else if (isOperator && submission.status === Submission.submissionStatusCodes.UNSUBMITTED && action === 'Open') {

                // Operator edit

                /*
                 * The permit status is object with containing the statuses and other meta-data
                 * for each stage within the user journey for a given (current) permit
                 */
                let submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

                if (!submissionContext) {
                    // Initialize the submission context on first open and assign the submission
                    submissionContext = {};
                    submissionContext.submission = submission;
                    submissionContext.confirmation = {};
                    submissionContext.challengeStatus = {};
                    submissionContext.valid = {};
                    submissionContext.completed = {};
                } else {
                    // Always unset the current task
                    delete submissionContext.currentTask;
                }

                // Save the permit status cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);

                reply.redirect('/task-list');

            } else if (!isOperator && submission.status === Submission.submissionStatusCodes.SUBMITTED && action === 'Open') {

                // Internal user open - this is not yet implemented
                reply.redirect('/');
            } else if (!isOperator && submission.status === Submission.submissionStatusCodes.UNSUBMITTED) {

                // Not allowed
                reply.redirect('/');

            } else if (!isOperator && submission.status === Submission.submissionStatusCodes.SUBMITTED && action === 'Review') {

                // Internal user review

                // If there is no permit cache then read from the database layer
                const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

                if (!submissionContext) {
                    // Rewrite the redis cache from the database
                    await Submission.restore(request, submission.id);
                }

                reply.redirect('/review/confirm');
            } else if (!isOperator && submission.status === Submission.submissionStatusCodes.APPROVED && action === 'View') {

                // Internal user view

                // If there is no permit cache then read from the database layer
                const submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);

                if (!submissionContext) {
                    // Rewrite the redis cache from the database
                    await Submission.restore(request, submission.id);
                }

                reply.redirect('/review/confirm');
            }

        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

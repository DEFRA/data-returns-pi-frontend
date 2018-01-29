'use strict';

const logger = require('../lib/logging').logger;
const MasterDataService = require('../service/master-data');
const Submission = require('../lib/submission');

const SessionHelper = require('./session-helper');
const cacheNames = require('../lib/user-cache-policies').names;
const Hoek = require('hoek');

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
            eaIds = await Submission.addStatusToEaIds(eaIds, 2017);

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

            // Determine the submission status
            const submission = await Submission.getSubmissionForEaIdAndYear(eaIdId, 2017);
            const submissionStatus = submission ? submission.status : Submission.submissionStatusCodes.UNSUBMITTED;

            if (isOperator && action === 'View' && (
                submissionStatus === Submission.submissionStatusCodes.SUBMITTED ||
                submissionStatus === Submission.submissionStatusCodes.APPROVED)) {

                // Operator View summary

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                // If there is no permit cache then read from the database layer
                const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
                    // Rewrite the redis cache from the database
                    await Submission.restore(request, submission.id);
                }

                reply.redirect('/review/confirm');

            } else if (isOperator && submissionStatus === Submission.submissionStatusCodes.UNSUBMITTED && action === 'Open') {

                // Operator edit

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                /*
                 * The permit status is object with containing the statuses and other meta-data
                 * for each stage within the user journey for a given (current) permit
                 */
                let permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
                    // Initialize a permit status if not exists
                    permitStatus = {};
                    permitStatus.submission = {
                        status: Submission.submissionStatusCodes.UNSUBMITTED,
                        statusDate: (new Date()).toISOString()
                    };
                    permitStatus.confirmation = {};
                    permitStatus.challengeStatus = {};
                    permitStatus.valid = {};
                    permitStatus.completed = {};
                } else {
                    // Always unset the current task
                    delete permitStatus.currentTask;
                }

                // Save the permit status cache
                await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).set(request, permitStatus);

                reply.redirect('/task-list');

            } else if (!isOperator && submissionStatus === Submission.submissionStatusCodes.SUBMITTED && action === 'Open') {

                // Internal user open - this is not yet implemented

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                // If there is no permit cache then read from the database layer
                const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
                    // Rewrite the redis cache from the database
                    await Submission.restore(request, submission.id);
                }

                reply.redirect('/task-list');
            } else if (!isOperator && eaId.status === Submission.submissionStatusCodes.UNSUBMITTED) {

                // Not allowed
                reply.redirect('/');

            } else if (!isOperator && submissionStatus === Submission.submissionStatusCodes.SUBMITTED && action === 'Review') {

                // Internal user review

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                // If there is no permit cache then read from the database layer
                const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
                // Rewrite the redis cache from the database
                    await Submission.restore(request, submission.id);
                }

                reply.redirect('/review/confirm');
            } else if (!isOperator && submissionStatus === Submission.submissionStatusCodes.APPROVED && action === 'View') {

                // Internal user view

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                // If there is no permit cache then read from the database layer
                const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
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

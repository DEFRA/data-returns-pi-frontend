'use strict';

const logger = require('../lib/logging').logger;
const MasterDataService = require('../service/master-data');
const Submission = require('../lib/submission');

const SessionHelper = require('./session-helper');
const cacheNames = require('../lib/user-cache-policies').names;

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
            eaIds = await Submission.addStatusToEaIds(eaIds);

            // Return the start page
            reply.view('start', { user: session.user, eaIds: eaIds });

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

            // Get the chosen permit
            let eaId = await MasterDataService.getEaIdFromEaId(request.payload.eaId);

            // Determine the submission status
            eaId = await Submission.addStatusToEaId(eaId);

            if (isOperator && (
                eaId.status === Submission.submissionStatusCodes.SUBMITTED ||
                eaId.status === Submission.submissionStatusCodes.APPROVED)) {

                // Operator review

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                // If there is no permit cache then read from the database layer
                const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
                    // Rewrite the redis cache from the database
                    await Submission.restore(request, eaId);
                }

                reply.redirect('/review/confirm');

            } else if (isOperator && eaId.status === Submission.submissionStatusCodes.UNSUBMITTED) {

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

            } else if (!isOperator && eaId.status === Submission.submissionStatusCodes.SUBMITTED) {

                // Internal user edit

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                // If there is no permit cache then read from the database layer
                const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
                // Rewrite the redis cache from the database
                    await Submission.restore(request, eaId);
                }

                reply.redirect('/task-list');
            } else if (!isOperator && eaId.status === Submission.submissionStatusCodes.UNSUBMITTED) {

                // Not allowed
                reply.redirect('/');

            } else if (!isOperator && eaId.status === Submission.submissionStatusCodes.APPROVED) {

                // Internal user review

                // Set the current permit in the submission cache
                await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).set(request, eaId);

                // If there is no permit cache then read from the database layer
                const permitStatus = await request.server.app.userCache.cache(cacheNames.PERMIT_STATUS).get(request);

                if (!permitStatus) {
                    // Rewrite the redis cache from the database
                    await Submission.restore(request, eaId);
                }

                reply.redirect('/review/confirm');
            }

        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

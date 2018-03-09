'use strict';

const MasterDataService = require('../service/master-data');
const Submission = require('../lib/submission');
const errHdlr = require('../lib/utils').generalErrorHandler;

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
            submissionContext.id = submission.id;
            submissionContext.applicable_year = submission.applicable_year;
            submissionContext.status = submission.status;
            submissionContext._created = submission._created;
            submissionContext._last_modifed = submission._last_modifed;
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
     * @return {undefined}
     */
    start: async (request, h) => {
        try {
            const session = await SessionHelper.get(request, request.auth.artifacts.sid);
            const isOperator = session.user.roles.includes('OPERATOR');

            // Get the permits for the user
            let eaIds = await MasterDataService.getEaIdsForUser(session.user.id);

            // We need to get the submission status for each permit and map it to the permit
            eaIds = await Submission.addStatusToEaIds(eaIds, year);

            // Return the start page
            return h.view('start', { user: session.user, eaIds: eaIds, is_operator: isOperator });

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

            const regimeTree = MasterDataService.getRegimeTreeById(eaId.regime.id);
            console.log(JSON.stringify(regimeTree));

            // Set the current permit and the current year in the user context to the user context
            await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).set(request, {
                year: year, eaId: eaId, roles: session.user.roles
            });

            // Determine the submission status
            let submissionContext = null;

            if (process.env.NODE_ENV === 'local') {
                submissionContext = await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).get(request);
                if (!submissionContext) {
                    submissionContext = {};
                    submissionContext.id = 1;
                    submissionContext.applicable_year = 2017;
                    submissionContext.status = Submission.submissionStatusCodes.UNSUBMITTED;
                    submissionContext.confirmation = {};
                    submissionContext.challengeStatus = {};
                    submissionContext.valid = {};
                    submissionContext.completed = {};
                    await request.server.app.userCache.cache(cacheNames.SUBMISSION_CONTEXT).set(request, submissionContext);
                }
            } else {
                submissionContext = await internals.cacheSynchronize(request, eaIdId, year);
            }

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

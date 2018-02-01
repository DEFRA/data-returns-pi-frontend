'set strict';

/**
 * Handlers to determine if the service state allows particular actions
 * such as changing an already submitted permit
 */
const Hoek = require('hoek');
const Submission = require('../lib/submission');
const SessionHelper = require('./session-helper');
const cacheNames = require('../lib/user-cache-policies').names;
const logger = require('../lib/logging').logger;

const expand = (p) => {
    if (p.includes('{route}')) {
        const paths = [];
        [ 'air', 'land', 'water', 'waste-water' ].forEach(route => {
            paths.push(p.replace('{route}', route));
        });
        return paths;
    }
    return [ p ];
};

/**
 * The set of paths that may change a permit / submission
 * @type {Array.<*>}
 */
const editSubmission = [].concat(...[
    '/task-list',
    '/releases/{route}/confirm',
    '/releases/{route}',
    '/releases/{route}/action',
    '/releases/{route}/add-substance',
    '/releases/{route}/detail',
    '/releases/{route}/remove',
    '/transfers/off-site',
    '/transfers/off-site/confirm',
    '/transfers/off-site/add',
    '/transfers/off-site/remove',
    '/transfers/off-site/action',
    '/submit/confirm'
].map(p => expand(p)));

const viewSubmission = ['/review/confirm'];

module.exports = {

    /**
     * Handler to regulate access to any edit/view pages.
     *
     * (1) If the submission status is un-submitted then only the permit originator may perform edit functions or
     * view the permit
     *
     * (2) If the submission status is submitted then only internal users may edit the permit. The permit originator
     * may review the permit in read-only mode
     *
     * (3) If the submission status is approved it is not possible to edit the permit without setting it back to
     * submitted. In this case all users may only review the permit.
     *
     * (4) All users may only review the permit.
     *
     * Any attempt to access any of the submission edit pages illegally will cause a redirect back to the start page
     */
    checkPermissions: async (request, reply) => {
        try {
            /*
             * If we are trying to access an edit path check we are ok to do so. We should always have a permit set
             * at this point
             */

            if (editSubmission.concat(viewSubmission).includes(request.path)) {

                // Get the chosen permit
                const userContext = await request.server.app.userCache.cache(cacheNames.USER_CONTEXT).get(request);

                if (!userContext) {
                    logger.debug('Excepted: user context');
                    return reply.redirect('/');
                }

                // Determine if the logged in user in an operator or an internal user
                const isOperator = userContext.roles.includes('OPERATOR');

                // Determine the submission status
                const submission = await Submission.getSubmissionForEaIdAndYear(userContext.eaId.id, userContext.year);
                const submissionStatus = submission ? submission.status : Submission.submissionStatusCodes.UNSUBMITTED;

                Hoek.assert(Object.values(Submission.submissionStatusCodes).includes(submissionStatus),
                    `Unknown submission status: ${submissionStatus}`);

                if (editSubmission.includes(request.path)) {
                    if (submissionStatus === Submission.submissionStatusCodes.UNSUBMITTED) {
                        if (!isOperator) {
                            return reply.redirect('/');
                        }
                    } else if (submissionStatus === Submission.submissionStatusCodes.SUBMITTED) {
                        if (isOperator) {
                            return reply.redirect('/');
                        }
                    } else if (submissionStatus === Submission.submissionStatusCodes.APPROVED) {
                        reply.redirect('/');
                    }
                } else {
                    /*
                     *if (submissionStatus === Submission.submissionStatusCodes.UNSUBMITTED) {
                     *    if (!isOperator) {
                     *        return reply.redirect('/');
                     *    }
                     *}
                     */
                }
            }

            reply.continue();

        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

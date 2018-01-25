'set strict';

/**
 * Functions to determine if the service state allows particular actions
 * such as changing an already submitted permit
 */
const MasterDataService = require('../service/master-data');
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
     * Handle the access to any edit pages.
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
                const session = await SessionHelper.get(request, request.server.app.sid);

                // Determine if the logged in user in an operator or an internal user
                const isOperator = session.user.roles.includes('OPERATOR');

                // Get the chosen permit
                let eaId = await request.server.app.userCache.cache(cacheNames.SUBMISSION_STATUS).get(request);

                // Determine the submission status
                eaId = await Submission.addStatusToEaId(eaId);

                Hoek.assert(Object.values(Submission.submissionStatusCodes).includes(eaId.status),
                    `Unknown submission status: ${eaId.status}`);

                if (editSubmission.includes(request.path)) {
                    if (eaId.status === Submission.submissionStatusCodes.UNSUBMITTED) {
                        if (!isOperator) {
                            return reply.redirect('/');
                        }
                    } else if (eaId.status === Submission.submissionStatusCodes.SUBMITTED) {
                        if (isOperator) {
                            console.log('blah');
                            return reply.redirect('/');
                        }
                    } else if (eaId.status === Submission.submissionStatusCodes.APPROVED) {
                        reply.redirect('/');
                    }
                } else {
                    if (eaId.status === Submission.submissionStatusCodes.UNSUBMITTED) {
                        if (!isOperator) {
                            return reply.redirect('/');
                        }
                    }
                }

                // These can be used anywhere in the permit specific paths listed above
                request.app.info = {
                    user: session.user,
                    submission: {
                        status: eaId.status
                    }
                };
            }

            reply.continue();

        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

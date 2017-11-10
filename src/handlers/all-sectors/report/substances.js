'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
const Helper = require('./helper');

/**
 * Route handlers for adding substances to a release
 */
module.exports = {

    /**
     * Add substances
     * @param request
     * @param reply
     * @return {Promise.<void>}
     */
    add: async (request, reply) => {
        try {
            if (request.method === 'get') {
                // Get a list of all of the substances from the master data service
                const substances = await MasterDataService.getSubstances();
                reply.view('all-sectors/report/add-substance', {substances: substances});
            } else {
                /*
                 * Add the selected substance
                 * Redirect back to the current substances page
                 */
                const substanceId = parseInt(Object.keys(request.payload)[0]);

                const substance = await MasterDataService.getSubstanceById(substanceId);

                if (!substance || Number.isNaN(substanceId)) {
                    throw new Error(`Unknown substance identifier: ${substanceId}`);
                }

                console.log(substance);
                const stageStatus = await request.server.app.userCache.cache('permit-status').get(request);

                reply.redirect(Helper.tasks[stageStatus.currentTask].uri);
            }
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

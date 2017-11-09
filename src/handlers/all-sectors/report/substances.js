'use strict';

const logger = require('../../../lib/logging').logger;
const MasterDataService = require('../../../service/master-data');
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
            // Get a list of all of the substances from the master data service
            const substances = await MasterDataService.getSubstances();

            reply.view('all-sectors/report/add-substance');
        } catch (err) {
            logger.log('error', err);
            reply.redirect('/logout');
        }
    }
};

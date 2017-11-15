'use strict';

/**
 * This is a list of error conditions which may arise during the
 * all-sector submission. It does not include flagging which is separate
 */
module.exports = {
    NOT_A_NUMBER_OR_BRT: { errno: 'PI-1000', fields: ['value'] },
    UNIT_WITH_BRT: { errno: 'PI-1001', fields: ['value', 'unit'] },
    NUMBER_WITHOUT_UNIT: { errno: 'PI-1002', fields: ['value'] }
};

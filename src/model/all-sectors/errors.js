'use strict';

/**
 * This is a list of error conditions which may arise during the
 * all-sector submission. It does not include flagging which is separate
 */
let internals = {};
const _mapByCode = new Map();

module.exports = internals = {
    NOT_A_NUMBER_OR_BRT: { errno: 'PI-1000', fields: ['value'] },
    UNIT_WITH_BRT: { errno: 'PI-1001', fields: ['value', 'unit'] },
    NUMBER_WITHOUT_UNIT: { errno: 'PI-1002', fields: ['value'] },

    // Helper map by error code
    mapByCode: (code) => {
        if (!_mapByCode.size) {
            _mapByCode.set('PI-1000', internals.NOT_A_NUMBER_OR_BRT);
            _mapByCode.set('PI-1001', internals.UNIT_WITH_BRT);
            _mapByCode.set('PI-1002', internals.NUMBER_WITHOUT_UNIT);
        }
        return _mapByCode.get(code);
    }
};

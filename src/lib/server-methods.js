'use strict';

/**
 * This module abstracts out the server methods
 * @type {{validate: module.exports.validate}}
 */
module.exports = {
    methods: [
        {
            name: 'sessionData',
            // the 'next' callback must be used to return values
            method: function (sid, data, next) {
                next(null, 'Welcome: ' + data);
            },
            options: {
                cache: {
                    segment: 'session-data',
                    expiresIn: 60000,
                    staleIn: 30000,
                    staleTimeout: 10000,
                    generateTimeout: 100
                },
                generateKey: function (sid) {
                    return sid + '_sessionData';
                }
            }
        }
    ]

};

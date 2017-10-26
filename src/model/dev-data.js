'use strict';

/**
 * Standalone data used for front end development
 */
module.exports = {

    users: [
        {
            id: 1,
            username: 'JonathanAgnew@email.com',
            password: 'ja'
        },

        {
            id: 2,
            username: 'HenryBlofeld@email.com',
            password: 'hb'
        },

        {
            id: 3,
            username: 'GeoffreyBoycott@email.com',
            password: 'gb'
        },

        {
            id: 4,
            username: 'SimonMann@email.com',
            password: 'sm'
        }
    ],

    permits: [
        {
            id: 1,
            permitNumber: 'JA0001JA',
            siteName: 'Aggers Towers, Sussex, GB'
        },

        {
            id: 2,
            permitNumber: 'HB0001HB',
            siteName: 'Blowers Place, Surrey, GB'
        },

        {
            id: 3,
            permitNumber: 'GB0001GB',
            siteName: 'Boycs House, Yorkshire, GB'
        }
    ],

    userPermits: [
        { userId: 1, permitIds: [ 1, 2 ] },
        { userId: 2, permitIds: [ 2 ] },
        { userId: 3, permitIds: [ 3 ] },
        { userId: 4, permitIds: [ 4, 5, 6 ] }
    ]

};

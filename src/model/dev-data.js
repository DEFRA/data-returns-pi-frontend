'use strict';

/**
 * Standalone data used for front end development
 */
module.exports = {

    users: [
        { id: 1, username: 'JonathanAgnew@email.com', password: 'ja' },
        { id: 2, username: 'HenryBlofeld@email.com', password: 'hb' },
        { id: 3, username: 'GeoffreyBoycott@email.com', password: 'gb' },
        { id: 4, username: 'SimonMann@email.com', password: 'sm' },
        { id: 5, username: 'gdog', password: 'gd' }
    ],

    eaIds: [
        { id: 1, name: 'JA0001JA', siteId: 1 },
        { id: 2, name: 'HB0001HB', siteId: 1 },
        { id: 3, name: 'GB0001GB', siteId: 2 },
        { id: 4, name: 'GB0002GB', siteId: 2 },
        { id: 5, name: 'GB0003GB', siteId: 2 },
        { id: 6, name: 'GB0005GB', siteId: 3 },
        { id: 7, name: 'AI0001GB', siteId: 4 }
    ],

    userEaIds: [
        { userId: 1, eaIdId: [ 1, 2 ] },
        { userId: 2, eaIdId: [ 2 ] },
        { userId: 3, eaIdId: [ 3 ] },
        { userId: 4, eaIdId: [ 4, 5, 6 ] },
        { userId: 5, eaIdId: [ 1, 2, 3, 4, 5, 6 ] }
    ],

    sites: [
        { id: 1, name: 'Edgbaston County Cricket Ground' },
        { id: 2, name: 'The Oval Cricket Ground' },
        { id: 3, name: 'Lords Cricket Ground' },
        { id: 4, name: 'Headingly Cricket Ground' }
    ]

};

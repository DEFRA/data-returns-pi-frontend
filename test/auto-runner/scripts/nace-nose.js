'use strict';

module.exports = [
    {
        'path': '/',
        'status': 302,
        'method': 'GET',
        'redirect': '/login'
    },
    {
        'path': '/login',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/login',
        'status': 302,
        'method': 'POST',
        'payload': {
            'crumb': '',
            'password': 'a',
            'username': '1@email.com'
        },
        'redirect': '/'
    },
    {
        'path': '/',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/select-permit',
        'status': 302,
        'method': 'POST',
        'payload': {
            '17': 'Open'
        },
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nace-code',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nace-code',
        'status': 302,
        'method': 'POST',
        'payload': {
            'nace': 'junk'
        },
        'redirect': '/check/nace-code'
    },
    {
        'path': '/check/nace-code',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nace-code',
        'status': 302,
        'method': 'POST',
        'payload': {
            'nace': '01.14'
        },
        'redirect': '/check/nace-summary'
    },
    {
        'path': '/check/nace-summary',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nace-summary',
        'status': 302,
        'method': 'POST',
        'payload': {
            'change': 'Change'
        },
        'redirect': '/check/nace-code'
    },
    {
        'path': '/check/nace-code',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nace-code',
        'status': 302,
        'method': 'POST',
        'payload': {
            'nace': '01.12'
        },
        'redirect': '/check/nace-summary'
    },
    {
        'path': '/check/nace-summary',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nace-summary',
        'status': 302,
        'method': 'POST',
        'payload': {},
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-code',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-code',
        'status': 302,
        'method': 'POST',
        'payload': {
            'nose': 'junk'
        },
        'redirect': '/check/nose-code'
    },
    {
        'path': '/check/nose-code',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-code',
        'status': 302,
        'method': 'POST',
        'payload': {
            'nose': '101.01'
        },
        'redirect': '/check/nose-summary'
    },
    {
        'path': '/check/nose-summary',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-summary',
        'status': 302,
        'method': 'POST',
        'payload': {
            'delete-16': 'Delete'
        },
        'redirect': '/check/nose-remove'
    },
    {
        'path': '/check/nose-remove',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-remove',
        'status': 302,
        'method': 'POST',
        'payload': {},
        'redirect': '/check/nose-code'
    },
    {
        'path': '/check/nose-code',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-code',
        'status': 302,
        'method': 'POST',
        'payload': {
            'nose': '101.01'
        },
        'redirect': '/check/nose-summary'
    },
    {
        'path': '/check/nose-summary',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-summary',
        'status': 302,
        'method': 'POST',
        'payload': {
            'add': 'Add another NOSE-P code'
        },
        'redirect': '/check/nose-code'
    },
    {
        'path': '/check/nose-code',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-code',
        'status': 302,
        'method': 'POST',
        'payload': {
            'nose': '105.09'
        },
        'redirect': '/check/nose-summary'
    },
    {
        'path': '/check/nose-summary',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-summary',
        'status': 302,
        'method': 'POST',
        'payload': {},
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/logout',
        'status': 302,
        'method': 'GET',
        'redirect': '/'
    },
    {
        'path': '/',
        'status': 302,
        'method': 'GET',
        'redirect': '/login'
    },
    {
        'path': '/login',
        'status': 200,
        'method': 'GET'
    }
];

module.exports = [
    {
        'path': '/favicon.ico',
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
            'nace': '20.13'
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
            'nace': 'dsa'
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
            'nace': '20.13'
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
            'nose': ''
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
            'nose': '105/01'
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
            'nose': '105.01'
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
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/check/nose-code',
        'status': 302,
        'method': 'GET',
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
            'delete-13': 'Delete'
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
            'nose': '105.01'
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
            'nose': '105.08'
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
        'path': '/releases/air/confirm',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/confirm',
        'status': 302,
        'method': 'POST',
        'payload': {
            'confirmation': 'false'
        },
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/land/confirm',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/land/confirm',
        'status': 302,
        'method': 'POST',
        'payload': {
            'confirmation': 'false'
        },
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/confirm',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/confirm',
        'status': 302,
        'method': 'POST',
        'payload': {
            'confirmation': 'false'
        },
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water/confirm',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water/confirm',
        'status': 302,
        'method': 'POST',
        'payload': {
            'confirmation': 'false'
        },
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/waste/confirm',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/waste/confirm',
        'status': 302,
        'method': 'POST',
        'payload': {
            'confirmation': 'false'
        },
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/review/confirm',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/review/confirm',
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
        'path': '/submit/confirm',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/submit/confirm',
        'status': 302,
        'method': 'POST',
        'payload': {},
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
            '17': 'View'
        },
        'redirect': '/review/confirm'
    },
    {
        'path': '/review/confirm',
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

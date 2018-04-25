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
            '412': 'Open'
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
            'confirmation': 'true'
        },
        'redirect': '/releases/air/add-substance'
    },
    {
        'path': '/releases/air/add-substance',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/add-substance',
        'status': 302,
        'method': 'POST',
        'payload': {
            'parameterId': [
                '2403',
                '1956',
                '2390'
            ]
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'brt': 'true',
            'method': 'Measurement',
            'notifiable': 'false',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '',
            'unit': '183',
            'value': ''
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Measurement',
            'notifiable': 'false',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '',
            'unit': '183',
            'value': ''
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'brt': 'true',
            'method': 'Measurement',
            'notifiable': 'true',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '',
            'unit': '183',
            'value': '23'
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Estimation',
            'notifiable': 'true',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '26',
            'unit': '183',
            'value': '23'
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Estimation',
            'notifiable': 'true',
            'notifiable_reason': 'asdf',
            'notifiable_unit': '183',
            'notifiable_value': '11',
            'unit': '183',
            'value': '23'
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Measurement',
            'notifiable': 'false',
            'notifiable_reason': '',
            'notifiable_unit': '181',
            'notifiable_value': '',
            'unit': '181',
            'value': '12'
        },
        'redirect': '/releases/air'
    },
    {
        'path': '/releases/air',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air',
        'status': 302,
        'method': 'POST',
        'payload': {
            'release-change:1956': 'Change'
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Calculation',
            'notifiable': 'true',
            'notifiable_reason': 'asdf',
            'notifiable_unit': '183',
            'notifiable_value': '11',
            'unit': '182',
            'value': '22'
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Calculation',
            'notifiable': 'true',
            'notifiable_reason': 'asdf',
            'notifiable_unit': '182',
            'notifiable_value': '11',
            'unit': '182',
            'value': '22'
        },
        'redirect': '/releases/air'
    },
    {
        'path': '/releases/air',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue'
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
            'confirmation': 'true'
        },
        'redirect': '/releases/water/add-substance'
    },
    {
        'path': '/releases/water/add-substance',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/add-substance',
        'status': 302,
        'method': 'POST',
        'payload': {
            'parameterId': '2222'
        },
        'redirect': '/releases/water/details'
    },
    {
        'path': '/releases/water/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Measurement',
            'notifiable': 'false',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '',
            'subroute_id': '5',
            'unit': '183',
            'value': ''
        },
        'redirect': '/releases/water/details'
    },
    {
        'path': '/releases/water/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Measurement',
            'notifiable': 'true',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '',
            'subroute_id': '5',
            'unit': '183',
            'value': '2'
        },
        'redirect': '/releases/water/details'
    },
    {
        'path': '/releases/water/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Measurement',
            'notifiable': 'false',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '',
            'subroute_id': '5',
            'unit': '183',
            'value': '2'
        },
        'redirect': '/releases/water'
    },
    {
        'path': '/releases/water',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue'
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
            'confirmation': 'true'
        },
        'redirect': '/releases/waste-water/add-substance'
    },
    {
        'path': '/releases/waste-water/add-substance',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water/add-substance',
        'status': 302,
        'method': 'POST',
        'payload': {
            'parameterId': '2213'
        },
        'redirect': '/releases/waste-water/details'
    },
    {
        'path': '/releases/waste-water/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Measurement',
            'notifiable': 'false',
            'notifiable_reason': '',
            'notifiable_unit': '181',
            'notifiable_value': '',
            'subroute_id': '1',
            'unit': '181',
            'value': '23'
        },
        'redirect': '/releases/waste-water'
    },
    {
        'path': '/releases/waste-water',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water',
        'status': 302,
        'method': 'POST',
        'payload': {
            'release-change:2213': 'Change'
        },
        'redirect': '/releases/waste-water/details'
    },
    {
        'path': '/releases/waste-water/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Measurement',
            'notifiable': 'true',
            'notifiable_reason': 'sdaf',
            'notifiable_unit': '181',
            'notifiable_value': '1',
            'subroute_id': '1',
            'unit': '181',
            'value': '23'
        },
        'redirect': '/releases/waste-water'
    },
    {
        'path': '/releases/waste-water',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue'
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
            '412': 'View'
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
    },
    {
        'path': '/login',
        'status': 302,
        'method': 'POST',
        'payload': {
            'crumb': '',
            'password': 'a',
            'username': 'ea1'
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
            '412': 'Review'
        },
        'redirect': '/review/confirm'
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
        'payload': {
            'notApprove': 'Do not approve'
        },
        'redirect': '/'
    },
    {
        'path': '/',
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
            '412': 'Open'
        },
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/confirm',
        'status': 302,
        'method': 'GET',
        'redirect': '/releases/air'
    },
    {
        'path': '/releases/air',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air',
        'status': 302,
        'method': 'POST',
        'payload': {
            'release-delete:2390': 'Delete'
        },
        'redirect': '/releases/air/remove'
    },
    {
        'path': '/releases/air/remove',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/remove',
        'status': 302,
        'method': 'POST',
        'payload': {},
        'redirect': '/releases/air'
    },
    {
        'path': '/releases/air',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air',
        'status': 302,
        'method': 'POST',
        'payload': {
            'release-change:1956': 'Change'
        },
        'redirect': '/releases/air/details'
    },
    {
        'path': '/releases/air/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Calculation',
            'notifiable': 'false',
            'notifiable_reason': 'asdf',
            'notifiable_unit': '182',
            'notifiable_value': '11',
            'unit': '182',
            'value': '22'
        },
        'redirect': '/releases/air'
    },
    {
        'path': '/releases/air',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue'
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
        'status': 302,
        'method': 'GET',
        'redirect': '/releases/waste-water'
    },
    {
        'path': '/releases/waste-water',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water',
        'status': 302,
        'method': 'POST',
        'payload': {
            'add': 'Add new releases'
        },
        'redirect': '/releases/waste-water/add-substance'
    },
    {
        'path': '/releases/waste-water/add-substance',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water/add-substance',
        'status': 302,
        'method': 'POST',
        'payload': {
            'parameterId': [
                '896',
                '1002'
            ]
        },
        'redirect': '/releases/waste-water/details'
    },
    {
        'path': '/releases/waste-water/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'method': 'Measurement',
            'notifiable': 'false',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '',
            'subroute_id': '1',
            'unit': '183',
            'value': '1'
        },
        'redirect': '/releases/waste-water/details'
    },
    {
        'path': '/releases/waste-water/details',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water/details',
        'status': 302,
        'method': 'POST',
        'payload': {
            'brt': 'true',
            'method': 'Measurement',
            'notifiable': 'false',
            'notifiable_reason': '',
            'notifiable_unit': '183',
            'notifiable_value': '',
            'subroute_id': '1',
            'unit': '183',
            'value': ''
        },
        'redirect': '/releases/waste-water'
    },
    {
        'path': '/releases/waste-water',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/waste-water',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue'
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
        'status': 302,
        'method': 'GET',
        'redirect': '/releases/water'
    },
    {
        'path': '/releases/water',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water',
        'status': 302,
        'method': 'POST',
        'payload': {
            'release-delete:2222': 'Delete'
        },
        'redirect': '/releases/water/remove'
    },
    {
        'path': '/releases/water/remove',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/remove',
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
        'path': '/review/confirm',
        'status': 200,
        'method': 'GET'
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
            '412': 'View'
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

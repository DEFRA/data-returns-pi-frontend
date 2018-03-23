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
        'status': 200,
        'method': 'POST',
        'payload': {
            'crumb': '',
            'password': 'qwer',
            'username': 'qwer'
        }
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
            '248': 'Open'
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
        'redirect': '/releases/air'
    },
    {
        'path': '/releases/air',
        'status': 302,
        'method': 'GET',
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
            'parameterId': '66'
        },
        'redirect': '/releases/air/detail'
    },
    {
        'path': '/releases/air/detail',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/detail',
        'status': 302,
        'method': 'POST',
        'payload': {
            'hasNotifiableRelease': 'No',
            'methodId': '--',
            'notifiableReason': '',
            'notifiableUnitId': '--',
            'notifiableValue': '',
            'unitId': '--',
            'value': 'qwer'
        },
        'redirect': '/releases/air/detail'
    },
    {
        'path': '/releases/air/detail',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/detail',
        'status': 302,
        'method': 'POST',
        'payload': {
            'hasNotifiableRelease': 'No',
            'methodId': '1',
            'notifiableReason': '',
            'notifiableUnitId': '--',
            'notifiableValue': '',
            'unitId': '143',
            'value': '123'
        },
        'redirect': '/releases/air'
    },
    {
        'path': '/releases/air',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'add': 'Add a substance',
            'unitId-66': '143',
            'value-66': '123'
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
            'parameterId': '94'
        },
        'redirect': '/releases/air/detail'
    },
    {
        'path': '/releases/air/detail',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/detail',
        'status': 302,
        'method': 'POST',
        'payload': {
            'hasNotifiableRelease': 'Yes',
            'methodId': '1',
            'notifiableReason': 'Cause',
            'notifiableUnitId': '143',
            'notifiableValue': '234',
            'unitId': '--',
            'value': 'brt'
        },
        'redirect': '/releases/air/detail'
    },
    {
        'path': '/releases/air/detail',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/detail',
        'status': 302,
        'method': 'POST',
        'payload': {
            'hasNotifiableRelease': 'Yes',
            'methodId': '1',
            'notifiableReason': 'Cause',
            'notifiableUnitId': '143',
            'notifiableValue': '234',
            'unitId': '--',
            'value': '234'
        },
        'redirect': '/releases/air/detail'
    },
    {
        'path': '/releases/air/detail',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/detail',
        'status': 302,
        'method': 'POST',
        'payload': {
            'hasNotifiableRelease': 'Yes',
            'methodId': '1',
            'notifiableReason': 'Cause',
            'notifiableUnitId': '143',
            'notifiableValue': '234',
            'unitId': '139',
            'value': '234'
        },
        'redirect': '/releases/air'
    },
    {
        'path': '/releases/air',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/air/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue',
            'unitId-66': '143',
            'unitId-94': '139',
            'value-66': '123',
            'value-94': '234'
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
            'confirmation': 'true'
        },
        'redirect': '/releases/water'
    },
    {
        'path': '/releases/water',
        'status': 302,
        'method': 'GET',
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
            'parameterId': '548'
        },
        'redirect': '/releases/water/detail'
    },
    {
        'path': '/releases/water/detail',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/detail',
        'status': 302,
        'method': 'POST',
        'payload': {
            'hasNotifiableRelease': 'No',
            'methodId': '2',
            'notifiableReason': '',
            'notifiableUnitId': '--',
            'notifiableValue': '',
            'unitId': '139',
            'value': '123'
        },
        'redirect': '/releases/water'
    },
    {
        'path': '/releases/water',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/releases/water/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue',
            'unitId-548': '139',
            'value-548': '123'
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
        'path': '/transfers/off-site/confirm',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/confirm',
        'status': 302,
        'method': 'POST',
        'payload': {
            'confirmation': 'true'
        },
        'redirect': '/transfers/off-site'
    },
    {
        'path': '/transfers/off-site',
        'status': 302,
        'method': 'GET',
        'redirect': '/transfers/off-site/add'
    },
    {
        'path': '/transfers/off-site/add',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/add',
        'status': 302,
        'method': 'POST',
        'payload': {
            'ewc': '01 01 01',
            'value': '234',
            'wfd': 'd4'
        },
        'redirect': '/transfers/off-site'
    },
    {
        'path': '/transfers/off-site',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'add': 'Add a new off-site waste transfer',
            'value-0': '234'
        },
        'redirect': '/transfers/off-site/add'
    },
    {
        'path': '/transfers/off-site/add',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/add',
        'status': 302,
        'method': 'POST',
        'payload': {
            'ewc': '01 01 01',
            'value': '22',
            'wfd': 'r12'
        },
        'redirect': '/transfers/off-site'
    },
    {
        'path': '/transfers/off-site',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'add': 'Add a new off-site waste transfer',
            'value-0': '234',
            'value-1': '22'
        },
        'redirect': '/transfers/off-site/add'
    },
    {
        'path': '/transfers/off-site/add',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/add',
        'status': 302,
        'method': 'POST',
        'payload': {
            'ewc': '99 99 99',
            'value': '',
            'wfd': ''
        },
        'redirect': '/transfers/off-site/add'
    },
    {
        'path': '/transfers/off-site/add',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/confirm',
        'status': 302,
        'method': 'GET',
        'redirect': '/transfers/off-site'
    },
    {
        'path': '/transfers/off-site',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue',
            'value-0': '234',
            'value-1': '22'
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
            '248': 'View'
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
            '248': 'Review'
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
            '248': 'Open'
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
        'path': '/releases/air/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'delete-94': 'Delete',
            'unitId-66': '143',
            'unitId-94': '139',
            'value-66': '123',
            'value-94': '234'
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
        'path': '/releases/air/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue',
            'unitId-66': '143',
            'value-66': '123'
        },
        'redirect': '/task-list'
    },
    {
        'path': '/task-list',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/confirm',
        'status': 302,
        'method': 'GET',
        'redirect': '/transfers/off-site'
    },
    {
        'path': '/transfers/off-site',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'delete-1': 'Delete',
            'value-0': '22',
            'value-1': '234'
        },
        'redirect': '/transfers/off-site/remove'
    },
    {
        'path': '/transfers/off-site/remove',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/remove',
        'status': 302,
        'method': 'POST',
        'payload': {},
        'redirect': '/transfers/off-site'
    },
    {
        'path': '/transfers/off-site',
        'status': 200,
        'method': 'GET'
    },
    {
        'path': '/transfers/off-site/action',
        'status': 302,
        'method': 'POST',
        'payload': {
            'continue': 'Continue',
            'value-0': '22'
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
            '248': 'Review'
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
        'payload': {},
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
    }
];

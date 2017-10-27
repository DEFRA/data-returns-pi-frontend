'use strict';

const Hoek = require('hoek');

const model = {};

module.exports = model.Role = function () {

    Hoek.assert(this instanceof model.Role, 'Role must be instantiated using new');

};

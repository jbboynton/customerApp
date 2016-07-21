/**
 * Index of available controllers.
 */

'use strict';

var app = require('angular').module('customerApp');

app.controller('ListCtrl', require('./list.js'));
app.controller('FormCtrl', require('./form.js'));

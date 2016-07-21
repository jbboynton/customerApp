/**
 * Index of available services.
 */

'use strict';

var app = require('angular').module('customerApp');

app.factory('CustomerDataService', require('./customers.js'));

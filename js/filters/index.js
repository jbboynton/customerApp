/**
 * Index of available filters.
 */

'use strict';

var app = require('angular').module('customerApp');

app.filter('possessive', require('./possessive.js'));

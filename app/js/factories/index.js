/**
 * Index of available factories.
 */

'use strict';

var app = angular.module('customerApp');

app.factory('CustomerDataFactory', require('./customerDataFactory.js'));

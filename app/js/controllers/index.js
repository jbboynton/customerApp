/**
 * Index of available controllers.
 */

'use strict';

var app = angular.module('customerApp');

app.controller('ListController', require('./listController.js'));
app.controller('ModalController', require('./modalController.js'));

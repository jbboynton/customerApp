/**
 * TODO: comment
 */

var angular = require('angular');
require('angular-route');
require('angular-resource');
require('angular-ui-bootstrap');

var app = angular.module('customerApp', [
  'ngRoute',
  'ngResource',
  'ui.bootstrap'
]);


require('./filters');
require('./services');
require('./controllers');
//
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListController as vm',
      templateUrl: 'app/views/list.html'
    })
    .otherwise({ redirectTo: '/' });
});

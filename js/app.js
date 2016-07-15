/**
 * Module definition file.
 */

'use strict';

/**
 * In my first attempt, I tried to structure my project based on some best-
 * practices that I found on the AngularJS website.  After spending a few weeks
 * learning more about the framework, I decided to try an alternate approach --
 * this time around, I've organized my code into CommonJS modules, and used a
 * tool called Browserify to run everything in the browser.  Browserify
 * bundles all the modules and dependencies together, and outputs them to a
 * script that can be loaded in the browser.
 *
 * As it stands, I haven't been able to figure out how to load the JSON service
 * in a CommonJS module, so right now it's defined in this file.  I plan on
 * fixing that as soon as I can.  Once that is taken care of, I'll be adding
 * proper form validation, automated testing, and improving the UI with the
 * AngularUI library.
 */

var angular = require('angular');
require('angular-route');
require('angular-resource');
// require('modules/customerData.js').name;

var app = angular.module('customerApp', [
  'ngRoute',
  'ngResource'
  // 'CustomerDataService'
]);

require('./filters');
require('./controllers');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListCtrl',
      templateUrl: 'views/list.html'
    })
    .otherwise({ redirectTo: '/' });
});

/* See comment at the top of the page */
app.factory('CustomerDataService', ['$resource', function($resource) {
  return $resource(
    'http://577b334c3d21811100a14cd3.mockapi.io/api/customers/:id',
    { id: '@id' },
    { update: { method: 'PUT' } },
    { stripTrailingSlashes: false }
  );
}]);

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
 * TODO list:
 *   - Form validation
 *   - Adding tests
 *   - Improve documentation with ngAnnotate
 *   - UI enhancements
 *     -- AngularUI library for interacting with Bootstrap modals
 *   - Move business logic out of the list controller and into a factory
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

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListCtrl',
      templateUrl: 'views/list.html'
    })
    .otherwise({ redirectTo: '/' });
});

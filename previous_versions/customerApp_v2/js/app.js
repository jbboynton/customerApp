/**
 * Module definition file.
 */

'use strict';

/**
 * In order to simplify the project's structure, this application is organized
 * into CommonJS modules.  The CommonJS format allows each section of the app
 * to be required in, and as a result, unrelated components are kept completely
 * isolated, making the code easier to understand and maintain.
 *
 * Another advantage of using the CommonJS syntax is the ability to integrate
 * with a tool called Browserify.  Browserify compiles modules by "bundling"
 * modules and dependencies together, then producing a single script that can
 * then be loaded in the browser.  This elimiates the need for redundant script
 * tags in the HTML, and ensures that all dependencies are loaded in the
 * correct order.
 *
 * TODO list:
 *   - Fix issue with form not submitting/using both ng-submit and ng-click
 *   - Integrate the "controller as" syntax to reduce/eliminate $scope
 *   - Adding tests
 *   - Design and style enhancements
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

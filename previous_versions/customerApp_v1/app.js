/**
 * cybercare_app
 * /app.js
 *
 * Module definition file.
 */

angular.module('app', ['ngRoute', 'ngResource', 'filter.possessive'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'AppCtrl',
      templateUrl: '/components/customers/customers.html'
    })
    .otherwise({ redirectTo: '/' });
})

.factory('CustomerService', function($resource) {
  return $resource(
    'http://577b334c3d21811100a14cd3.mockapi.io/api/customers/:id',
    { id: '@id' },
    { update: { method: 'PUT' } },
    { stripTrailingSlashes: false }
  );
})

.controller('AppCtrl', function($scope, $window, CustomerService) {

  /* Get the customer list and store the number of records in the scope */
  $scope.customers = CustomerService.query(function() {
    $scope.numCustomers = $scope.customers.length;
  });

  /* Select an individual customer to edit */
  $scope.editCustomer = function(customerID) {
    $scope.customerToEdit = CustomerService.get({ id: customerID });
  };

  /* Update the specified customer */
  $scope.updateCustomer = function(customerID) {
    CustomerService.update(
      { id: $scope.customerToEdit.id },
      {
        name: $scope.editedCustomer.name,
        email: $scope.editedCustomer.email,
        telephone: $scope.editedCustomer.telephone,
        street: $scope.editedCustomer.street,
        city: $scope.editedCustomer.city,
        state: $scope.editedCustomer.state,
        zip: $scope.editedCustomer.zip
      }
    );

    /* Reload the page to make the changes visible */
    $window.location.href = '/';
  };

  /* Add a customer to the list */
  $scope.addCustomer = function() {
    $scope.customerToCreate = new CustomerService(
      {
        "name": $scope.createdCustomer.name,
        "telephone": $scope.createdCustomer.telephone,
        "email": $scope.createdCustomer.email,
        "street": $scope.createdCustomer.street,
        "city": $scope.createdCustomer.city,
        "state": $scope.createdCustomer.state,
        "zip": $scope.createdCustomer.zip
      }
    );

    /* Save the new customer object and reload the page */
    $scope.customerToCreate.$save(function() {
      $window.location.href = '/';
    })
  };

  /* Remove a customer from the list */
  $scope.removeCustomer = function(customerID) {
    CustomerService.delete({ id: customerID }, function() {
      $window.location.href = '/';
    });
  };

});

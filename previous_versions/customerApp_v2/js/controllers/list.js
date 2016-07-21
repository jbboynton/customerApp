/**
 * Customer list controller definition file.
 */

'use strict';

module.exports = function($scope, $uibModal, CustomerDataService) {

  /* Refresh the customer list by querying CustomerDataService */
  $scope.refreshCustomers = function() {
    $scope.customers = CustomerDataService.query(function() {
      $scope.numCustomers = $scope.customers.length;
    });
  };

  $scope.refreshCustomers();

  /* Display the edit customer form in a modal dialog */
  $scope.showEditCustomerForm = function(customerID) {
    $scope.customerToEdit = CustomerDataService.get({ id: customerID });

    var modalInstance = $uibModal.open({
      controller: 'FormCtrl',
      scope: $scope,
      templateUrl: 'views/edit.html'
    });
  };

  /* Display the add customer form in a modal dialog */
  $scope.showAddCustomerForm = function() {
    var modalInstance = $uibModal.open({
      controller: 'FormCtrl',
      scope: $scope,
      templateUrl: 'views/add.html'
    });
  };

  /* Remove a customer from the list */
  $scope.removeCustomer = function(customerID) {
    CustomerDataService.delete({ id: customerID }, function() {
      $scope.refreshCustomers();
    });
  };

};

/**
 * Customer list controller definition file.
 */

'use strict';

module.exports = function($scope, $uibModal, CustomerDataService) {

  var vm = this;

  /* Refresh the customer list */
  $scope.refreshCustomers = function() {
    $scope.customers = CustomerDataService.query(function() {
      vm.numCustomers = $scope.customers.length;
    });
  };

  $scope.refreshCustomers();

  /* Show a modal dialog for editing a customer */
  vm.showEditCustomerForm = function(customerID) {
    $scope.customerToEdit = CustomerDataService.get({ id: customerID });

    var modalInstance = $uibModal.open({
      controller: 'ModalController as vm',
      scope: $scope,
      templateUrl: 'app/views/edit.html'
    });
  };

  /* Show a modal dialog for adding a customer */
  vm.showAddCustomerForm = function() {
    var modalInstance = $uibModal.open({
      controller: 'ModalController as vm',
      scope: $scope,
      templateUrl: 'app/views/create.html'
    });
  };

  /* Remove a customer from the list */
  vm.removeCustomer = function(customerID) {
    CustomerDataService.delete({ id: customerID }, function() {
      $scope.refreshCustomers();
    });
  };

};

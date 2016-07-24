/**
 * CustomerEditController definition file.
 */

'use strict';

module.exports = function($scope, $uibModalInstance, CustomerDataService) {

  var vm = this;

  /* Add a customer */
  vm.addCustomer = function() {
    vm.customerToCreate = new CustomerDataService(vm.createdCustomer);

    /* Save the new customer object */
    vm.customerToCreate.$save(vm.customers, function() {
      vm.customers.push(vm.customerToCreate);
      $scope.refreshCustomers();
    });

    $uibModalInstance.close();
  };

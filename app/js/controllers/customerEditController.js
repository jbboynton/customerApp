/**
 * CustomerEditController definition file.
 */

'use strict';

module.exports = function($scope, $uibModalInstance, CustomerDataService, customer) {

  var vm = this;

  vm.customerToEdit = customer;

  console.log(vm.customerToEdit);

  /* Update the specified customer */
  vm.updateCustomer = function() {

    CustomerDataService.update(
      { id: vm.customerToEdit.id },
      vm.customerToEdit,
      function() {
        $scope.refreshCustomers();
      }
    );

    $uibModalInstance.close();
  };
};

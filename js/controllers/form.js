/**
 * Customer edit/add controller definition file.
 */

'use strict';

module.exports = function($scope, $uibModalInstance, CustomerDataService) {

  /* Dismiss the modal */
  $scope.dismiss = function() {
    $uibModalInstance.dismiss();
  };

  /* Add a customer */
  $scope.addCustomer = function() {
    $scope.customerToCreate = new CustomerDataService($scope.createdCustomer);

    /* Save the new customer object */
    $scope.customerToCreate.$save($scope.customers, function() {
      $scope.customers.push($scope.customerToCreate);
      $scope.refreshCustomers();
    });

    $uibModalInstance.close();
  };

  /* Update the specified customer */
  $scope.updateCustomer = function() {
    CustomerDataService.update(
      { id: $scope.customerToEdit.id },
      {
        fullName: $scope.editedCustomer.fullName,
        email: $scope.editedCustomer.email,
        telephone: $scope.editedCustomer.telephone,
        street: $scope.editedCustomer.street,
        city: $scope.editedCustomer.city,
        state: $scope.editedCustomer.state,
        zip: $scope.editedCustomer.zip
      },
      function() {
        $scope.refreshCustomers();
      }
    );

    $uibModalInstance.close();
  };

};

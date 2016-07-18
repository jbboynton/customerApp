/**
 * Customer list controller definition file.
 *
 * TODO: Move business logic into the service module. Probably add another
 * controller to handle the form elements and/or modals.
 */

'use strict';

module.exports = function($scope, $uibModal, $uibModalInstance,
    CustomerDataService) {

  // --------------------------------------------------------------------------
  // --  Get the list of customers --------------------------------------------

  /* Refresh the customer list by querying CustomerDataService */
  var refreshCustomers = function() {
    $scope.customers = CustomerDataService.query(function() {
      $scope.numCustomers = $scope.customers.length;
    });
  };

  refreshCustomers();

  // --------------------------------------------------------------------------
  // --  Update a customer ----------------------------------------------------

  /* Select an individual customer to edit */
  $scope.editCustomer = function(customerID) {
    $scope.editedCustomer = { };

    $scope.customerToEdit = CustomerDataService.get({ id: customerID });
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
        refreshCustomers();
      }
    );

    /* TODO: use AngularUI instead of jQuery */
    $('#editModal').modal('hide');

    $scope.editedCustomer = { };
  };

  // --------------------------------------------------------------------------
  // --  Add a customer -------------------------------------------------------

  $scope.showAddCustomerForm = function() {
    $uibModal.open({
      controller: 'ListCtrl',
      templateUrl: 'views/add.html'
    });
    console.log('got this far');
  };

  $scope.closeForm = function() {
    console.log('try to dismiss');
    $uibModalInstance.dismiss();
  };

  /* New object to store the new customer's data */
  $scope.createNewCustomer = function() {
    $scope.createdCustomer = { };
  };

  /* Add a customer to the list */
  $scope.addCustomer = function() {
    $scope.customerToCreate = new CustomerDataService($scope.createdCustomer);

    /* Save the new customer object */
    $scope.customerToCreate.$save($scope.customers, function() {
      $scope.customers.push($scope.customerToCreate);
    });

    refreshCustomers();

    /* TODO: use AngularUI instead of jQuery */
    $('#addModal').modal('hide');

    $scope.createdCustomer = { };
  };

  // --------------------------------------------------------------------------
  // --  Delete a customer ----------------------------------------------------

  /* Remove a customer from the list */
  $scope.removeCustomer = function(customerID) {
    CustomerDataService.delete({ id: customerID }, function() {
      refreshCustomers();
    });
  };

};

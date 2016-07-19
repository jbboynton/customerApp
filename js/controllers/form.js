/**
 * Customer edit/add controller definition file.
 */

'use strict';

module.exports = function($scope, $uibModalInstance, CustomerDataService) {

  /* Validation, just to demonstrate validation of form input. Not meant to
      be comprehensive, but just a preliminary validation on the client-side. /*

  /* Regex for validating phone numbers.

      True if (in order):
      - delimiter                                    :  /
      - beginning of string                          :  ^
      - (optionally) a '+'                           :  [\+]?
      - (optionally) a '('                           :  [(]?
      - 3 digits, 0 through 9                        :  [0-9]{3}
      - (optionally) a ')'                           :  [)]?
      - (optionally) a '-', '.', or whitespace char  :  [\-\s\.]?
      - 3 digits, 0 through 9                        :  [0-9]{3}
      - (optionally) a '-', '.', or whitespace char  :  [\-\s\.]?
      - 4 to 6 digits, 0 through 9                   :  [0-9]{4-6}
      - end of string                                :  $
      - delimiter                                    :  /

      Flags:
      - i: ignore case
      - m: multiline, i.e., regex will match per line, even if the string spans
          multiple lines
  */
  $scope.phoneRegex =
    new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'im');

  /* Regex for validating names.

      True if (in order):
      - delimiter                                  :  /
      - beginning of string                        :  ^
      - (one or more) characters 'a' through 'z',  :  [a-z
          (a space),                               :  (space)
          , (a comma),                             :  ,
          . (a period),                            :  .
          ' (an apostraphe), or                    :  '
          - (a hyphen)                             :  -]+
      - end of string                              :  $
      - delimiter                                  :  /

      Flags:
      i: ignore case
  */
  $scope.nameRegex = new RegExp(/^[a-z ,.-]+$/, 'i');

  /* Regex for zip codes.

      True if (in order):
      - delimiter              :  /
      - beginning of string    :  ^
      - 5 digits, 0 through 9  :  [0-9]{5}
      - end of string          :  $
      - delimiter              :  /
  */
  $scope.zipRegex = new RegExp(/^[0-9]{5}$/);

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
      $scope.customerToEdit,
      function() {
        $scope.refreshCustomers();
      }
    );

    $uibModalInstance.close();
  };

};

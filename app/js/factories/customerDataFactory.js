/**
 * CustomerDataFactory factory configuration file.
 */

module.exports = function(CustomerDataService) {
  var customers = [ ];

  // Refreshes the customer list by querying CustomerDataService
  var refresh = function() {
    customers = CustomerDataService.query(function() {
      numCustomers = customers.length;
      console.log("in refresh: numCustomers: " + numCustomers);
    });
  };

  // Gets the customer list
  var getCustomers = function() {
    customers = CustomerDataService.query(function() {
      numCustomers = customers.length;
    });
    return customers;
  };

  // Returns a customer record from the customers array
  var getByID = function(customerID) {
    return CustomerDataService.get({ id: customerID });
  };

  // Removes a customer record from the customers array
  var deleteCustomer = function(customerID) {
    CustomerDataService.delete({ id: customerID }, function() {
      customers.splice(customerID, 1);
    });
  };

  // Adds a customer to the customers array
  var addCustomer = function(createdCustomer) {
    var customerToCreate = new CustomerDataService(createdCustomer);
    customerToCreate.$save(customers, function() {
      customers.push(customerToCreate);
      refresh();  // if undefined, prefix with "factory"
    });
  };

  // Update a customer in the customers array
  var updateCustomer = function(customerToEdit) {
    CustomerDataService.update(
      { id: customerToEdit.id },
      customerToEdit,
      function() {
        refreshCustomers();
      }
    );
  };

  return {
    // refresh: refresh,
    getCustomers: getCustomers,
    getByID: getByID,
    deleteCustomer: deleteCustomer,
    addCustomer: addCustomer,
    updateCustomer: updateCustomer
  };

};

/**
 * CustomerDataService service configuration file.
 */

'use strict';

module.exports = function($resource) {
  return $resource(
    'http://577b334c3d21811100a14cd3.mockapi.io/api/customers/:id',
    { id: '@id' },
    {
      update: {
        method: 'PUT'
      }
    },
    { stripTrailingSlashes: false }
  );
};

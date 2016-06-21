(function() {
  'use strict';
  /**
   * @ngdoc service
   * @name ijoin.productData
   * @description
   * # productData
   * Service in the ijoin.
   */
  angular.module('Dashboard')
    .service('authorization', function(serviceCall) {

      var authToken;

      function persistLogin(response) {
        authToken = response.data.token;
        return authToken;
      }

      function handleLoginFailure(error) {
        console.error(error);
      }

      function login(username, password) {
        serviceCall.flushAuthToken();
        // there are no credentials right now, but will be someday
       return serviceCall.requestAuthorization(username,password)
          .then(persistLogin, handleLoginFailure)
          .then(serviceCall.storeAuthToken);

      }

      function getAuthToken() {
        return authToken;
      }

      return {
        getAuthToken: getAuthToken,
        login: login
      };

    });
})();

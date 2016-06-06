(function () {
  'use strict';

  angular.module('Dashboard.pages.login')
      .directive('userLogin', userLogin);

  /** @ngInject */

  function userLogin() {
    
    return {
      restrict: 'E',
      templateUrl: 'app/pages/login/login.html',
      controller: 'LoginPageCtrl'
      }
    };
  

})();

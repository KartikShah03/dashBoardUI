/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
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

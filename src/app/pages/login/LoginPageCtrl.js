/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.login')
    .controller('LoginPageCtrl',LoginPageCtrl);

  /** @ngInject */
  function LoginPageCtrl($scope, $state,$http, baSidebarService) {

    $scope.loginDiv = true;

    $scope.login = function () {
      if("Dashboard" == $scope.pwd){
        console.log($scope.pwd)
        console.log('before');
        $http.get("http://demo5533116.mockable.io/sidemenu")
         .then(function(response){
          baSidebarService.setMenuList(response.data);
          $scope.$parent.loginDiv = false;
        });
        }
    };
  }
})();

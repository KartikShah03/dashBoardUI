(function () {
  'use strict';

  angular.module('Dashboard.pages.login')
    .controller('LoginPageCtrl',LoginPageCtrl);

  /** @ngInject */
  function LoginPageCtrl($scope, $state,$http, baSidebarService, authorization) {

    $scope.loginDiv = true;

    $scope.login = function () {
      authorization.login($scope.usermail,$scope.pwd).then(authenticate, failauthenicate);
      
    };

    function authenticate(){
      if(authorization.getAuthToken()){
        console.log($scope.pwd)
         $http.get("https://demo3171562.mockable.io/sidemenu")
         .then(function(response){
          baSidebarService.setMenuList(response.data);
          $scope.$parent.loginDiv = false;
        });
        }
    }

    function failauthenicate(){
      console.log("authetication failed...");
    }
  }
})();

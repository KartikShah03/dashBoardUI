(function() {
  'use strict';

  angular
    .module('Dashboard')
    .controller('ModalCtrl', function ModalCtrl($scope, $modalInstance, $state,$window, serviceCall) {
    	var publicInterface;
    	
    	 function close() {
        	$modalInstance.close();
      	}

        function logout(){
          $scope.$parent.loginDiv = true;
          serviceCall.flushAuthToken();
          $window.location.href = '#/dashboard';
          $window.location.reload();
          console.log('2nd $scope.loginDiv::   '+$scope.loginDiv);
        }

      	publicInterface = {
        close: close,
        logout: logout
      };
      angular.extend($scope, publicInterface);
    });
})();


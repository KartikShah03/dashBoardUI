(function() {
  'use strict';

  angular
    .module('Dashboard')
    .controller('ModalCtrl', function ModalCtrl($scope, $modalInstance, $state) {
    	var publicInterface;
    	
    	 function close() {
        	$modalInstance.close();
      	}
      	publicInterface = {
        close: close
      };
      angular.extend($scope, publicInterface);
    });
})();


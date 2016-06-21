/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('Dashboard.theme.components')
    .controller('pageTopCtrl', pageTopCtrl);

  /** @ngInject */
  function pageTopCtrl($scope,$window,ModalUtility) {
  	$scope.signOut = function(){
  		console.log('1st $scope.loginDiv::   '+$scope.loginDiv);
  		ModalUtility.confirmLogout();
  	}
  }
})();
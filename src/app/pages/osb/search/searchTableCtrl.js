(function () {
  'use strict';

  angular.module('Dashboard.pages.osb.search')
      .controller('searchTableCtrl', searchTableCtrl);

  /** @ngInject */
  function searchTableCtrl($scope, baConfig, colorHelper) {

    $scope.smartTablePageSize = 10;
    console.log('in controller');
    console.log($scope.smartTableData.length);
  }
})();
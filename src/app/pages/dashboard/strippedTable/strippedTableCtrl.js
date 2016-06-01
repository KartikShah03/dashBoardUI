/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .controller('StrippedTableCtrl', StrippedTableCtrl);

  /** @ngInject */
  function StrippedTableCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        type: 'totalTransaction',
        count: '50000'
      },
      {
        id: 2,
        type: 'totalSuccessTransaction',
        count: '45000'
      },
      {
        id: 3,
        type: 'totalErrorTransaction',
        count: '5000'
      }];
  }

})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .directive('strippedTable', strippedTable);

  /** @ngInject */
  function strippedTable() {
    return {
      restrict: 'E',
      controller: 'StrippedTableCtrl',
      templateUrl: 'app/pages/dashboard/strippedTable/strippedTable.html'
    };
  }
})();
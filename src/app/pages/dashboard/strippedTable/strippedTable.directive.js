(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .directive('strippedTable', strippedTable);

  /** @ngInject */
  function strippedTable() {
    return {
      restrict: 'E',
      controller: 'StrippedTableCtrl',
      templateUrl: 'app/pages/dashboard/strippedTable/strippedTable.html',
      scope: {
      text: "@text"
    }
    };
  }
})();
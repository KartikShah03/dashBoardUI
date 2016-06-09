(function () {
  'use strict';

  angular.module('Dashboard.pages.osb.search')
      .directive('searchTable', searchTable);

  /** @ngInject */
  function searchTable() {
    return {
      restrict: 'E',
      controller: 'searchTableCtrl',
      templateUrl: 'app/pages/osb/search/searchTable.html'
    };
  }
})();
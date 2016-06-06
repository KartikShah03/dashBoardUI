(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .directive('transactionTable', transactionTable);

  /** @ngInject */
  function transactionTable() {
    return {
      restrict: 'E',
      controller: 'TransactionTableCtrl',
      templateUrl: 'app/pages/dashboard/transactionTable/transactionTable.html'
    };
  }
})();
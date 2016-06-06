/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .directive('interfaceBar', interfaceBar);

  /** @ngInject */
  function interfaceBar() {
    return {
      restrict: 'E',
      controller: 'interfaceCtrl',
      templateUrl: 'app/pages/dashboard/interfaces/interface.html'
    };
  }
})();
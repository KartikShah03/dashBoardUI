/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .directive('failuerInterfaceBar', failuerInterfaceBar);

  /** @ngInject */
  function failuerInterfaceBar() {
    return {
      restrict: 'E',
      controller: 'failuerInterfaceCtrl',
      templateUrl: 'app/pages/dashboard/failuerInterfaces/failuerInterface.html'
    };
  }
})();
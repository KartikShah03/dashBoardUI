(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .directive('trafficChart', trafficChart);

  /** @ngInject */
  function trafficChart() {
    return {
      restrict: 'E',
      controller: 'TrafficChartCtrl',
      templateUrl: 'app/pages/dashboard/trafficChart/trafficChart.html',
      scope: {
      text: "@text"
    }
    };
  }
})();
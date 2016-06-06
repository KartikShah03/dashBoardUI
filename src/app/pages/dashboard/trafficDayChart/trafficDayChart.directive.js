/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .directive('trafficDayChart', trafficDayChart);

  /** @ngInject */
  function trafficDayChart() {
    return {
      restrict: 'E',
      controller: 'trafficDayChartCtrl',
      templateUrl: 'app/pages/dashboard/trafficDayChart/trafficDayChart.html'
    };
  }
})();
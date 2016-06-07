/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
    .controller('failuerInterfaceCtrl', failuerInterfaceCtrl);

  /** @ngInject */
  function failuerInterfaceCtrl($scope, $timeout, baConfig,serviceCall) {

    getTransactionData().then(showData);

    function getTransactionData(){
      return serviceCall.failuerTrans();
    }

    function showData(response){
      $scope.simpleBarData = {
      labels: response.data.labels,
      series: response.data.series
      };

      $timeout(function(){
      new Chartist.Bar('#simple-bar', $scope.simpleBarData, $scope.simpleBarOptions);
      });
    }

    /*$scope.simpleBarData = {
      labels: ['IME_ICPBRM_005', 'CPC2_NOVASBL_001', '"CPC2_PMR_001', 'CPC2_RIBS_001', '"CPC2_PMR_003', 'CPC2_RIBS_004', 'CPC2_RIBS_008', '"CPC2_PMR_002', 'CPC2_RIBS_005', 'IME_ICPBRM_005'],
      series: [
        [66, 54, 50, 42, 38, 30, 23, 18, 12, 5]
      ]
    };*/

    $scope.simpleBarOptions = {
      height: "300px",
      width: "550px",
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70,
        position: 'start',
        labelInterpolationFnc: function(value) {
           return value.substring(0,5)
         }
      },
      axisX: {
        position: 'end'
      }
    };

    $timeout(function(){
      new Chartist.Bar('#simple-bar', $scope.simpleBarData, $scope.simpleBarOptions);
    });
  }
})();
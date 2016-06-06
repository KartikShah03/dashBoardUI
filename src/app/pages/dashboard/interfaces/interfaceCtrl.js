/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
    .controller('interfaceCtrl', interfaceCtrl);

  /** @ngInject */
  function interfaceCtrl($scope, $timeout, baConfig) {

    $scope.simpleBarData = {
      labels: ['CAMS_CPC2_003', 'CAMS_CPC2_001', 'CAMS_CPC2_003', 'CAMS_CPC2_005', 'CAMS_CPC2_009', 'CPC2_ICPSBL_001', 'CAMS_NOVASBL_023', 'ICPBRM_CAMS_005', 'GEMS_PCMS_001', 'IME_ICPBRM_005'],
      series: [
        [65, 58, 49, 38, 30, 24, 20, 17, 11, 5]
      ]
    };

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
      new Chartist.Bar('#simple-tbar', $scope.simpleBarData, $scope.simpleBarOptions);
    });

    var chart = new Chartist.Bar('.ct-chart', $scope.simpleBarData, $scope.simpleBarOptions);

    /*var addedEvents = false;
    chart.on('draw', function() {
      if (!addedEvents) {
        $('.ct-bar').on('mouseover', function() {
          $('#tooltip').html('<b>Selected Value: </b>' + $(this).attr('ct:value'));
        });

        $('.ct-bar').on('mouseout', function() {
          $('#tooltip').html('<b>Selected Value:</b>');
        });
      }
    });*/

  }
})();
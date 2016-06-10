/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .controller('trafficDayChartCtrl', trafficDayChartCtrl);

  /** @ngInject */
  function trafficDayChartCtrl($scope, baConfig, colorHelper,serviceCall) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    
    var rspsObj=[];
    var totalTrans = 0;

    var myArray=new Array();
    $.each(dashboardColors, function(key, value) { 
      myArray.push(value);
    });

    transactionCount().then(getCount);
    function transactionCount(){
      return serviceCall.getTodayTransactionDtls();
    }
    function getCount(response){
      rspsObj = response.data.transactions;
      
      for(var i=0;i<rspsObj.length;i++){
        rspsObj[i].highlight = colorHelper.shade(myArray[i], 15);
        rspsObj[i].color = myArray[i];
        totalTrans = Number(totalTrans) + Number(rspsObj[i].value);
        $scope.totalTransaction = Number(totalTrans);
      }
      $scope.doughnutData = rspsObj;
      var ctx = document.getElementById('chart-areaDaily').getContext('2d');
      window.myDoughnut = new Chart(ctx).Doughnut($scope.doughnutData, {
        segmentShowStroke: false,
        percentageInnerCutout : 64,
        responsive: true
      });
    }
  }
})();
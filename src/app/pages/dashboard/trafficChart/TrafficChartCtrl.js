(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper,serviceCall) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    
    var rspsObj=[];

    var myArray=new Array();
    $.each(dashboardColors, function(key, value) { 
      myArray.push(value);
    });

    transactionCount().then(getCount);
    function transactionCount(){
      return serviceCall.getTotalTransactionDtls($scope.text);
    }
    function getCount(response){
      rspsObj = response.data.transactions;
      $scope.doughnutData = rspsObj;
      for(var i=0;i<rspsObj.length;i++){
        rspsObj[i].highlight = colorHelper.shade(myArray[i], 15);
          rspsObj[i].color = myArray[i];
      }
      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx).Doughnut($scope.doughnutData, {
        segmentShowStroke: false,
        percentageInnerCutout : 64,
        responsive: true
      });
    }
  }
})();
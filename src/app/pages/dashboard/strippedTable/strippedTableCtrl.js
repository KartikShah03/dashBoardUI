(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .controller('StrippedTableCtrl', StrippedTableCtrl);

  /** @ngInject */
  function StrippedTableCtrl($scope, $filter, editableOptions, editableThemes,serviceCall) {

    var rspsObj=[];
    var TotalSum = 0;
    var sumObj = [];

    transactionCount().then(getCount);
    function transactionCount(){
      return serviceCall.getTotalTransactionDtls($scope.text);
    }
    function getCount(response){
      rspsObj = response.data.transactions;
      
      for(var i=0;i<rspsObj.length;i++){
        TotalSum = TotalSum + parseInt(rspsObj[i].value);
        rspsObj[i].order = parseInt(rspsObj[i].order) + 1;
      }
      var totalOrder = 1;
      sumObj = {value: TotalSum, color: '',highlight: '',label:'Total Transactions', percentage: '', order: totalOrder };
      rspsObj.push(sumObj);
      rspsObj.sort(sortFunction);

      function sortFunction(rspsObj, b) {
          if (rspsObj[5] === b[5]) {
            console.log(rspsObj[5] +'...........'+b[5]);
              return 0;
          }
          else {
              console.log(rspsObj[5] +'...........'+b[5]);
              return (rspsObj[5] < b[5]) ? -1 : 1;
          }
      }
      $scope.smartTableDatas = rspsObj;
      
    }

    /*$scope.smartTableData = [
      {
        order: 1,
        label: 'Total Transaction',
        value: '50000'
      },
      {
        id: 2,
        type: 'Total Success Transaction',
        count: '45000'
      },
      {
        id: 3,
        type: 'Total Error Transaction',
        count: '5000'
      }];*/
  }

})();
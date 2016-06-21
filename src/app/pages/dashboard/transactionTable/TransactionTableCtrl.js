(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .controller('TransactionTableCtrl', TransactionTableCtrl);

  /** @ngInject */
  function TransactionTableCtrl($scope, serviceCall) {

    var rspsObj=[];

    transactionCount().then(getCount);
    function transactionCount(){
      return serviceCall.getSrchData('','','','','','');
    }
    function getCount(response){
       $scope.smartTableDataActual = response.data.transactions;
       $scope.smartTableData =  [].concat($scope.smartTableDataActual);
      }
  
  }
})();
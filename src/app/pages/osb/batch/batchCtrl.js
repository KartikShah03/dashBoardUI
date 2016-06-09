(function () {
  'use strict';

  angular.module('Dashboard.pages.osb.batch')
    .controller('batchCtrl', batchCtrl);

  /** @ngInject */
  function batchCtrl($scope, $window, baConfig,serviceCall) {
    var layoutColors = baConfig.colors;
    console.log('in batch controller');
    /*$scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    $scope.lineData = [
      {y: "2006", a: 100, b: 90},
      {y: "2007", a: 75, b: 65},
      {y: "2008", a: 50, b: 40},
      {y: "2009", a: 75, b: 65},
      {y: "2010", a: 50, b: 40},
      {y: "2011", a: 75, b: 65},
      {y: "2012", a: 100, b: 90}
    ];
    $scope.areaData = [
      {y: "2006", a: 100, b: 90},
      {y: "2007", a: 75, b: 65},
      {y: "2008", a: 50, b: 40},
      {y: "2009", a: 75, b: 65},
      {y: "2010", a: 50, b: 40},
      {y: "2011", a: 75, b: 65},
      {y: "2012", a: 100, b: 90}
    ];
    $scope.barData = [
      {y: "2006", a: 100, b: 90},
      {y: "2007", a: 75, b: 65},
      {y: "2008", a: 50, b: 40},
      {y: "2009", a: 75, b: 65},
      {y: "2010", a: 50, b: 40},
      {y: "2011", a: 75, b: 65},
      {y: "2012", a: 100, b: 90}
    ];
    $scope.donutData = [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ];
*/
    $scope.doShow = false;
    getTransDtl().then(showTransData);

    function getTransDtl(){
      return serviceCall.getTransDtl();
    }

    function showTransData(response){
      $scope.smartTableData = response.data.tableData;
      $scope.doShow = true;
    }

    angular.element($window).bind('resize', function () {
      //$window.Morris.Grid.prototype.redraw();
    });
  }

})();
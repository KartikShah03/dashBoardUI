(function () {
  'use strict';

  angular.module('Dashboard.pages.osb.search')
    .controller('searchCtrl', searchCtrl);

  /** @ngInject */
  function searchCtrl($scope, $window, baConfig,serviceCall) {
    var layoutColors = baConfig.colors;
    $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    var date = new Date();
    $scope.endDate = date;
    //$scope.sources = "test source";
    $scope.doShow = false;

    function convertDate(inputFormat) {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      var d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    }

    $scope.searchResults = function(){
      $scope.doShow = false;

      var source = $scope.source;
      var target = $scope.target;
      var startDate = $scope.startDate;
      var endDate = $scope.endDate;
      var state = $scope.state;
      var identifier = $scope.identifier;

      startDate = convertDate(startDate);
      endDate = convertDate(endDate);

      getDtls().then(showData);

      function getDtls(){
        return serviceCall.getSrchData(source,target,startDate,endDate,state,identifier);
      }

      function showData(response){
        $scope.smartTableDataActual = response.data.transactions;
        $scope.smartTableData =  [].concat($scope.smartTableDataActual);
        $scope.doShow = true;
      }

    }

    angular.element($window).bind('resize', function () {
      //$window.Morris.Grid.prototype.redraw();
    });
  }

})();
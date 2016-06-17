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

    $scope.searchResults = function(param){
      $scope.doShow = false;
      console.log ('source is::    '+param.sources);
      console.log ('target is::    '+param.targets);
      console.log ('startDate is::    '+param.startDate);
      console.log ('endDate is::    '+param.endDate);
      console.log ('state is::    '+param.state);
      console.log ('state is::    '+$scope.state);
      console.log ('identifier is::    '+param.identifier);

      var source = param.sources;
      var target = param.targets;
      var Sdate = param.startDate;
      var Edate = param.endDate;
      var state = "ok";
      var identifier = param.identifier;

      Sdate = convertDate(Sdate);
      Edate = convertDate(Edate);

      getDtls().then(showData);

      function getDtls(){
        return serviceCall.getSrchData(source,target,Sdate,Edate,state,identifier);
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
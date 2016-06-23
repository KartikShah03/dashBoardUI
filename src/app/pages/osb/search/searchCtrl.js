(function () {
  'use strict';

  angular.module('Dashboard.pages.osb.search')
    .controller('searchCtrl', searchCtrl);

  /** @ngInject */
  function searchCtrl($scope, $window, baConfig,serviceCall) {
    var publicInterface;
    var date = new Date();
    var searchParam = {
      sources : '',
      targets : '',
      startDate : '',
      endDate : date,
      state : '',
      identifier : ''
    }
    
    $scope.doShow = false;

    function convertDate(inputFormat) {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      var d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    }

        // date related 

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $scope.param.opened = true;
  };

  $scope.open1 = function($event) {
    $scope.param.opened1 = true;
 };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  //end date related..
    
    $scope.searchResults = function(param){
      $scope.doShow = false;
      var source = searchParam.sources;
      var target = searchParam.targets;
      var Sdate = searchParam.startDate;
      var Edate = searchParam.endDate;
      var state = searchParam.state;
      var identifier = searchParam.identifier;

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

    publicInterface = {
        param : searchParam
      };
      angular.extend($scope, publicInterface);

    // angular.element($window).bind('resize', function () {
    //   //$window.Morris.Grid.prototype.redraw();
    // });
  }

})();
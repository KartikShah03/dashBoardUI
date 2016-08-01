(function () {
  'use strict';

  angular.module('Dashboard.pages.ijoin')
    .controller('ijoinCtrl', ijoinCtrl);

  /** @ngInject */
  function ijoinCtrl($scope,baConfig) {
    var layoutColors = baConfig.colors;
    $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    $scope.labels =["Explor", "Address", "Addons", "Register", "Summary", "Thanks"];
    $scope.data = [
      [100, 38, 9, 77, 20, 97]
    ];
    $scope.series = ['Percentage View'];


    $scope.orderLabels =["NOV", "DEC", "JAN", "FEB", "MAR", "APR", "MAY","JUN"];
    $scope.orderData = [
      [223, 254, 367, 372, 570, 454, 449,824],
      [199, 178, 152, 75, 209, 190, 394,340]
    ];
    $scope.series = ['ORDERS', 'SLOF TO ORDERS'];

    $scope.donutData = [
      {label: "Address Not Available", value: 14680},
      {label: "Existing Customers", value: 1521},
      {label: "Non Serviceable", value: 2278}
    ];
  }

})();
(function () {
  'use strict';

  angular.module('Dashboard.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      controller: 'pageTopCtrl',
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();
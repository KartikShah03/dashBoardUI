(function () {
  'use strict';

  angular.module('Dashboard.theme.components')
      .directive('widgets', widgets);

  /** @ngInject */
  function widgets() {
    return {
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      templateUrl: 'app/theme/components/widgets/widgets.html',
      replace: true
    };
  }

})();
(function () {
  'use strict';

  angular.module('Dashboard.pages.ijoin', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('IJOIN', {
          url: '/ijoin',
          templateUrl: 'app/pages/ijoin/ijoin.html',
          title: 'ijoin',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 200,
          },
        });
  }

})();

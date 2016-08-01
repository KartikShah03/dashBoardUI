(function () {
  'use strict';

  angular.module('Dashboard.pages', [
    'ui.router',
    'Dashboard.pages.dashboard',
    'Dashboard.pages.charts',
    'Dashboard.pages.login',
    'Dashboard.pages.osb',
    'Dashboard.pages.ijoin'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages', [
    'ui.router',
    'Dashboard.pages.dashboard',
    'Dashboard.pages.charts',
    'Dashboard.pages.login'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();

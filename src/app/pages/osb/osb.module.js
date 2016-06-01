/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.osb', [
      'Dashboard.pages.osb.online',
      'Dashboard.pages.osb.batch',
      'Dashboard.pages.osb.reports',
      'Dashboard.pages.osb.search'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('osb', {
          url: '/osb',
          abstract: true,
          template: '<div ui-view></div>',
          title: 'Charts',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();

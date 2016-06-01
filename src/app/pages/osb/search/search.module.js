/**
 * @author a.demeshko
 * created on 12/18/15
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.osb.search', [])
    .config(routeConfig).config(function(baConfigProvider){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('osb.search', {
          url: '/search',
          templateUrl: 'app/pages/osb/search/search.html',
          title: 'reports',
          sidebarMeta: {
            order: 300,
          }
        });
  }

})();
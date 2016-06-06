(function () {
  'use strict';

  angular.module('Dashboard.pages.osb.online', [])
    .config(routeConfig).config(function(baConfigProvider){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('osb.online', {
          url: '/online',
          templateUrl: 'app/pages/osb/online/online.html',
          title: 'online',
          sidebarMeta: {
            order: 300,
          }
        });
  }

})();
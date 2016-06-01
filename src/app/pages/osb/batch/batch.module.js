/**
 * @author a.demeshko
 * created on 12/18/15
 */
(function () {
  'use strict';

  angular.module('Dashboard.pages.osb.batch', [])
    .config(routeConfig).config(function(baConfigProvider){
      
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('osb.batch', {
          url: '/batch',
          templateUrl: 'app/pages/osb/batch/batch.html',
          title: 'batch',
          sidebarMeta: {
            order: 300,
          }
        });
  }

})();
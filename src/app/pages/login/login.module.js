(function () {
  'use strict';

  angular.module('Dashboard.pages.login', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('login', {
          url: '/Home',
          title: 'Login',
          templateUrl: 'app/pages/profile/profile.html',
          controller: 'loginPageCtrl',
        });
  }

})();

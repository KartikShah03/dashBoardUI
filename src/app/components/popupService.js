(function() {
  'use strict';
  /**
   * @ngdoc service
   * @name ijoin.productData
   * @description
   * # productData
   * Service in the ijoin.
   */
  angular.module('Dashboard')
    .service('ModalUtility', function($modal) {
      function invalid() {
        var config = {
          animation: true,
          templateUrl: 'app/components/modals/invalidPwd.html',
          controller: 'ModalCtrl',
          size: 'sm',
        };
        return $modal.open(config).result;
      }

      function confirmLogout() {
        var config = {
          animation: true,
          templateUrl: 'app/components/modals/confirmLogout.html',
          controller: 'ModalCtrl',
          size: 'sm',
        };
        return $modal.open(config).result;
      }

      return {
        invalid: invalid,
        confirmLogout: confirmLogout
      };
  });
})();
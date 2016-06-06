(function () {
  'use strict';

  angular.module('Dashboard.pages.dashboard')
      .controller('TransactionTableCtrl', TransactionTableCtrl);

  /** @ngInject */
  function TransactionTableCtrl($scope, baConfig, colorHelper) {

    $scope.smartTablePageSize = 10;
    $scope.smartTableData = [{
      "serviceId": "IME_ICPBRM_005",
      "sourceSystem": "IME",
      "targetSystem": "ICPBRM",
      "state": "OK",
      "fileNameIdentifie": "ICP_MED_DEL_SWK_20151218_5614.cdr.ext",
      "startDate": null,
      "endDate": null,
      "date": "18/12/2015 11:20"
    }, {
      "serviceId": "ICPBRM_GEMS_001",
      "sourceSystem": "ICPBRM",
      "targetSystem": "GEMS",
      "state": "OK",
      "fileNameIdentifie": "ICPSI657201512211486",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 12:18"
    }, {
      "serviceId": "IME_ICPBRM_003",
      "sourceSystem": "IME",
      "targetSystem": "ICPBRM",
      "state": "OK",
      "fileNameIdentifie": "ICP_MED_DEL_SBH_20151221_5760.cdr.ext",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 14:20"
    }, {
      "serviceId": "OSES_ICPSBL_004",
      "sourceSystem": "OSES",
      "targetSystem": "ICPSBL",
      "state": "OK",
      "fileNameIdentifie": "ADQDIICPP60151221",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 14:33"
    }, {
      "serviceId": "CAMS_NOVASBL_018",
      "sourceSystem": "CAMS",
      "targetSystem": "NOVASBL",
      "state": "OK",
      "fileNameIdentifie": "CAMS_ICPSG_CLAS_UNIFI_20151221_141035.txt",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 14:36"
    }, {
      "serviceId": "IME_ICPBRM_008",
      "sourceSystem": "IME",
      "targetSystem": "ICPBRM",
      "state": "OK",
      "fileNameIdentifie": "ICP_MED_TVOS_20151221_0738.cdr.ext",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 15:17"
    }, {
      "serviceId": "IME_ICPBRM_008",
      "sourceSystem": "IME",
      "targetSystem": "ICPBRM",
      "state": "OK",
      "fileNameIdentifie": "ICP_MED_TVOS_20151221_0739.cdr.ext",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 15:17"
    }, {
      "serviceId": "CAMS_NOVASBL_018",
      "sourceSystem": "CAMS",
      "targetSystem": "NOVASBL",
      "state": "OK",
      "fileNameIdentifie": "CAMS_ICPSG_CLAS_UNIFI_20151221_151040.txt",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 15:36"
    }, {
      "serviceId": "IME_ICPBRM_008",
      "sourceSystem": "IME",
      "targetSystem": "ICPBRM",
      "state": "OK",
      "fileNameIdentifie": "ICP_MED_TVOS_20151221_0740.cdr.ext",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 16:17"
    }, {
      "serviceId": "IME_ICPBRM_008",
      "sourceSystem": "IME",
      "targetSystem": "ICPBRM",
      "state": "OK",
      "fileNameIdentifie": "ICP_MED_TVOS_20151221_0741.cdr.ext",
      "startDate": null,
      "endDate": null,
      "date": "21/12/2015 16:17"
    }];
  }
})();
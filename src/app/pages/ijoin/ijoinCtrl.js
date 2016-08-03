(function () {
  'use strict';

  angular.module('Dashboard.pages.ijoin')
    .controller('ijoinCtrl', ijoinCtrl);

  /** @ngInject */
  function ijoinCtrl($scope,baConfig) {
    var layoutColors = baConfig.colors;
    $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    $scope.labels =["Explor", "Address", "Addons", "Register", "Summary", "Thanks"];
    $scope.data = [
      [100, 38, 9, 77, 20, 97]
    ];
    $scope.series = ['Percentage View'];


    // $scope.orderLabels =["NOV", "DEC", "JAN", "FEB", "MAR", "APR", "MAY","JUN"];
    // $scope.orderData = [
    //   [223, 254, 367, 372, 570, 454, 449,824],
    //   [199, 178, 152, 75, 209, 190, 394,340]
    // ];
    // $scope.series = ['ORDERS', 'SLOF TO ORDERS'];

    $scope.donutData = [
      {label: "Address Not Available", value: 14680},
      {label: "Existing Customers", value: 1521},
      {label: "Non Serviceable", value: 2278}
    ];

      $scope.OrderChart = {};
      $scope.OrderChart.type = "ColumnChart";

    $scope.OrderChart.data = {"cols": [
        {id: "t", label: "Months", type: "string"},
        {id: "s", label: "ORDERS", type: "number"}
    ], "rows": [
        {c: [
            {v: "NOV"},
            {v: 223}
        ]},
        {c: [
            {v: "DEC"},
            {v: 254}
        ]},
        {c: [
            {v: "JAN"},
            {v: 367},
        ]},
        {c: [
            {v: "FEB"},
            {v: 372},
        ]},
        {c: [
            {v: "MAR"},
            {v: 570},
        ]},
        {c: [
            {v: "APR"},
            {v: 454},
        ]},
        {c: [
            {v: "MAY"},
            {v: 449},
        ]},
        {c: [
            {v: "JUN"},
            {v: 824},
        ]}
    ]};

    $scope.pageView = {};
      $scope.pageView.type = "LineChart";

    $scope.pageView.data = {"cols": [
        {id: "t", label: "pages", type: "string"},
        {id: "s", label: "Percentage View", type: "number"}
    ], "rows": [
        {c: [
            {v: "Explor"},
            {v: 100}
        ]},
        {c: [
            {v: "Address"},
            {v: 38}
        ]},
        {c: [
            {v: "Addons"},
            {v: 9},
        ]},
        {c: [
            {v: "Register"},
            {v: 77},
        ]},
        {c: [
            {v: "Summary"},
            {v: 20},
        ]},
        {c: [
            {v: "Thanks"},
            {v: 97},
        ]}
    ]};

    //categorization
    $scope.slofChart = {};
      $scope.slofChart.type = "PieChart";

    $scope.slofChart.data = {"cols": [
        {id: "t", label: "category", type: "string"},
        {id: "s", label: "SLOF count", type: "number"}
    ], "rows": [
        {c: [
            {v: "Address Not Available"},
            {v: 14680}
        ]},
        {c: [
            {v: "Existing Customers"},
            {v: 1521}
        ]},
        {c: [
            {v: "Non Serviceable"},
            {v: 2278},
        ]}
    ]};
    //
    //slof to order
    $scope.slofOrderChart = {};
      $scope.slofOrderChart.type = "BarChart";

    $scope.slofOrderChart.data = {"cols": [
        {id: "t", label: "Months", type: "string"},
        {id: "s", label: "SLOF", type: "number"}
    ], "rows": [
        {c: [
            {v: "NOV"},
            {v: 199}
        ]},
        {c: [
            {v: "DEC"},
            {v: 178}
        ]},
        {c: [
            {v: "JAN"},
            {v: 152},
        ]},
        {c: [
            {v: "FEB"},
            {v: 75},
        ]},
        {c: [
            {v: "MAR"},
            {v: 209},
        ]},
        {c: [
            {v: "APR"},
            {v: 190},
        ]},{c: [
            {v: "MAY"},
            {v: 394},
        ]},
        {c: [
            {v: "JUN"},
            {v: 340},
        ]}
    ]};
    //
    }

})();
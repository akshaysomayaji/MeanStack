(function () {
    'use strict';

    angular.module('app.module.dashboard', []);

    angular.module('app.module.dashboard').controller('dashboardCtrl', dashboardCtrl);

    function dashboardCtrl($scope) {
        $scope.dashboard = "dashboard page";
    }
})();
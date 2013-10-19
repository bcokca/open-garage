'use strict';

app.controller('NewCtrl', function ($scope, $http) {
    $scope.garage = {};
    $scope.addGarage = function () {
        $http.post('http://localhost:3000/garage', $scope.garage).
            success(function(data) {
                $location.path('/');
            });
    };
});

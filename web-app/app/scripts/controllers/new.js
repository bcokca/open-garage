'use strict';

app.controller('NewCtrl', function ($scope, $http, garageService) {
    $scope.garage = {};

    $scope.addGarage = function () {

        var resource = garageService.garage();

        new resource($scope.garage).$save(function(response){
            if(response.status){
                $scope.garages = response.result;
                //$location.path('/');
            }
            else {
                console.log(response);
            }
        });
    };
});


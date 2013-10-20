'use strict';

app.controller('NewCtrl', function ($scope, $http, garageService,$location) {
    $scope.garage = {};

    $scope.addGarage = function () {

        var resource = garageService.garage();

        new resource($scope.garage).$save(function(response){
            if(response.status){
                alert('New Garage Created');
                $location.path('/detail/' + response.result[0]._id);
            }
            else {

                console.log(response.error);

            }
        });
    };
});


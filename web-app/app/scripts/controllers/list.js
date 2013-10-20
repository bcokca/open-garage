'use strict';

app.controller('ListCtrl', function ($scope, $http, garageService) {

    $scope.garages = [];

    garageService.garage().get(function(response){
        if(response.status){
            $scope.garages = response.result;
        }
        else {
            console.log(response);
        }
    });

    /*

    // GET
    // request to   http://localhost:3000/garage/
    garageService.garage().query(function(response){});

    // GET
    // request to   http://localhost:3000/garage/1
    garageService.garage().get({id: 1}, function(response){});

    // POST
    // request to   http://localhost:3000/garage/1
    garageService.garage().save(function(response){});

    // POST
    // request to   http://localhost:3000/garage/1
    garageService.garage().save({id: 1}, function(response){});

    // DELETE
    // request to   http://localhost:3000/garage/1
    garageService.garage().delete({id: 1}, function(response){});

    */
});
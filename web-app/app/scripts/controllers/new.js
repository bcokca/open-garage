'use strict';

app.controller('NewCtrl', function ($scope, $http, garageService,$location,$routeParams) {

    $scope.garage = {};


    $scope.editMode=false;

    if($routeParams.id){
        $scope.editMode = true;
        //first we need to find the garage object
        garageService.garage().get({id: $routeParams.id}, function(response){
            if(response.status){
                $scope.garage = response.result;
            }else {
                console.log(result.error);
            }
        });
    }

    //then update it
    $scope.submitGarage = function () {
        var resource = garageService.garage();
        if($scope.editMode){

            new resource($scope.garage).$save({id: $routeParams.id}, function(response){
                if(response.status){
                    alert('New Garage Created');
                    $location.path('/detail/' + response.result._id);
                }
                else {
                    console.log(response.error);
                }
            });
        }else{
            new resource($scope.garage).$save(function(response){
                if(response.status){
                    alert('New Garage Created');
                    $location.path('/detail/' + response.result[0]._id);
                }
                else {
                    console.log(response.error);
                }
            });
        }
    };

});


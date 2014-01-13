'use strict';

app.controller('NewCtrl', function ($scope, $http, garageService,$location,$routeParams, geolocation) {

    $scope.garage = {};

    //parameters for address autocomplete directive
    $scope.options = null;
    $scope.details = '';


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


            var geocoder =  new google.maps.Geocoder();

            geocoder.geocode( { 'address':$scope.garage.address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    $scope.garage.longitude = results[0].geometry.location.lng();
                    $scope.garage.latitude = results[0].geometry.location.lat();

                    new resource($scope.garage).$save(function(response){
                        if(response.status){
                            alert('New Garage Created');
                            $location.path('/detail/' + response.result[0]._id);
                        }
                        else {
                            console.log(response.error);
                        }
                    });

                } else {
                    alert("Something got wrong " + status);
                }
            });


        }
    };

});


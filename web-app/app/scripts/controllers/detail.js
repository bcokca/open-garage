'use strict';

app.controller('DetailCtrl', function ($scope, $http, garageService,$routeParams) {
    $scope.garage = {};

    garageService.garage().get({id: $routeParams.id}, function(response){
        if(response.status){
            $scope.garage = response.result;
        }else {
            console.log(result.error);
        }
    });
});

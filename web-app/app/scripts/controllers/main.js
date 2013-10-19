'use strict';

angular.module('openGarageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('ListCtrl', function($scope, $http){
        //call server and get all garages
        $http.get('http://localhost:3000/garage').
            success(function(data, status, headers, config) {
                $scope.garages = data;
            });
    })
    .controller('MapCtrl', function($scope){
        //Load in a contact from the route (/contact/:index)
        //call server and get all garages
    })
    .controller('NewGarageCtrl', function($scope, $http, $location){
        $scope.garage = {};
        $scope.addGarage = function () {
            $http.post('http://localhost:3000/garage', $scope.garage).
                success(function(data) {
                    $location.path('/');
                });
        };
    });

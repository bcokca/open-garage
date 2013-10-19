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
       /** $http.get('http://localhost:3000/garage').
            success(function(data, status, headers, config) {
                $scope.garage_name = data;
            }); **/
    })
    .controller('MapCtrl', function($scope){
        //Load in a contact from the route (/contact/:index)
        //call server and get all garages
    })
    .controller('NewGarageCtrl', function($scope){
        //Load in a contact from the route (/contact/:index)
        //call server and create new garages
    });

'use strict';

var app = angular.module('openGarageApp', []).config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'MapCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

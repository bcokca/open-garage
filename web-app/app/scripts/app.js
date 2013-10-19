'use strict';

var app = angular.module('openGarageApp', [])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'MapCtrl'
        })
        .when('/listGarages', {
            templateUrl: 'views/listView.html',
            controller: 'ListCtrl'
        })
        .when('/mapGarages', {
            templateUrl: 'views/mapView.html',
            controller: 'MapCtrl'
        })
        .when('/newGarageSale', {
            templateUrl: 'views/newGarageView.html',
            controller: 'NewGarageCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

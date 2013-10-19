'use strict';

var app = angular.module('openGarageApp', ['apiServices']).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'MapCtrl'
        })
        .when('/list', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl'
        })
        .when('/new', {
            templateUrl: 'views/new.html',
            controller: 'NewCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(['$rootScope', '$cookies', '$http', '$window', function($rootScope, $cookies, $http, $window) {

    // decide environment

}]);
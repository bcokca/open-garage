'use strict';

var ENV = {};

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
        .when('/detail/:id', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(['$rootScope',  '$http', '$window', function($rootScope, $http, $window) {

    var appUrl = $window.location.origin;

    switch(appUrl){
        case 'http://localhost:9000':
            ENV.type = 'local';
            ENV.APIUrl = 'http://localhost';
            ENV.port = 3000;
            break;

        default:
            ENV.type = 'server';
            ENV.APIUrl ='http://appfog.com';
    }
}]);
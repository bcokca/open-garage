var apiServices = angular.module('apiServices',['ngResource']);

apiServices.factory('garageService', function($resource){
    return {
        garage : function(){
            return $resource('http://localhost::port/garage/:id', {id: '@id', port: 3000});
        }
    };
});
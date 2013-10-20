var apiServices = angular.module('apiServices',['ngResource']);

apiServices.factory('garageService', function($resource){
    var getResource = function (url, params){

        // if web_app running on server
        if(ENV.type == 'local'){
            params.port = ENV.port;
            return  $resource(ENV.APIUrl + '::port' + url, params);
        }

        // if web_app running on server
        else {
            return  $resource(ENV.APIUrl + url, params);
        }
    }

    return {
        garage : function(){
            return getResource('/garage/:id', {id: '@id'});
        }
    };
});


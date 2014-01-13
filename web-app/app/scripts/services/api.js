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

//cordova service
apiServices.factory('cordovaReady', function() {
    return function (fn) {

        var queue = [];

        var impl = function () {
            queue.push(Array.prototype.slice.call(arguments));
        };

        document.addEventListener('deviceready', function () {
            queue.forEach(function (args) {
                fn.apply(this, args);
            });
            impl = fn;
        }, false);

        return function () {
            return impl.apply(this, arguments);
        };
    };
});

//map service
apiServices.factory('geolocation', function ($rootScope, cordovaReady) {
    return {
        getCurrentPosition: cordovaReady(function (onSuccess, onError, options) {
            navigator.geolocation.getCurrentPosition(function () {
                    var that = this,
                        args = arguments;

                    if (onSuccess) {
                        $rootScope.$apply(function () {
                            onSuccess.apply(that, args);
                        });
                    }
                }, function () {
                    var that = this,
                        args = arguments;

                    if (onError) {
                        $rootScope.$apply(function () {
                            onError.apply(that, args);
                        });
                    }
                },
                options);
        })
    };
});


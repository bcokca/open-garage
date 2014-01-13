'use strict';

app.controller('MapCtrl', function ($scope,  $timeout, geolocation) {
    //get my current location
    var currLocation = {};
    // Enable the new Google Maps visuals until it gets enabled by default.
    // See http://googlegeodevelopers.blogspot.ca/2013/05/a-fresh-new-look-for-maps-api-for-all.html
    google.maps.visualRefresh = true;
    geolocation.getCurrentPosition(function (position) {
        alert('latitude:' + position.coords.latitude);

        $scope.position = {
            coords: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        };
        /** the initial center of the map */
        $scope.centerProperty = {
            latitude:  position.coords.latitude,
            longitude: position.coords.longitude
        }
        /** the initial zoom level of the map */
        $scope.zoomProperty = 4;
        /** list of markers to put in the map */
        $scope.markersProperty= [ {
            latitude:  position.coords.latitude,
            longitude: position.coords.longitude
        }];
        // These 2 properties will be set when clicking on the map
        $scope.clickedLatitudeProperty= null;
        $scope.clickedLongitudeProperty= null;
        $scope.eventsProperty = {
            click: function (mapModel, eventName, originalEventArgs) {
                // 'this' is the directive's scope
                console.log("user defined event on map directive with scope", this);
                console.log("user defined event: " + eventName, mapModel, originalEventArgs);
            }
        };


    });


    $scope.position = {
        coords: {
            latitude: 45,
            longitude: -73
        }
    };
    /** the initial center of the map */
    $scope.centerProperty = {
        latitude: 45,
        longitude: -73
    }
    /** the initial zoom level of the map */
    $scope.zoomProperty = 4;
    /** list of markers to put in the map */
    $scope.markersProperty= [ {
        latitude: 45,
        longitude: -74
    }];
    // These 2 properties will be set when clicking on the map
    $scope.clickedLatitudeProperty= null;
    $scope.clickedLongitudeProperty= null;
    $scope.eventsProperty = {
        click: function (mapModel, eventName, originalEventArgs) {
            // 'this' is the directive's scope
            console.log("user defined event on map directive with scope", this);
            console.log("user defined event: " + eventName, mapModel, originalEventArgs);
        }
    };















});

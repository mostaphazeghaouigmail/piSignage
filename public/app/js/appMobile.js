'use strict';

angular.module('piathome',
        [
            'piConfig',
            'piathome.controllers','piathome.services','piathome.directives', 'piathome.filters',
            'cordova.services'
        ]).

    config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {

        $httpProvider.interceptors.push('onlineStatusInterceptor');

        $routeProvider.

            //home route
            when('/', {
                templateUrl: 'app/partials/home/_home.html'
            }).
            when('/playlist', {
                templateUrl: 'app/partials/playlist.html'
            }).
            when('/setting', {
                templateUrl: 'app/partials/home/setting.html'
            }).
            when('/reports', {
                templateUrl: 'app/partials/reports.html'
            }).
            when('/player/:file', {
                templateUrl: 'app/partials/player.html'
            }).

            //default route
            otherwise({redirectTo:'/'});
    }]);


var app = angular.module('drillRite', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/home', {
            templateUrl: 'features/homePage/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .when('/about', {
            templateUrl: 'features/aboutPage/aboutTmpl.html',
            controller: 'aboutCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);
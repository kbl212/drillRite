var app = angular.module('drillRite', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

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
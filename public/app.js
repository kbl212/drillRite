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
        .when('/location', {
            templateUrl: 'features/locationPage/locationTmpl.html',
            controller: 'locationCtrl'
        })
        .when('/contact', {
            templateUrl: 'features/contactPage/contactTmpl.html',
            controller: 'contactCtrl'
    })
        .otherwise({
            redirectTo: '/home'
        })
}]);
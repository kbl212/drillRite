var app = angular.module('drillRite');


app.controller('contactCtrl', function ($scope) {
    $scope.phoneNumber = "(801) 653-9733";
    $scope.address = "851 E 675 S, Lehi, UT 84043";
    $scope.openDays = [
        {
            date: "Monday",
            hours: "8AM-4PM"
        },
        {
            date: "Tuesday",
            hours: "8AM-4PM"
        },
        {
            date: "Wednesday",
            hours: "8AM-4PM"
        },
        {
            date: "Thursday",
            hours: "8AM-4PM"
        },
        {
            date: "Friday",
            hours: "8AM-4PM"
        }
    ]
})
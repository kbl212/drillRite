var app = angular.module('drillRite');


app.controller('homeCtrl', function($scope) {
    
            $scope.initMap = function() {
            var myLatLng = {
                lat: 40.380370,
                lng: -111.835317
            };

            $scope.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: $scope.map,
                title: 'DrillRite'
            });
        }
            
            $scope.initMap();
});
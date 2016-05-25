angular.module('app');

angular.module('app').controller('weatherController', ['$scope', '$log', 'weatherFactory', function($scope, $log, weatherFactory) {

    $scope.city = '';
    $scope.searches = [];

    $scope.getWeather = function(city) {
        // this handles the case when a city is passed in from clicking a button
        if (city) {
            $scope.city = city;
        }

        function addSearch(name, time) {
            $scope.searches.unshift({
                'name': name,
                'time': time,
            });
        }

        weatherFactory.getWeather($scope.city).then(
            function(response) {

                $scope.weather = response.data;
                console.log($scope.weather);
                console.log($scope.weather.weather[0].main);
                addSearch($scope.weather.name, moment().format('MM-DD-YY h:mm:ss a'));
                if ($scope.searches.length > 6) {
                    $scope.searches.pop();
                }

            });

        $scope.city = "";
    }

    $scope.getWeather('sandiego');

}]);

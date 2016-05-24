angular.module('app');

angular.module('app').controller('weatherController', ['$scope', '$log','weatherFactory', function($scope, $log, weatherFactory){

	$scope.city = '';

	$scope.getWeather = function(city) {
		// this handles the case when a city is passed in from clicking a button
		if(city) {
			$scope.city = city;
		} 

		weatherFactory.getWeather($scope.city).then(
			function(response){
				$scope.weather = response.data;
				console.log($scope.weather);
				console.log($scope.weather.weather[0].main)
			});	
	}

}]);
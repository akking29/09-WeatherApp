angular.module('app')
    .factory('weatherFactory', weatherFactory);

weatherFactory.$inject = ["$http", "$q", "$log"]; //maybe need ""

function weatherFactory($http, $q, $log) {

    var service = {

        getWeather: getWeather
    };
    return service;

    function getWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var id = '&units=imperial&?q=id=524901&APPID=f5d8a0e5797079daa25d276db49b6b25';
        var city = city;
        var defer = $q.defer();

        $http({
                method: 'GET',
                url: url + city + id
            })
            .then(
                function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('Weather!');
                    } else {
                        defer.reject(response);
                        toastr.warning('no weather ' + response.config.url);
                    }
                },
                //failure
                function(error) {
                    defer.reject(error);
                    $log.error(error);
                    toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                });

        return defer.promise;

    }

};

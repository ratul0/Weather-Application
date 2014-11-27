app.service('SearchService', ['$http','$location', function($http,$location){
	var service = {};

	service.getReport = function (city) {
		
		//return $http.get('http://api.openweathermap.org/data/2.5/find?q=Dhaka&units=metric');
		return $http.get("http://api.openweathermap.org/data/2.5/weather?q="+city.name+"&units=metric");
		
	};
	

	return service;
}]);
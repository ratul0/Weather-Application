app.controller('SearchCtrl', ['$scope','$rootScope','NotifyService','SearchService','SiteName', function($scope,$rootScope,NotifyService,SearchService,SiteName){
	$scope.siteName = SiteName;

	$scope.doSubmit = function (city) {
		SearchService.getReport(city)
			.success(function (response) {
				if(response.cod==404){
					NotifyService.error('No City Found.');
				}else{
					$scope.data = response;
					$scope.data.receiveTime = moment.unix(response.dt).format("dddd, MMMM Do YYYY, h:mm:ss a");
					$scope.data.sunrise = moment.unix(response.sys.sunrise).format("dddd, MMMM Do YYYY, h:mm:ss a");
					$scope.data.sunset = moment.unix(response.sys.sunset).format("dddd, MMMM Do YYYY, h:mm:ss a");
					$scope.data.icon = "http://openweathermap.org/img/w/"+response.weather[0].icon+".png"
					console.log($scope.data.icon);
					
					
					NotifyService.success('Success');
				}
				
			})
			.error(function(response) {
	    		
	    	});
		//console.log(SearchService.getReport(city));

		
	};
}]);
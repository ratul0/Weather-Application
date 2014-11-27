app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl : 'partials/pages/home.html',
			controller : 'SearchCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
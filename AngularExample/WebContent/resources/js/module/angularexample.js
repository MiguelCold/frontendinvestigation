
// / *** MODULES *** / //

var angularExampleModule = angular.module('angularExampleModule', [ 'ngRoute' ]);


/// *** CONTROLLERS *** / //

angularExampleModule.controller('deviceListController', ['$scope', function(scope) {
    scope.devices = [ 
    {
    	id: 1,
    	name: "Samsung Galaxy S3",
    	description: "Smartphone",
    	image: "samsun_galaxy_s3.png",
    	manufacturer: "Samsung",
    	price: 900000
    },
    {
    	id: 2,
    	name: "Huawei Acend G610",
    	description: "Smartphone",
    	image: "huawei_acend_g610.png",
    	manufacturer: "Huawei",
    	price: 360000
    }];
}]);

/// *** CONFIGURATIONS *** / //

angularExampleModule.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : './pages/devicelist.html',
		controller : 'deviceListController'
	});
} ]);

// / *** RUNNERS *** / //
angularExampleModule.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeStart', function() {
		$location.url('/');
	});
});
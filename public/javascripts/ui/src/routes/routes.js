angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/home', {
	    templateUrl: 'partials/index.html',
	    controller: 'ItemsController',
	    controllerAs: 'itemsCntrl'
        })

    .otherwise({ redirectTo: '/home' });
}]);

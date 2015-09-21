angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/items', {
	    templateUrl: 'partials/index.html',
	    controller: 'ItemsController',
	    controllerAs: 'itemsCntrl'
        })

    .otherwise({ redirectTo: '/items' });
}]);

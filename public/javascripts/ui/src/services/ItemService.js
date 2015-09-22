angular.module("app").factory("Item", ['$http', function ItemFactory($http) {
    "use strict";

    return {
        all: function () {
            return $http({
                method: 'Get',
                cache: true,
                url: './items'
            });
        },
        page: function(page, numItems) {
        	return $http({
                method: 'Get',
                cache: false,
                url: './items/' + page + '/' + numItems
        	});

        }
    };
}]);
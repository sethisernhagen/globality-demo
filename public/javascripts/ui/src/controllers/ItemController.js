angular.module('app').controller('ItemsController', [ '$scope', 'Item', function ($scope, Item) {
    'use strict';

    var pageSize = 20;

    function myPagingFunction() {

    	Item.page(pageSize).success(function (data) {
    		$scope.items = $scope.items.concat(data);
    	});
    }

    $scope.myPagingFunction = myPagingFunction;
    $scope.items = [];

    Item.page(pageSize).success(function (data) {
		$scope.items = data;
    });



}]);
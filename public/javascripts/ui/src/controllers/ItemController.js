angular.module('app').controller('ItemsController', [ '$scope', 'Item', function ($scope, Item) {
    'use strict';

    var pageSize = 20,
        pageCounter = 1;

    function getPage() {

    	Item.page(pageCounter, pageSize).success(function (data) {

            //increment page counter only if data is returned
            if (data.length > 0) {
                $scope.items = $scope.items.concat(data);
                pageCounter++;
            }
    	});
    }

    $scope.getPage = getPage;
    $scope.items = [];

    //populate with first page
     getPage();

}]);
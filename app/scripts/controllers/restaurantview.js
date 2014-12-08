'use strict';

app.controller('RestaurantViewCtrl', function ($scope, $routeParams, Restaurant) {
	$scope.restaurant = Restaurant.get($routeParams.restaurantId);
});
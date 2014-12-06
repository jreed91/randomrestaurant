'use strict';

app.controller('restaurantCtrl', function($scope, Restaurant){
	$scope.restaurants = [];
	$scope.restaurant = {name: '', address: '', city: '', state: ''
	};
	$scope.submitRestaurant = function () {
		Restaurant.save($scope.restaurant);
		$scope.restaurant = {name: '', address: '', city: '', state: ''};
	};
	$scope.deleteRestaurant = function (index) {
		$scope.restaurants.splice(index, 1);
	};
});
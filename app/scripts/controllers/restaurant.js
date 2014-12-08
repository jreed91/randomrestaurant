'use strict';

app.controller('restaurantCtrl', function($scope, $location, Restaurant, geolocation, Foursquare){
	
	$scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });


	// Foursquare.venues()
	// 	.success(function(data, status, headers){
	// 		$scope.venues = data.data;
	// 	});
	


	$scope.restaurants = Restaurant.all;
	$scope.restaurant = {name: '', address: '', city: '', state: ''};

	$scope.submitRestaurant = function () {
		Restaurant.create($scope.restaurant).then(function (ref) {
			$location.path('/restaurants/' + ref.name());
			$scope.restaurant = {name: '', address: '', city: '', state: ''};
		});
	};
	$scope.saveRestaurant = function (restaurant) {
		Restaurant.save(restaurant).then(function () {
			$location.path('/restaurants/');
		});
	};
	$scope.deleteRestaurant = function (restaurant) {
		Restaurant.delete(restaurant);
	};
});
'use strict';

app.controller('restaurantCtrl', function($scope, $location, Restaurant, geolocation, Foursquare){


  	geolocation.getLocation().then(function(data){
      $scope.coords = data.coords.latitude + ',' + data.coords.longitude;
    });




	Foursquare.venues($scope.coords)
		.success(function(data, status, headers){
			if (angular.isArray(data.Venues.Venue)) {
				$scope.venues = data.Venues.Venue;
			}
			else {
				$scope.venues = [data.Venues.Venue];
			}
		});
	
	angular.forEach($scope.venues, function(venue) {
	    console.log(venue);
	});

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
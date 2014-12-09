'use strict';

app.controller('RestaurantViewCtrl', function ($scope, $routeParams, Foursquare) {
	$scope.venue = [];

	Foursquare.getVenue($routeParams.venueId)
		.then(function(data){
		$scope.venue = data;
		}, function(data){
	});
});
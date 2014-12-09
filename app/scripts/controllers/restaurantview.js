'use strict';

app.controller('RestaurantViewCtrl', function ($scope, $routeParams, Foursquare) {
	$scope.venue = Foursquare.get($routeParams.venueId);
});
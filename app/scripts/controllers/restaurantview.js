'use strict';

app.controller('RestaurantViewCtrl', function ($scope, $routeParams, Foursquare) {
	$scope.venue = [];
	getVenue();

	function getVenue() {

		Foursquare.get({action: $routeParams.venueId}, function(venueResult) {
			if (venueResult.response.venue) {
				$scope.venue = venueResult.response.venue;
			}
			else {
				$scope.venue = [];
			}
		});
	};
});
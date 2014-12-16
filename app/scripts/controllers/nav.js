'use strict';

app.controller('NavCtrl', function($scope, $window, $rootScope){
	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};

	$scope.getRand = function () {
	var venues = $rootScope.venues;
	console.log(venues);
	var rand = venues[Math.floor(Math.random() * venues.length)];
	$window.location.href = "#/venues/" + rand.venue.id;
	};
});
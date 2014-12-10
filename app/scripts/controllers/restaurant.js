'use strict';

app.controller('restaurantCtrl', function($scope, $location, Restaurant, geolocation, Foursquare){
	$scope.data = {};
	$scope.venues = [];

  	geolocation.getLocation().then(function(data){
      $scope.data.coords = data.coords.latitude + ',' + data.coords.longitude;
      Foursquare.setCoords($scope.data.coords);
      Foursquare.getVenues()
		.then(function(data){
		$scope.venues = data.response.groups;
		}, function(data){

		});
    });




	


	// $scope.restaurants = Restaurant.all;
	// $scope.restaurant = {name: '', address: '', city: '', state: ''};

	// $scope.submitRestaurant = function () {
	// 	Restaurant.create($scope.restaurant).then(function (ref) {
	// 		$location.path('/restaurants/' + ref.name());
	// 		$scope.restaurant = {name: '', address: '', city: '', state: ''};
	// 	});
	// };
	// $scope.saveRestaurant = function (restaurant) {
	// 	Restaurant.save(restaurant).then(function () {
	// 		$location.path('/restaurants/');
	// 	});
	// };
	// $scope.deleteRestaurant = function (restaurant) {
	// 	Restaurant.delete(restaurant);
	// };
});
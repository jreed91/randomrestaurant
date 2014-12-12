'use strict';

app.controller('restaurantCtrl', function($scope, $filter, $location, Restaurant, geolocation, Foursquare){

$scope.location = geolocation.getLocation().then(function(data){
	return data.coords.latitude + ',' + data.coords.longitude;
});

$scope.exploreQuery = '';
$scope.filterValue = '';

$scope.venues = [];
$scope.filteredVenues = [];
$scope.filteredVenuesCount = 0;

//paging
$scope.totalRecordsCount = 0;
$scope.pageSize = 10;
$scope.currentPage = 1;

init();

function init() {
	createWatcher();
	getVenues();
}

function getVenues() {
	var offset = ($scope.pageSize) * ($scope.currentPage - 1);

	Foursquare.get({ll: $scope.location, query: $scope.exploreQuery, limit: $scope.pageSize, offset: offset}, function(venuesResults) {
		if (venuesResult.response.groups) {
			$scope.venues = venuesResult.response.group[0].items;
			$scope.totalRecordsCount = venuesResult.response.totalResults;
		}
		else {
			$scope.venues = [];
			$scope.totalRecordsCount = 0;
		}
	});
};

function filterVenues(filterInput) {
	$scope.filteredVenues = $filter("venueNameCategoryFilter")($scope.venues, filterInput);
		$scope.filteredVenuesCount = $scope.filteredVenues.length;
}

function createWatcher() {
	$scope.$watch("filterValue", function(filterInput) {
		filterVenues(filterInput);
	});
}

$scope.doSearch = function () {
	$scope.currentPage = 1;
	getVenues();
};

$scope.pageChanged = function(page) {
	$scope.currentPage = page;
	getVenues();
};













	// $scope.data = {};
	// $scope.venues = [];

 //  	geolocation.getLocation().then(function(data){
 //      $scope.data.coords = data.coords.latitude + ',' + data.coords.longitude;
 //      Foursquare.setCoords($scope.data.coords);
 //      Foursquare.getVenues()
	// 	.then(function(data){
	// 	$scope.venues = data.response.groups[0].items;
	// 	}, function(data){

	// 	});
 //    });

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
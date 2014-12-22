'use strict';

app.controller('restaurantCtrl', function(FIREBASE_URL, $scope, $window, $filter, $location, Restaurant, geolocation, Foursquare){

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

	geolocation.getLocation().then(function(data){
		$scope.location = data.coords.latitude + ',' + data.coords.longitude;
		getVenues();
	});
	
}

function getVenues() {

	var offset = ($scope.pageSize) * ($scope.currentPage - 1);

	Foursquare.get({action: 'explore',ll: $scope.location, query: $scope.exploreQuery, limit: $scope.pageSize, offset: offset}, function(venuesResult) {
		if (venuesResult.response.groups) {
			$scope.venues = venuesResult.response.groups[0].items;
			$scope.totalRecordsCount = venuesResult.response.totalResults;
			filterVenues('');
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

$scope.getRand = function () {
	var venues = $scope.venues;
	var rand = venues[Math.floor(Math.random() * venues.length)];
	$window.location.href = "#/venues/" + rand.venue.id;
};












	// $scope.restaurants = Restaurant.all;
	// $scope.venue =  {id: '', name: '', 
	// 		location: [{address: '', city: '', state: ''}],
	// 		eaten: '', banned: ''
	// 	};

	$scope.submitRestaurant = function (venue) {
		venue = {id: venue.id, name: venue.name, 
			location: [{address: venue.location.address, city: venue.location.city, state: venue.location.state}],
			eaten: 0, banned: 0 
		};
		Restaurant.create(venue).then(function (ref) {
			$location.path('/venues/'+ venue.id);
		});
	};
	$scope.eatRestaurant = function (venue) {
		var ref = new Firebase(FIREBASE_URL);
		ref.child('restaurants').orderByChild('id').equalTo(venue.id).on("child_added", function(snapshot){
			
			var key = snapshot.key();
			var eaten = snapshot.child('eaten').val();
			var newEaten = eaten += 1;

			var ref = new Firebase(FIREBASE_URL);
			var venues = ref.child('restaurants');
			var venue = venues.child(key);
			venue.update({"eaten": newEaten}, function(error) {
				if (error) {
					alert("Data could not be saved" + error);
				} else {
					alert("Data saved");
				}
			});
		});

		
	};
	// $scope.deleteRestaurant = function (restaurant) {
	// 	Restaurant.delete(restaurant);
	// };
});
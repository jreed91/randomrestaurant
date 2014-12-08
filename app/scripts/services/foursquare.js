'use strict';

app.factory('Foursquare', ['$http', function($http){
	var venues = [];

	var request = function(location) {
		return $http({
			method: 'JSONP',
			url: 'https://api.foursquare.com/v2/venues/search?ll=' + location
		});
	}
	return {
		venues: function(location) {return request(location);},
	};
}]);
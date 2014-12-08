'use strict';

app.factory('Foursquare', ['$http', '$q', function($http){
	
	var venues = [];

	var client_id = 'JZE1R0YPBSAH0STHQ3JI4SLNRSF21VPEEOX04FLHTGIMUPYP';
	var client_secret = 'ZBV2BPGHYDBVACNSAVDQDXL0HR1AOLBSBIKJR2WESQVLALDM';

	var request = function(location) {
		return $http({
			method: 'JSONP',
			url: 'https://api.foursquare.com/v2/venues/search?client_id=' + client_id +'&client_secret=' + client_secret +'&v=20130815&&ll=41.4553565,-91.0239029'
		});
	}
	return {
		venues: function(location) {return request(location);},
	};
}]);
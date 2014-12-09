'use strict';

app.factory('Foursquare', function($http, $q){
	
	var venues = [];
	var service = {}
	var baseUrl = 'https://api.foursquare.com/v2/venues/search?client_id='
	var client_id = 'JZE1R0YPBSAH0STHQ3JI4SLNRSF21VPEEOX04FLHTGIMUPYP';
	var client_secret = 'ZBV2BPGHYDBVACNSAVDQDXL0HR1AOLBSBIKJR2WESQVLALDM';
	var _coords = '';
	var _finalUrl = '';

	var makeUrl = function() {
		_finalUrl = baseUrl + client_id + '&client_secret=' + client_secret + '&ll=' + _coords + '&v=20130815&intent=browse&radius=800';
		return _finalUrl;
	}

	service.setCoords = function(coords) {
		console.log(coords);
		_coords = coords;
	}

	service.setVenue = function(venueId) {
		makeUrl
	}

	service.getVenues = function (){
		makeUrl();
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: _finalUrl
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject('Error')
		})
		return deferred.promise;
	}
	return service;
});
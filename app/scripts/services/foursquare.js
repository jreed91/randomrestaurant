'use strict';

app.factory('Foursquare', function($http, $q){
	
	var venues = [];
	var service = {}
	var baseUrl = 'https://api.foursquare.com/v2/venues/'
	var client_id = 'JZE1R0YPBSAH0STHQ3JI4SLNRSF21VPEEOX04FLHTGIMUPYP';
	var client_secret = 'ZBV2BPGHYDBVACNSAVDQDXL0HR1AOLBSBIKJR2WESQVLALDM';
	var _coords = '';
	var _finalUrl = '';


	service.setCoords = function(coords) {
		console.log(coords);
		_coords = coords;
	}

	service.getVenue = function(venueId) {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: baseUrl + venueId +'?v=20130815&client_id=' + client_id + '&client_secret=' + client_secret
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject('Error')
		})
		return deferred.promise;
	}

	service.getVenues = function (){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: baseUrl + 'explore?client_id=' + client_id + '&client_secret=' + client_secret + '&ll=' + _coords + '&v=20130815&radius=800'
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject('Error')
		})
		return deferred.promise;
	}
	return service;
});
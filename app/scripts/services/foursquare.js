'use strict';

app.factory('Foursquare', function($resource){

	var requestParams = {
		var client_id = 'JZE1R0YPBSAH0STHQ3JI4SLNRSF21VPEEOX04FLHTGIMUPYP',
		var client_secret = 'ZBV2BPGHYDBVACNSAVDQDXL0HR1AOLBSBIKJR2WESQVLALDM',
		var version = '20130815'
	}
	
	var _coords = '';
	
	var requestUri = 'https://api.foursquare.com/v2/venues/:action';

	return $resource(requestUri, {
		action: 'explore',
		client_id: requestParams.client_id,
		client_secret: requestParams.client_secret,
		
		v: requestParams.version,
		callback: 'JSON_CALLBACK'
	},
	{
		get: {method: 'JSONP'}
	});








	// var _finalUrl = '';


	// service.setCoords = function(coords) {
	// 	console.log(coords);
	// 	_coords = coords;
	// }

	// service.getVenue = function(venueId) {
	// 	var deferred = $q.defer();
	// 	$http({
	// 		method: 'GET',
	// 		url: baseUrl + venueId +'?v=20130815&client_id=' + client_id + '&client_secret=' + client_secret
	// 	}).success(function(data){
	// 		deferred.resolve(data);
	// 	}).error(function(){
	// 		deferred.reject('Error')
	// 	})
	// 	return deferred.promise;
	// }

	// service.getVenues = function (){
	// 	var deferred = $q.defer();
	// 	$http({
	// 		method: 'GET',
	// 		url: baseUrl + 'explore?client_id=' + client_id + '&client_secret=' + client_secret + '&ll=' + _coords + '&v=20130815&radius=800'
	// 	}).success(function(data){
	// 		deferred.resolve(data);
	// 	}).error(function(){
	// 		deferred.reject('Error')
	// 	})
	// 	return deferred.promise;
	// }
	// return service;
});
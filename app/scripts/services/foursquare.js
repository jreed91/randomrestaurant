'use strict';

app.factory('Foursquare', function($resource){

	var requestParams = {
		client_id: 'JZE1R0YPBSAH0STHQ3JI4SLNRSF21VPEEOX04FLHTGIMUPYP',
		client_secret: 'ZBV2BPGHYDBVACNSAVDQDXL0HR1AOLBSBIKJR2WESQVLALDM',
		version: '20130815'
	}
	
	var _coords = '';
	
	var requestUri = 'https://api.foursquare.com/v2/venues/:action';

	return $resource(requestUri, {
		client_id: requestParams.client_id,
		client_secret: requestParams.client_secret,
		v: requestParams.version,
		callback: 'JSON_CALLBACK'
	},
	{
		get: {method: 'JSONP'}
	});



});
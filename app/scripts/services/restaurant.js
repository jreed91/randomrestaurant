'use strict';

app.factory('Restaurant', function($resource){
	return $resource('http://randomrestaurant.FIREBASEIO.com/restaurants/:id.json');
});
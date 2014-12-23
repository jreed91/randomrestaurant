'use strict';

app.factory('Restaurant', function($firebase, FIREBASE_URL){
	var ref = new Firebase(FIREBASE_URL);
	var restaurants = $firebase(ref.child('restaurants')).$asArray();

	var Restaurant = {
		all: restaurants,
		create: function (restaurant) {
			return restaurants.$add(restaurant);
		},
		get: function (restaurantId) {
			return $firebase(ref.child('restaurants').orderByChild('id').equalTo(restaurantId)).$asObject();
		},
		save: function (restaurant) {
			return restaurants.$save(restaurant);
		},
		delete: function (restaurant) {
			return restaurants.$remove(restaurant);
		}
	};

	return Restaurant;
});
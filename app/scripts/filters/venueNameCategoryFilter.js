app.filter("venueNameCategoryFilter", function() {
	return function (venues, filterValue) {
		if (!filterValue) return venues;

		var matches = [];
		filterValue = filterValue.toLowerCase();
		for (var i = 0; i < venues.length; i++) {
			var venue = venues[i];

			if (venue.venue.name.toLowerCase().indexOf(filterValue) > -1 ||
				venue.venue.categories[0].shortName.toLowerCase().indexOf(filterValue) > -1) {
				matches.push(place);
			}
		}
		return matches;
	};
});
'use strict';

app.controller('NavCtrl', function($scope){
	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};
});
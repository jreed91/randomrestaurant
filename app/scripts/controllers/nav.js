'use strict';

app.controller('NavCtrl', function($scope, $window, $rootScope){
	$scope.modalShown = false;
	$scope.toggleModal = function() {
		$scope.modalShown = !$scope.modalShown;
	};

});
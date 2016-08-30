angular.module('collection', [])
	.controller('collectionCtrl', function($scope, $window) {
		$window.initMap();
		$scope.collection = $window.collection;
		$scope.loadMap = function (obj) {
			$window.loadMap(obj);
		};
	});
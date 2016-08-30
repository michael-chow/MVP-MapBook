angular.module('collection', [])
	.controller('collectionCtrl', function($scope, $window, $http) {
		$scope.fetch = function () {
			$http({
				method: 'GET',
				url: '/fetch'
			}).then(function(resp){
				$scope.collection = resp.data;
				console.log($scope.collection)
			}, function(err){
				console.log(err);
			});
		}

		$scope.fetch();

		$window.initMap();
		// $scope.collection = $window.collection;
		$scope.loadMap = function (obj) {
			$window.loadMap(obj);
		};
	});
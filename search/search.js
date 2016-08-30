angular.module('search', [])
  .controller('searchCtrl', function($scope, $window, $http) {
    $window.initMap();
    $scope.loc = $window.placeLocation;
    $scope.listen = function() {
      $scope.loc = $window.placeLocation;
    };
    $scope.save = function(title) {
      $window.placeLocation.title = title;
      $window.collection.push($window.placeLocation);
      console.log($window.collection);

      $http({
        method: 'POST',
        url: '/save',
        data: $window.placeLocation
      });

    }
  });



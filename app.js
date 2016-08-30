angular.module('app', ['search', 'collection', 'ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/search', {
        templateUrl: 'search/search.html',
        controller: 'searchCtrl'
      })
      .when('/collection', {
        templateUrl: 'collection/collection.html',
        controller: 'collectionCtrl'
      })
      .otherwise({
        redirectTo: '/search'
      });
	});
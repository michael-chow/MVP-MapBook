angular.module('app', ['search','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/search', {
        templateUrl: 'search/search.html',
        controller: 'searchCtrl'
      })
      // .when('/collection', {
      //   templateUrl: 'search/collection.html',
      //   controller: 'collectionCtrl'
      // })
      .otherwise({
        redirectTo: '/search'
      });
	})
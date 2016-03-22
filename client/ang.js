var orionAppModule = angular.module('orionApp', ['ngRoute']);
orionAppModule.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/static/partials/players.html'
		})
		.when('/teams', {
			templateUrl: '/static/partials/teams.html'
		})
		.when('/associations', {
			templateUrl: '/static/partials/associations.html'
		})
		.otherwise({
			redirectTo: '/'
		});
})
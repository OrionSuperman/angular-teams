var orionAppModule = angular.module('orionApp', ['ngRoute']);
console.log("ANG.JS")
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

		orionAppModule.factory('playerFactory', function(){
			var players = [
				{name: "Default Player"}
			];

			factory.getPlayers = function(callback){
				callback(players);
			}

			factory.addPlayer = function(player){
				players.push(player);
			}

			factory.removePlayer = function(player){
				players.splice(players.indexOf(player), 1);
			}
		})

		orionAppModule.factory('teamFactory', function(){
			var teams = [
				{name: "Default Team", players: [{name: "Team Default Player"}]}
			];

			factory.getTeams = function(callback){
				callback(teams);
			}

			factory.addTeam = function(team){
				teams.push(team);
			}

			factory.removeTeam = function(team){
				teams.splice(teams.indexOf(team), 1);
			}

			factory.assignPlayer = function(player, team){
				teams[teams.indexOf(team)].players.push(player);
			}

			factory.bootPlayer = function(player, team){
				teams[teams.indexOf(team)].players.splice(players.indexOf(player), 1);
			}
		})

		orionAppModule.controller('playersController', function(playerFactory, $window){
			this.players = [];
			var _this = this;

			playerFactory.getPlayers(function(data){
				_this.players = data;
			})

			this.addPlayer = function(){
				playerFactory.addUser(_this.newPlayer);
				this.newPlayer = {};
			}

			this.removePlayer = function(player){
				playerFactory.removePlayer(player);
			}
			
		})

		orionAppModule.controller('teamsController', function(teamFactory, $window){
			this.teams = [];
			var _this = this;

			teamFactory.getTeams(function(data){
				_this.teams = data;
			})

			this.addTeam = function (){
				teamFactory.addTeam(_this.newTeam);
				this.newTeam = {};
			}

			this.removeTeam = function (team){
				teamFactory.removeTeam(team);
			}
		})

		orionAppModule.controller('associationsController', function(teamFactory, playerFactory, $window){
			this.teams = [];
			this.players = [];
			var _this = this;

			teamFactory.getTeams(function(data){
				_this.teams = data;
			})

			playerFactory.getPlayers(function(data){
				_this.players = data;
			})

			this.assignPlayer = function(player, team){
				teamFactory.assignPlayer(player, team);
			}

			this.bootPlayer = function(player, team){
				teamFactory.bootPlayer(player, team);
			}
		})
})
;(function(ng) {
  'use strict';

  ng.module('fishing-tournament-ng1')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'common/templates/home.html'
          })
          .when('/todo', {
            templateUrl: 'todo/templates/todo.html',
            controller: 'TodoController',
            controllerAs: 'todoCtrl'
          })
          .when('/tournament', {
            templateUrl: 'tournament/templates/tournament.html',
            controller: 'TournamentController',
            controllerAs: 'tournamentCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));

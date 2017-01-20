;(function(ng) {
  'use strict';

  ng.module('fishing-tournament-ng1')
    .factory('TournamentDAO', [
      '$q',
      'Tournament',
      'TournamentResource',
      function($q, Tournament, TournamentResource) {
        var TournamentDAO = function() {};

        TournamentDAO.prototype.getAll = function() {
          var _onSuccess = function(tournaments) {
            // do something with the response from the server, like extending a model or something

            return tournaments; // this will be returned as a resolved promise
          };

          var _onError = function(error) {
            // do something with the error, like making it more readable or something
            return $q.reject(error); // this will be returned as a rejected promise
          };

          return TournamentResource
            .query()
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        };

        TournamentDAO.prototype.createTournament = function(tournament) {
          if (!ng.isObject(tournament) || !(tournament instanceof Tournament) || !tournament.isValid()) {
            return $q.reject(new TypeError('Invalid tournament to be created.'));
          }

          var _onSuccess = function(tournament) {
            return new Tournament(tournament);
          };

          var _onError = function(error) {
            return $q.reject(error);
          };

          return TournamentResource
            .save(tournament)
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        };

        TournamentDAO.prototype.deleteTournament = function(id) {
          if (!ng.isString(id)) {
            return $q.reject(new TypeError('Invalid id for deletion.'));
          }

          var _onSuccess = function() {
            return;
          };

          var _onError = function(error) {
            return $q.reject(error);
          };

          return TournamentResource
            .delete({
              id: id
            })
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        };

        return new TournamentDAO();
      }
    ]);

}(window.angular));

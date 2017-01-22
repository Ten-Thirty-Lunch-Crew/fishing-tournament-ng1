;(function(ng) {
  'use strict';

  ng.module('fishing-tournament-ng1')
    .controller('TournamentController', [
      '$log',
      '$scope',
      'Tournament',
      'TournamentDAO',
      function($log, $scope, Tournament, TournamentDAO) {
        var self = this;

        self.tournament = new Tournament();
        self.Tournaments = [];

        self.startDateIsInitialized = false;
        self.endDateIsInitialized = false;

        if(!self.startDateIsInitialized) {
          self.startDate = new Date();
          self.startDateIsInitialized = true;
        }

        if(!self.endDateIsInitialized) {
          self.endDate = new Date();
          self.endDateIsInitialized = false;
        }

        self.isDisabledEndDate = function(currentDate) {
          return currentDate <= self.startDate;
        };

        self.addDateRange = function() {
          var tmpDateRange = {
            startDateTime: self.startDate,
            endDateTime: self.endDate
          };
          self.tournament.dates.push(tmpDateRange);
        };

        self.createTournament = function(tournament) {
          TournamentDAO
            .createTournament(tournament)
            .then(function(newTournament) {
              self.tournaments.push(newTournament);
              self.tournament = new Tournament();
              $scope.TournamentForm.$setPristine();
            })
            .catch($log.error);
        };

        self.measurementTypeChange = function(measurementType) {
          switch (measurementType) {
            case "weight":
              self.tournament.measurement.unit = "pounds";
              break;
            case "height":
              self.tournament.measurement.unit = "inches";
              break;
          };
        };

        function _getAll() {
          return TournamentDAO
            .getAll()
            .then(function(tournaments) {
              self.tournaments = tournaments;
              return self.tournaments;
            })
            .catch($log.error);
        }

        self.deleteTournament = function(id) {
          TournamentDAO
            .deleteTournament(id)
            .then(function() {
              return _getAll();
            })
            .catch($log.error);
        };

        _getAll();

        return self;
      }
    ]);
}(window.angular));

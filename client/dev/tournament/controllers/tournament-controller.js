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

        // $scope.today = function() {
        //     $scope.dt = new Date();
        //   };
        //   $scope.today();
        //
        //   $scope.clear = function() {
        //     $scope.dt = null;
        //   };
        //
        //   $scope.options = {
        //     customClass: getDayClass,
        //     minDate: new Date(),
        //     showWeeks: true
        //   };
        //
        //   // Disable weekend selection
        //   function disabled(data) {
        //     var date = data.date,
        //       mode = data.mode;
        //     return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        //   }
        //
        //   $scope.toggleMin = function() {
        //     $scope.options.minDate = $scope.options.minDate ? null : new Date();
        //   };
        //
        //   $scope.toggleMin();
        //
        //   $scope.setDate = function(year, month, day) {
        //     $scope.dt = new Date(year, month, day);
        //   };
        //
        //   var tomorrow = new Date();
        //   tomorrow.setDate(tomorrow.getDate() + 1);
        //   var afterTomorrow = new Date(tomorrow);
        //   afterTomorrow.setDate(tomorrow.getDate() + 1);
        //   $scope.events = [
        //     {
        //       date: tomorrow,
        //       status: 'full'
        //     },
        //     {
        //       date: afterTomorrow,
        //       status: 'partially'
        //     }
        //   ];
        //
        //   function getDayClass(data) {
        //     var date = data.date,
        //       mode = data.mode;
        //     if (mode === 'day') {
        //       var dayToCheck = new Date(date).setHours(0,0,0,0);
        //
        //       for (var i = 0; i < $scope.events.length; i++) {
        //         var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
        //
        //         if (dayToCheck === currentDay) {
        //           return $scope.events[i].status;
        //         }
        //       }
        //     }
        //
        //     return '';
        //   }

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

        // $scope.$watch("startDate", function(date) {
        //   // read date value
        // }, true);

        self.createTournament = function(tournament) {
          TournamentDAO
            .createTournament(tournament)
            .then(function(newTournament) {
              self.tournaments.push(newTournament);
              self.tournament = new Tournament();
            })
            .catch($log.error);
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

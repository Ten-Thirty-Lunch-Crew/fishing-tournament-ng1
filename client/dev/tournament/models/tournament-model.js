;(function(ng) {
  'use strict';

  ng.module('fishing-tournament-ng1')
    .factory('Tournament', [function() {
      var Tournament = function(tournament) {
        this.name = null;
        this.dates = [];
        this.tourneyRules = null;
        this.measurement = {type: null, unit: null};
        ng.extend(this, tournament);
      };

      var MIN_ACCEPTED_LENGTH = 5;

      Tournament.prototype.isValid = function() {
        var _isDefined = ng.isDefined(this.name);
        var _isString = ng.isString(this.name);
        var _isBigEnough = (_isDefined && _isString) ? this.name.length >= MIN_ACCEPTED_LENGTH : false;

        return _isDefined && _isString && _isBigEnough;
      };

      return Tournament;
    }]);

}(window.angular));

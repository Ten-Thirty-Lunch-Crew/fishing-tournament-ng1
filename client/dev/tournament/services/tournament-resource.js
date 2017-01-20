;(function(ng) {
  'use strict';

  ng.module('fishing-tournament-ng1')
    .factory('TournamentResource', [
      '$resource',
      function($resource) {
        var _url = '/api/tournaments/:id';
        var _params = {};
        var _methods = {};

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));

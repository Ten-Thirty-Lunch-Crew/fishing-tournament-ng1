;(function(ng) {
  'use strict';

  ng.module('fishing-tournament-ng1')
    .factory('TodoResource', [
      '$resource',
      function($resource) {
        var _url = '/api/todos/:id';
        var _params = {};
        var _methods = {};

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));
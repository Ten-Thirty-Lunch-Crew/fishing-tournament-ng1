;(function(ng) {
  'use strict';

  ng.module('fishing-tournament-ng1')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));

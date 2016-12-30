'use strict';
angular.module('side.members').factory('Members', function($resource) {
  var Study;
  Study = $resource('config/members.json');
  return Study;
});

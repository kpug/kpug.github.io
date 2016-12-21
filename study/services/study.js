'use strict';
angular.module('side.study').factory('Study', function($resource) {
  var Study;
  Study = $resource('subject.json');
  return Study;
});

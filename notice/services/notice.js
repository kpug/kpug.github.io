'use strict';
angular.module('side.notice').factory('Notice', function($resource, $http) {
  var Notice;
  Notice = $resource('config/notice/notice.json', {}, {
    list: {
      method: 'GET',
      isArray: true
    }
  });
  Notice.prototype.get = function(date) {
    return $http({
      method: 'GET',
      url: 'config/notice/' + date + '.md'
    });
  };
  return Notice;
});

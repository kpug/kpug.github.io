'use strict';
angular.module('side.study').directive('sidebar', function() {
  return {
    templateUrl: 'study/directives/sidebar.html',
    scope: {
      subject: '=subject'
    },
    replace: true,
    restrict: 'E',
    controller: function($scope, $state) {
      var vm;
      vm = this;
    }
  };
});

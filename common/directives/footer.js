'use strict';
angular.module('side').directive('jsFooter', function() {
  return {
    templateUrl: 'common/directives/footer.html',
    scope: true,
    replace: true,
    restrict: 'E',
    controller: function($scope) {}
  };
});

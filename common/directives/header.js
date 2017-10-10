'use strict';
angular.module('side').directive('jsHeader', function() {
  return {
    templateUrl: 'common/directives/header.html',
    scope: {},
    replace: true,
    restrict: 'E',
    controllerAs: 'vm',
    controller: function($scope, menu, Study) {
      var vm;
      vm = this;
      vm.subjects = [];
      vm.title = '한국 플레이! 사용자 그룹';
      vm.navigation = menu;
      Study.query(function(subjects) {
        return vm.subjects = subjects;
      });
      $scope.$on('$stateChangeSuccess', function(event, toState) {
        vm.studyActive = toState.name === 'study';
      });
    }
  };
});

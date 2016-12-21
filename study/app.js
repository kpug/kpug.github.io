'use strict';
angular.module('side.study', ['ui.router']).config(function($stateProvider) {
  $stateProvider.state('study', {
    url: '/study/{subject}/{chapter}',
    templateUrl: './study/controllers/study.html',
    controllerAs: 'vm',
    controller: 'StudyController'
  });
});

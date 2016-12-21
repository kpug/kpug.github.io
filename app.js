'use strict';
angular.module('side', ['ui.router', 'ngResource', 'aql.asciidoc', 'Menu', 'side.study', 'side.notice', 'side.members']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/home',
    templateUrl: './common/controllers/home.html',
    controllerAs: 'vm',
    controller: 'HomeController'
  });
  $urlRouterProvider.when('', '/home');
});

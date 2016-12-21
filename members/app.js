'use strict';
angular.module('side.members', ['ui.router']).config(function($stateProvider) {
  $stateProvider.state('members', {
    url: '/members',
    templateUrl: './members/controllers/members.html',
    controllerAs: 'vm',
    controller: 'MembersController'
  });
});

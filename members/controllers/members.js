'use strict';
angular.module('side.members').controller('MembersController', function(Members) {
  var vm;
  vm = this;
  vm.members = [];
  Members.query(function(members) {
    vm.members = members;
  });
});

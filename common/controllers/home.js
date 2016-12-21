'use strict';
angular.module('side').controller('HomeController', function(Notice) {
  var vm;
  vm = this;
  vm.notices = [];
  Notice.list(function(notices) {
    vm.notices = notices;
  });
});

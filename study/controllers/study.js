'use strict';
angular.module('side.study').controller('StudyController', function($state, $sce, $http, Study) {
  var vm;
  vm = this;
  vm.asciidocOpts = Opal.hash2(['safe'], {
    'safe': 'unsafe'
  });
  vm.subject = {};
  Study.query(function(subjects) {
    var chapter;
    vm.subject = _.find(subjects, function(subject) {
      return subject.route === $state.params.subject;
    });
    if ($state.params && $state.params.chapter) {
      chapter = $state.params.chapter;
      return $http.get(vm.subject.chapters[chapter].url).then(function(response) {
        vm.ascii = response.data;
      });
    }
  });
});

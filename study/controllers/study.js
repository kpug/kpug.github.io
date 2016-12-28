'use strict';
angular.module('side.study').controller('StudyController', function($location, $state, $sce, $timeout, $http, Study) {
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
      $http.get(vm.subject.chapters[chapter].url).then(function(response) {
        vm.ascii = response.data;
      });
      return $timeout(function() {
        return DISQUS.reset({
          reload: true,
          config: function() {
            this.page.identifier = $location.path();
            this.page.url = $location.absUrl().replace('#', '#!');
            this.page.title = vm.subject.chapters[chapter].title;
            return this.language = 'ko';
          }
        }, 2000);
      });
    }
  });
});

'use strict';
angular.module('side.notice', ['ui.router']).config(function($stateProvider) {
  $stateProvider.state('notice', {
    url: '/notice/{date}',
    templateUrl: './notice/controllers/notice.html',
    controllerAs: 'vm',
    controller: 'NoticeController',
    resolve: {
      noticeContent: function($stateParams, Notice) {
        return Notice.prototype.get($stateParams.date);
      }
    }
  });
});

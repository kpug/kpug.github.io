'user strict';
angular.module('side.notice').controller('NoticeController', function($stateParams, $sce, Notice, noticeContent) {
  var converter, html, vm;
  vm = this;
  vm.title = '공지사항';
  vm.date = $stateParams.date;
  if (noticeContent.status === 200) {
    converter = new showdown.Converter();
    html = converter.makeHtml(noticeContent.data);
    vm.noticeContent = $sce.trustAsHtml(html);
    return;
  }
});

angular.module('Menu', [])

.constant('menu', [{name:'홈',link:'home'},{name:'스터디',link:'',type:'dropdown',subMenu:['Play for scala','Akka in action']},{name:'구성원',link:'members'}])

;
angular.module('Menu', [])

.constant('menu', [{name:'Home',link:'home'},{name:'Study',link:'',type:'dropdown',subMenu:['Play for scala','Akka in action']},{name:'Members',link:'members'}])

;
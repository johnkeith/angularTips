(function(){
  angular.module("tipsAndTempsApp", [
    'controllers',
  ])

  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
  });
})();

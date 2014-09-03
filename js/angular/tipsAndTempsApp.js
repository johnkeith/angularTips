(function(){
  angular.module("angularTipsApp", [
    'ngRoute',
    'controllers',
    'tipCalc'
  ])

  .config(["$routeProvider",
    function($routerProvider){
      $routerProvider.
        when('/', {
          templateUrl: '../html/templates/tipCalc.html',
          controller: 'tipCalcCtrl'
        }).
        otherwise("/");
      }
    ]
  );
})();

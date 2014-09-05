(function(){
  angular.module("angularTipsApp", [
    'ngRoute',
    'controllers',
    'tipCalc',
    'vr.directives.slider'
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

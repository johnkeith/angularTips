angular.module("controllers", [])
  .controller("tipCalcCtrl", ["$scope", "tipCalc",
    function($scope, tipCalc){
      $scope.twenty_test = tipCalc.defaultCalc(20, 0.20);
  }]);

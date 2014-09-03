angular.module("controllers", [])
  .controller("tipCalcCtrl", ["$scope", "tipCalc",
    function($scope, tipCalc){
      $scope.calculate = function(){
        $scope.billWithTip = tipCalc.defaultCalc($scope.bill, 0.20);
      };
      $scope.bill;
  }]);

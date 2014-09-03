angular.module("controllers", [])
  .controller("tipCalcCtrl", ["$scope", "tipCalc",
    function($scope, tipCalc){
      $scope.calculate = function(){
        tipConverted = tipCalc.percentConvertor($scope.tip);
        $scope.billWithTip = tipCalc.defaultCalc($scope.bill, tipConverted);
      };
      $scope.bill = 0;
      $scope.tip = 0;
  }]);

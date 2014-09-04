angular.module("controllers", [])
  .controller("tipCalcCtrl", ["$scope", "tipCalc",
    function($scope, tipCalc){
      $scope.btnInput = function(btnVal){
        if(btnVal == "C"){
          $scope.clearBill();
        }
        else if(btnVal == "."){
          $scope.centsPressed = true;
        }
        else if ($scope.centsPressed == true && $scope.bill.cents.length < 2){
          $scope.bill.cents += btnVal;
        }
        else if ($scope.centsPressed == false){
          $scope.bill.dollars += btnVal;
        }
        $scope.calcTotal();
      };
      $scope.calcTotal = function(){
        tipConverted = tipCalc.percentConvertor($scope.tip);
        billConverted = tipCalc.billConvertor($scope.bill);
        $scope.billWithTip = tipCalc.defaultCalc(billConverted, tipConverted);
      };
      $scope.clearBill = function(){
        $scope.bill.dollars = "0";
        $scope.bill.cents = "";
        $scope.centsPressed = false;
      };
      $scope.bill = {
        dollars: "0",
        cents: ""
      };
      $scope.tip = "0";
      $scope.billWithTip = "0";
      $scope.centsPressed = false;
  }]);

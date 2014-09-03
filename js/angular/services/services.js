angular.module("tipCalc", [])
  .factory('percentConvertor', [function(percent){
    if(percent < 0){
      percent = Math.abs(percent);
    }
    else if(percent > 1){
      percent = percent / 100;
    }
    return percent;
  }])
  .factory('defaultCalc',[function(bill, percent){
    return bill += bill * percent;
  }]);


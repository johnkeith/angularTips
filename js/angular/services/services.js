angular.module("tipCalc", [])
  .factory('tipCalc', function(){
    return {
      percentConvertor: function(percent){
        if(percent < 0){
          percent = Math.abs(percent);
        }
        else if(percent > 1){
          percent = percent / 100;
        }
        return percent;
      },
      defaultCalc: function(bill, percent){
        return bill += bill * percent;
      }
    }
  });


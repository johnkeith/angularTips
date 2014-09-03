angular.module("tipCalc", [])
  .factory('tipCalc', function(){
    return {
      percentConvertor: function(percent){
        percent = parseFloat(percent);

        if(percent < 0){
          return Math.abs(percent);
        }
        else if(percent > 1){
          return percent / 100;
        }
        return percent;
      },
      defaultCalc: function(bill, percent){
        bill = parseFloat(bill);
        return bill += bill * percent;
      }
    }
  });


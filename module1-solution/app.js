(function(){
    'use strict';
    angular.module("LunchCheck",[])
    .controller('LunchCheckController',function($scope)
    {
        
       
        $scope.dispNumeric = function() {
            var tnameval = calcNumForString($scope.name);
            $scope.t=tnameval;
           
        }
        
    });
    function calcNumForString(string){
        var item = string.split(",");
                var tlen = item.length;
                var len = tlen;
                var res = "";
                for(var i=0;i<tlen;i++)
                    if(item[i]=="")
                        len-=1;
                if(len==0)
                    res = "Please enter data first";
                else if(len<=3)
                    res = "Enjoy!";
                else
                    res = "Too Much!";
                return res;
        
    }
 
})();
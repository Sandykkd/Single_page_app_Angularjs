(
    function(){
        angular.module('LunchCheck',[])
        .controller('LunchCheckController',mycontrol);

        mycontrol.$inject = ['$scope'];
        function mycontrol($scope){
            $scope.n="";
            $scope.val = "";
            $scope.menu= function(){
                $scope.val = menu_check($scope.n);
            }

            function menu_check(string){
                var str = string.split(",");
                var arr = str.length;
                  
                for(var i=0;i<string.length;i++)   
                {
                    if(str[i] == "")
                        arr=  arr-1;
                }
                var txt = "";
                if(arr==0)
                
                    {
                        txt = "Please enter data first";
                     }
                else if(arr<=3)
                {
                    txt = "Enjoy!";
                }
                
                else
                {
                    txt = "Too Much!";

                 }
                    
                return txt;
            }
        };
    }
)();

(
    function(){
        'use strict';

        angular.module('NarrowItDownApp',[])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .directive('foundItems', foundItems);

        function foundItems() {
            var ddo = {
              templateUrl: 'foundItemList.html',
              scope: {
                  found : '<',
                  remove: '&'
              },
              controller: foundItemsDirectiveController,
              controllerAs: 'controller',
              bindToController: true
            };
          
            return ddo;
          }

          function foundItemsDirectiveController(){
              var controller = this;
          }

        NarrowItDownController.$inject = ['MenuSearchService'];
        function NarrowItDownController(MenuSearchService){
            var ctrl = this;
            ctrl.find = "";
            ctrl.getItems = function(){
                ctrl.error = "";
                var promise = MenuSearchService.getMatchedMenuItems(ctrl.find);
                promise.then(function(result){
                    ctrl.found = result;
                   
                    if(ctrl.found.length == 0){
                        ctrl.error = "Nothing Found";
                    }
                }).catch(function (error) {
                    console.log("Something went wrong");
                  });   
            }
            ctrl.removeItem = function (itemIndex) {
                console.log(itemIndex);
                MenuSearchService.removeItem(ctrl.found,itemIndex);
              };


        }

        MenuSearchService.$inject = ['$http'];
        function MenuSearchService($http){
            var service = this;

            service.getMatchedMenuItems = function (searchTerm) {
                
                return $http({
                    method: "GET",
                    url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
                  }).then(function (response) {
              
                    var arr1 =[];
                    var t=0;
                    var full_list  = response.data.menu_items;
                    if(searchTerm == ""){
                        return arr1;
                    }
                    for(var p=0;p<full_list.length;p++){
                    
                        var currentDesc = full_list[p].description;
                        currentDesc = currentDesc.toLowerCase();
                        searchTerm = searchTerm.toLowerCase();
                        if(currentDesc.includes(searchTerm)){
                            arr1[t] = full_list[p];
                            t+=1;
                        }
                 
                    }
                    
                    
                    return arr1;
                  })
                  .catch(function (error) {
                    console.log("Something went wrong");
                  });
              };

              service.removeItem = function (found_new_arr,itemIndex) {
                 
                  found_new_arr.splice(itemIndex, 1);
              };
            
        }
    }
)();
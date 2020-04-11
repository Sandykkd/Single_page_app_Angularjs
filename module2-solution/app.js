(function () {
    'use strict';


    angular.module('ShoppingListCheckOff', [])
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .controller('ToBuyController', ToBuyController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        
        var itemAdder = this;
        itemAdder.bought = ShoppingListCheckOffService.boughtItems();
    }


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        
        var showList = this;
        showList.to_buy = ShoppingListCheckOffService.getItems();
        
        
        showList.removeItem = function (item) {
            ShoppingListCheckOffService.removeItem(item);
        }
        

       
      

    }


    function ShoppingListCheckOffService() {
        var service = this;
        

        // List of shopping items
        var to_buy = [{
            itemName: "cookies",
            itemQuantity: "10"
        }
            , {
            itemName: "biscuits",
            itemQuantity: "20"
        }
            , {
            itemName: "cookies",
            itemQuantity: "70"
        }
            , {
            itemName: "cookies",
            itemQuantity: "80"
        }
            , {
            itemName: "biscuits",
            itemQuantity: "50"
        }];
        

        
        var bought = [];
     
         
        service.removeItem = function (item) {
            bought.push(item);

            to_buy.splice(item, 1);
         
            

        };
        //alert(bought);
        service.boughtItems = function (item) {

            return bought;
        };
        service.getItems = function () {
                return to_buy;
        };

       

    }

})();
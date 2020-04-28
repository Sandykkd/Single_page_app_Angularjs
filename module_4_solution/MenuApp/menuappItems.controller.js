(
    function(){
        angular.module('MenuApp')
        .controller('ItemDetailController',ItemDetailController);
        ItemDetailController.$inject = ['items'];
        function ItemDetailController(items){
            var Item = this;
            Item.items = items;
            
        }
    }
)();
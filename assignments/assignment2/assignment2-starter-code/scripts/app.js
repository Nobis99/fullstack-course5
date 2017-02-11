(function () {
    'use strict';

var app = angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService' ];
    
    function ToBuyController(ShoppingListCheckOffService) {
        var buyList = this;
        buyList.items = ShoppingListCheckOffService.getShippingList();
        buyList.bought = function(indexNumber) {
            ShoppingListCheckOffService.moveItem(indexNumber);
        };
        buyList.presentList = ShoppingListCheckOffService.moretobuy();
        
    }   
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var Bought = this;
        Bought.items = ShoppingListCheckOffService.getBought();
        Bought.finishedList = ShoppingListCheckOffService.moretobuy();

        
    }
        
    function ShoppingListCheckOffService() {
        var service = this;
        var purchased = [];
        var shoppingList = [
            { name : "Milk", quantity: "2" },
            { name : "Donuts", quantity : "100"},
            { name : "Apples", quantity : "12"},
            { name : "Beer", quantity : "6"},
            { name : "Cookies", quantity : "12" }
        ]; 
        service.moretobuy = function(){
            //todo - check length of array to change value
            return true;
        };
        service.moveItem = function(indexNumber) {
            purchased.push(shoppingList[indexNumber]);
            shoppingList.splice(indexNumber, 1);
        };
        service.getShippingList = function() {
            return shoppingList;
        };
        service.getBought = function(){
          return purchased;  
        };
    }
})();
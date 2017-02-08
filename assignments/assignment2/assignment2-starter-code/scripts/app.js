(function () {
'use strict';

var shoppinglist1 = [
    "Milk","Chocolate","Peanut Butter","Donuts"
];

var shoppinglist2 = [
{
    name : "Milk",
    quantity: "2"
},
{
    name : "Donuts",
    quantity : "100"
},
{
    name : "Apples",
    quantity : "12"
}
];
    
angular.module('Shopping',[])
    .controller('CartController', CartController);
    CartController.$inject = ['$scope'];

    function CartController($scope) {
        $scope.shoppinglist1 = shoppinglist1;
        $scope.shoppinglist2 = shoppinglist2;
        
    }
    
})();
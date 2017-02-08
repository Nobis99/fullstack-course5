(function () {
'use strict';
angular.module('Shopping',[])
    .controller('CartController', CartController);
    CartController.$inject = ['$scope'];

    function CartController($scope) {
        $scope.name = "Kane";
    }
    
})();
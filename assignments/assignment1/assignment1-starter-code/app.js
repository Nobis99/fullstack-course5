(function () {
    'use strict';
    angular.module('LunchChecker', [])

.controller('MsgController', MsgController);
MsgController.$inject = ['$scope'];

    
function MsgController($scope) {
    
    $scope.updating = function() {
        var boxMsg = $scope.dishes_list;
        $scope.TextBoxMsg = boxMsg;
    }

    $scope.Check_Dish = function () {
        var boxMsg = $scope.dishes_list;
        if (!boxMsg) {
            $scope.TextBoxMsg = "Please enter data first";
        }
        if (boxMsg) {
            var pList = boxMsg.split(',');
            if (pList.length <= 3) {
                $scope.TextBoxMsg = "Enjoy!";
            }
            else {
                $scope.TextBoxMsg = "Too much!";
            }
        }
        //$scope.TextBoxMsg = boxMsg;
    };
}

function CheckComma (string) {
    return 0;
}
    
function firstController ($scope) {
  $scope.dishes_list = "Kaner";
    
  $scope.displayNumberic = function(){
      var totalNameValue = 0;
      var totalNameValue = CalculateStringValue($scope.name);
      $scope.totalValue = totalNameValue;
      
  };
}
    
function CalculateStringValue(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
}
    
})();
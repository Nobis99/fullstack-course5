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

    
    $scope.CheckBox = function () {
        $scope.TextBoxMsg = "There is value in the Text.";
        //$scope.dishes_list = "";
    };
}

function CheckComma () {
    
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
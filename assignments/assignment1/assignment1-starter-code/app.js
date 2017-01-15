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
            $scope.fntColor = { "color":"red" };
            $scope.boarderColor = { "border" : "solid 1px red" };

        }
        if (boxMsg) {
            var pList = boxMsg.split(',');
            pList = CheckComma(pList);

            if (pList.length <= 3) {
                $scope.TextBoxMsg = "Enjoy!";
                $scope.fntColor = { "color":"green" };
                $scope.boarderColor = { "border" : "solid 1px green" };
            }
            else {
                $scope.TextBoxMsg = "Too much!";
                $scope.fntColor = { "color":"green" };
                $scope.boarderColor = { "border" : "solid 1px green" };
            }
        }
        $scope.debugMessage = pList;
    };
}

function CheckComma (y) {
    for (var i=0; i < y.length; i++){ y[i] = y[i].trim(); }
    y = y.filter(String);
    return y;
}
function testing(string){
    return string;
}
    
})();
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
        //boxMsg = CheckComma(boxMsg);
        //boxMsg = testing(boxMsg);

        //$scope.countv = boxMsg;
        $scope.TextBoxMsg = "function called";

        
        if (!boxMsg) {
            $scope.TextBoxMsg = "Please enter data first";
        }
        if (boxMsg) {
            var pList = boxMsg.split(',');
            pList = CheckComma(pList);

            if (pList.length <= 3) {
                $scope.TextBoxMsg = "Enjoy!";
            }
            else {
                $scope.TextBoxMsg = "Too much!";
            }
        }
        //$scope.TextBoxMsg = count;
        $scope.countv = pList;
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
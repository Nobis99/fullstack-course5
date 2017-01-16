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
            $scope.answer = { 
                Name: "Please enter data first", 
                fnt: { "color":"red" }, 
                box : { "border" : "solid 1px red" }};
        }
        if (boxMsg) {
            var pList = boxMsg.split(',');
            pList = CheckComma(pList);

            if (pList.length <= 3) {
                $scope.answer = { 
                    Name: "Enjoy!", 
                    fnt: { "color":"green" }, 
                    box : { "border" : "solid 1px green" }};
            }
            else {
                $scope.answer = { 
                    Name: "Too much!", 
                    fnt: { "color":"green" }, 
                    box : { "border" : "solid 1px green" }};
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
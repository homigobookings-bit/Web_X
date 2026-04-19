var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.userInput = "";
});

// COMMON FUNCTION (reduces repetition)
function simpleDirective(template) {
    return function() {
        return {
            restrict: "E",
            template: template
        };
    };
}

// BOX
app.directive("myBox", function() {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="box" ng-transclude></div>'
    };
});

// TEXT
app.directive("myText", simpleDirective(
    '<div class="highlight">Enter Something:</div>'
));

// INPUT
app.directive("myInput", simpleDirective(
    '<input type="text" ng-model="userInput">'
));

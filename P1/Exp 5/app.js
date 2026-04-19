// Create AngularJS Module
var app = angular.module("myApp", []);

// Create Controller
app.controller("MainController", function ($scope) {
    $scope.message = "Hello World from AngularJS!";
});

var app = angular.module("myApp", []);

app.controller("MainController", function ($scope) {
  $scope.title = "Enter Color to Change Background";
  $scope.bgColor = "white";
});

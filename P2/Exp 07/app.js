var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.firstName = "";
    $scope.lastName = "";

    // ARRAY for subjects (instead of 4 separate variables)
    $scope.subjects = [
        { name: "", ia1: 0, ia2: 0 },
        { name: "", ia1: 0, ia2: 0 },
        { name: "", ia1: 0, ia2: 0 },
        { name: "", ia1: 0, ia2: 0 }
    ];

});

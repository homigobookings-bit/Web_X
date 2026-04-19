var app = angular.module("myApp", []);

app.controller("MainController", function($scope){

    $scope.title = "AngularJS Variables and Arrays Example";
    $scope.studentName = "Shreyas";

    // Predefined subjects
    $scope.subjects = [];

    $scope.addSubject = function(){
        if($scope.newSubject){
            $scope.subjects.push($scope.newSubject);
            $scope.newSubject = "";
        }
    };

});

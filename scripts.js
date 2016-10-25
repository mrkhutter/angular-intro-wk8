var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
    $scope.firstName = "mark";
    $scope.lastName = "hutter";

    $scope.names = ['mark', 'rebecca', 'matt'];

    $scope.updateTweet = function(){
        console.log('does some stuff');
    }
});
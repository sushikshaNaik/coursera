(function(){
    'use strict';
    angular.module('MyFirstApp',[])
    .controller('MyFirstController',function($scope){
                $scope.name="sushiksha";
                $scope.sayHello=function(){
        return "Hello Coursera!";
    };
                });
})();
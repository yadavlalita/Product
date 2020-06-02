angular.module('Addnumber',[])
 .controller('AddnumberController',function($scope)
 {
     $scope.Addnumbers = function()
     {
         var a = Number($scope.a || 0);
         var b = Number($scope.a || 0);
         $scope.sum = a+b;
     }
 });
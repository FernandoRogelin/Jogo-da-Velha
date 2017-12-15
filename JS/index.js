const app = angular.module("tic-tac-toe", [])
  .controller("gameController", $scope =>{
    $scope.letra = 'X';
    $scope.verifica = function(){
        
    };
});


/*const app = angular.module('tic-tac-toe', [])
  .controller('gameController', ['$scope', '$log', function($scope, $log) {
    $scope.$log = $log;
    $scope.message = 'Hello World!';
}]); */
const app = angular.module("tic-tac-toe", [])
  .controller("gameController", $scope => {
    $scope.matriz = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];


    var letra = 'X';
    
    $scope.verifica = function(raiz, raiz2){
      if($scope.matriz[raiz][raiz2] === 'X' || $scope.matriz[raiz][raiz2] === 'O'){
        $scope.msg = "Valor inválido!";
      } else{
        $scope.msg = " ";
        $scope.matriz[raiz][raiz2] = letra;
        var a = (letra === 'X') ? 'O' : 'X';
        letra = a;
      }
    }
});


/*const app = angular.module('tic-tac-toe', [])
  .controller('gameController', ['$scope', '$log', function($scope, $log) {
    $scope.$log = $log;
    $scope.message = 'Hello World!';
}]); */
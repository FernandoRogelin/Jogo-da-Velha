const app = angular.module("tic-tac-toe", [])
  .controller("gameController", $scope => {
    $scope.matriz = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];


    var letra = 'X';

    $scope.verifica = function (raiz, raiz2) {
      if ($scope.matriz[raiz][raiz2] === 'X' || $scope.matriz[raiz][raiz2] === 'O') {
        $scope.msg = "Valor inválido!";
      } else {
        $scope.msg = " ";
        $scope.matriz[raiz][raiz2] = letra;
        var a = (letra === 'X') ? 'O' : 'X';
        letra = a;
        checa();
      }
    }

    var winner;

    function checa() {
      for (var i = 0; i < 3; i++) {
        if ($scope.matriz[i][0] === $scope.matriz[i][1] === $scope.matriz[i][2])
          winner = $scope.matriz[i][0];
          console.log(winner);
        if ($scope.matriz[0][i] === $scope.matriz[1][i] === $scope.matriz[2][i])
          winner = $scope.matriz[0][i];
      }

      if ($scope.matriz[0][0] === $scope.matriz[1][1] === $scope.matriz[2][2])
        winner = $scope.matriz[0][0];

      if ($scope.matriz[0][2] === $scope.matriz[1][1] === $scope.matriz[2][0])
        winner = $scope.matriz[0][2];

      if (winner) {
        $scope.winner = winner;
      }
    }
  });
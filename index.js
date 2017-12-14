const app = angular.module('tic-tac-toe', [])
    .controller('gameController', $scope =>{
        $scope.message = function() {
            $scope.message = "oi";
        };
});

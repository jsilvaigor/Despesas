angular.module('starter.controllers', [])

.controller('GanhosCtrl', function($scope, $rootScope) {
  $scope.ganhos = [{
        nome: "Salario",
        valor: 1000
    }];
    $scope.addGanho = function(e) {
        $scope.ganhos.push({
            nome: $scope.nome,
            valor: $scope.valor
        });
        $scope.nome = "";
        $scope.valor = 0;
    };
    $scope.getTotal = function() {
        var rtnTotal = 0;
        for (var i = 0; i < $scope.ganhos.length; i++) {
            rtnTotal += $scope.ganhos[i].valor;
        }

        $rootScope.totalGanhos = rtnTotal;

        return rtnTotal;
    };
})

.controller('DespesasCtrl', function($scope, $rootScope) {
  $scope.despesas = [{
        nome: "Compras",
        valor: 1000
    }];
    $scope.addDespesa = function(e) {
        $scope.despesas.push({
            nome: $scope.nome,
            valor: $scope.valor
        });
        $scope.nome = "";
        $scope.valor = 0;
    };
    $scope.getTotal = function() {
        var rtnTotal = 0;
        for (var i = 0; i < $scope.despesas.length; i++) {
            rtnTotal += $scope.despesas[i].valor;
        }

        $rootScope.totalDespesas = rtnTotal;

        return rtnTotal;
    };
})

.controller('BalancoCtrl', function($scope, $rootScope) {

  $scope.calculaSaude = function(){
    var total = $rootScope.totalGanhos - $rootScope.totalDespesas;

    if(total >= 0){
      $scope.saude = true;
    }else{
      $scope.saude = false;
    }

    return total;

  }



})

.controller('ContaCtrl', function($scope) {});

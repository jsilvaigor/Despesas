angular.module('starter.controllers', [])

  .controller('GanhosCtrl', function ($scope, $rootScope, firebaseData, $firebaseArray) {
    $scope.ganhos = $firebaseArray(firebaseData.refGanhos());
    $scope.addGanho = function (e) {
      $scope.ganhos.$add({
        nome: $scope.nome,
        valor: $scope.valor
      });
      $scope.nome = "";
      $scope.valor = 0;
    };
    $scope.getTotal = function () {
      var rtnTotal = 0;
      for (var i = 0; i < $scope.ganhos.length; i++) {
        rtnTotal += $scope.ganhos[ i ].valor;
      }

      $rootScope.totalGanhos = rtnTotal;

      return rtnTotal;
    };
  })

  .controller('DespesasCtrl', function ($scope, $rootScope, firebaseData, $firebaseArray) {
    $scope.despesas = $firebaseArray(firebaseData.refDespesas());
    $scope.addDespesa = function (e) {
      $scope.despesas.$add({
        nome: $scope.nome,
        valor: $scope.valor
      });
      $scope.nome = "";
      $scope.valor = 0;
    };
    $scope.getTotal = function () {
      var rtnTotal = 0;
      for (var i = 0; i < $scope.despesas.length; i++) {
        rtnTotal += $scope.despesas[ i ].valor;
      }

      $rootScope.totalDespesas = rtnTotal;

      return rtnTotal;
    };
  })

  .controller('BalancoCtrl', function ($scope, $rootScope) {

    $scope.calculaSaude = function () {
      var total = $rootScope.totalGanhos - $rootScope.totalDespesas;

      if (total >= 0) {
        $scope.saude = true;
      } else {
        $scope.saude = false;
      }

      return total;

    }

  })

  .controller('ContaCtrl', function ($scope) {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        $scope.showLoginForm = false;
        $scope.user = user;
      } else {
        $scope.showLoginForm = true;
      }
    });

    $scope.login = function (email, senha) {
      firebase.auth().signInWithEmailAndPassword(email, senha).catch(function (error) {
        console.log(error);
      });
    };

    $scope.logout = function () {
      firebase.auth().signOut().then(function () {
        $scope.showLoginForm = true;
      }, function (error) {
        console.log(error);
      })
    }

  });

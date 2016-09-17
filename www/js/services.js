angular.module('starter.services', [])
  .factory('firebaseData', function ($firebase) {
    var config = {
      apiKey: "apikey",
      authDomain: "myapp.firebaseapp.com",
      databaseURL: "https://myapp.firebaseio.com",
      storageBucket: "myapp.appspot.com"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    return {
      ref: function () {
        return ref;
      },
      refGanhos: function () {
        return ref.child('ganhos');
      },
      refDespesas: function () {
        return ref.child('despesas');
      }
    }

  })

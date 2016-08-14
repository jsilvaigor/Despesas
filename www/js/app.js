// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.ganhos', {
    url: '/ganhos',
    views: {
      'tab-ganhos': {
        templateUrl: 'templates/tab-ganhos.html',
        controller: 'GanhosCtrl'
      }
    }
  })

  .state('tab.despesas', {
    url: '/despesas',
    views: {
      'tab-despesas': {
        templateUrl: 'templates/tab-despesas.html',
        controller: 'DespesasCtrl'
      }
    }
  })

  .state('tab.balanco', {
      url: '/balanco',
      views: {
        'tab-balanco': {
          templateUrl: 'templates/tab-balanco.html',
          controller: 'BalancoCtrl'
        }
      }
    })
    .state('tab.conta', {
      url: '/conta',
      views: {
        'tab-conta': {
          templateUrl: 'templates/tab-conta.html',
          controller: 'ContaCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/ganhos');

});

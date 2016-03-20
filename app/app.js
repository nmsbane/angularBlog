var blogApp = angular.module('blogApp', ['ngRoute']);

blogApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      template: 'Home'
    }).otherwise({
      redirectTo: '/'
    });
}]);

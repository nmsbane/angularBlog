var blogApp = angular.module('blogApp', ['ngRoute']);

blogApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'views/posts.html'
    }).otherwise({
      redirectTo: '/'
    });
}]);

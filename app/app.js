var blogApp = angular.module('blogApp', ['ngRoute', 'app.controllers']);

blogApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsController'
    }).otherwise({
      redirectTo: '/'
    });
}]);

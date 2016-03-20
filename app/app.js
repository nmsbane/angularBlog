var blogApp = angular.module('blogApp', ['ngRoute', 'app.controllers']);

blogApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsController'
    }).when('/post/:id', {
      templateUrl: 'views/singlepost.html',
      controller: 'SinglePostController'
    }).when('/page/:id', {
      templateUrl: 'views/page.html',
      controller: 'PageController'
    })

    .otherwise({
      redirectTo: '/'
    });
}]);

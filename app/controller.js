angular.module('app.controllers', [])
              .controller('PostsController', ['$scope', '$http', function($scope, $http){
                  $http.get('data/posts.json').success(function(data){
                    $scope.posts = data;
                  })
              }])

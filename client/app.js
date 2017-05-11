var app = angular.module("StoreFront",['ngRoute', 'angularMoment']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/partials/_index.html',
    controller: 'IndexController'
  })
})

var app = angular.module("StoreFront",['ngRoute', 'angularMoment']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/partials/_index.html',
    controller: 'IndexController'
  })
  .when('/products',{
    templateUrl: '/partials/_products.html',
    controller: 'IndexController'
  })
  .when('/orders',{
    templateUrl: '/partials/_orders.html',
    controller: 'IndexController'
  })
  .when('/customers',{
    templateUrl: '/partials/_customers.html',
    controller: 'IndexController'
  })
})

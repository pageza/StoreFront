// var app = angular.module("StoreFront",['ngRoute', 'angularMoment']);
//
// app.config(function($routeProvider){
//   $routeProvider
//   .when('/',{
//     templateUrl: '/partials/_index.html',
//     controller: 'IndexController'
//   })
//   .when('/products',{
//     templateUrl: '/partials/_products.html',
//     controller: 'ProductsController'
//   })
//   .when('/orders',{
//     templateUrl: '/partials/_orders.html',
//     controller: 'OrderController'
//   })
//   .when('/customers',{
//     templateUrl: '/partials/_customers.html',
//     controller: 'CustomerController'
//   })
// })
var App = angular.module('StoreModule', ['ngRoute', 'angularMoment']);

App.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/_index.html',
      controller: 'IndexController'
    })
    .when('/customers', {
      templateUrl: '/partials/_customers.html',
      controller: 'CustomerController'
    })
    .when('/products', {
      templateUrl: '/partials/_products.html',
      controller: 'ProductController'
    })
    .when('/orders', {
      templateUrl: '/partials/_orders.html',
      controller: 'OrderController'
    })
    .otherwise({
      redirectTo: '/'
    })
})

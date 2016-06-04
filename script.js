// create the module and name it 'my-app'
     // also include ngRoute for all our routing
var app = angular.module('my-app', ['ngRoute']);

//configure the routes
app.config(function($routeProvider) {
     $routeProvider

     // route for the home page
     .when('/', {
          templateUrl : 'home.html',
          controller  : 'mainController'
     })

     // route for the about page
     .when('/about', {
          templateUrl : 'about.html',
          controller  : 'aboutController'
     })

     // route for the contact page
     .when('/contact', {
          templateUrl : 'contact.html',
          controller  : 'contactController'
     });
});

//create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
     //create a message to display in our view
     $scope.message = 'Test message';
});

app.controller('aboutController', function($scope) {
     $scope.message = 'The is the about page.';
});

app.controller('contactController', function($scope) {
     $scope.message = 'This is the contact page.'
});

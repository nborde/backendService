var myAppModule_CEP4 = angular.module('myApp',['myApp.controllers','myApp.services']);

myAppModule_CEP4.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/listEmployee', {
        templateUrl: 'views/employees.html',
        controller: 'EmpleadosController'
    })
      . when('/employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmpleadosController'
    }).
      when('/addNew', {
        templateUrl: 'views/newEmployee.html',
        controller: 'EmpleadosController'
    }).
      when('/editNew/:id', {
        templateUrl: 'views/detailEmployee.html',
        controller: 'EmpleadosControllerEdit'
    }).
      when('/addClient', {
        templateUrl: 'views/newClient.html',
        controller: 'clientController'        
    }).
      when('/editClient/:id', {
        templateUrl: 'views/detailClient.html',
        controller: 'clientController'
    }).
       when('/listClients', {
        templateUrl: 'views/clients.html',
        controller: 'clientController'
    }).
       when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'clientController'
    }).when('/about', {
        templateUrl: 'views/about.html'
    }).
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'EmpleadosController'
    }).
      otherwise({
        redirectTo: '/'
      });

}]);

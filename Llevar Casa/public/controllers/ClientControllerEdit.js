angular.module('myAppModule_CEP4.controllers').controller('clientControllerEdit', function($scope, $location, $routeParams,  ClientService){
	ClientService.getClient($routeParams.id).then(function (client) {
		$scope.client = client;
	});
	
	$scope.update = function(){
		console.log($routeParams.id + " - " + $scope.client.name + " - " + $scope.client.lastName);
		(ClientService.updateClient($routeParams.id, $scope.client.name , $scope.client.lastName))
		.then(function(){
			$location.path('/listClients');
		});
	};
});
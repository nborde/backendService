angular.module('myAppModule_CEP4.controllers').controller('clientController',function($scope, $location, ClientService){
	
	if ($scope.clients == null) {
		$scope.clients = ClientService.getClientList();		
	};


	$scope.save = function(){
		console.log($scope.name + " - " + $scope.lastName);
		(ClientService.saveClient($scope.name, $scope.lastName))
		.then(function(){
			$location.path('/listClients');
		});
	};

	$scope.update = function(){
		$scope.client = ClientService.getClient($routeParams.id);
		console.log($routeParams.id + " - " + $scope.client.name + " - " + $scope.client.lastName);
		(ClientService.updateClient($routeParams.id,"Cliente", "Editado"))
		.then(function(){
			$location.path('/listClients');
		});
	};

	$scope.delete = function(id){
		console.log("id to remove:"+id);
		(ClientService.deleteClient(id))
		.then(function(){
			$scope.clients = ClientService.getClientList();
		});
	};

	$scope.getClient = function(id){
		$location.path('/editClient/' + id);
	};

});
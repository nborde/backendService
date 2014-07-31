angular.module('myApp.services').service('ClientService',function($http, $q){
	
	var ClientService = {};
	ClientService.getClientList = function(){
		var deferred = $q.defer();
		$http.get("/clients",{"headers" : {"Accept" : "application/json"}})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});
		
		return deferred.promise;
	}

	ClientService.getClient = function(id){

		var deferred = $q.defer();
		$http.get("/clients/"+id,{"headers" : {"Accept" : "application/json"}})
		.success(function(data){
			console.warn(data);
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});
		
		return deferred.promise;
	}

	ClientService.saveClient = function(name, lastName){
		console.log("ClientService.saveClient");
		var deferred = $q.defer();
		$http.post(
			"/clients", 
			{'name': name,'lastName': lastName}, 
			{"headers" : 
				{"Accept" : "application/json", "Content-Type":"application/json"}
			})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});

		
		return deferred.promise;
	}

	ClientService.deleteClient = function(id){
		console.log("ClientService.deleteClient");
		var deferred = $q.defer();
		$http.delete(
			"/clients/"+id, 
			{"headers" : 
				{"Accept" : "application/json", "Content-Type":"application/json"}
			})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});

		
		return deferred.promise;
	}

	ClientService.updateClient = function(id, name, lastName){
		console.log("ClientService.updateClient");
		var deferred = $q.defer();
		$http.put(
			"/clients/"+id,
			{'name': name,'lastName': lastName}, 
			{"headers" : 
				{"Accept" : "application/json", "Content-Type":"application/json"}
			})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(){
			deferred.reject("An error occured while fetching status");
		});

		
		return deferred.promise;
	}

	
	return ClientService;
});
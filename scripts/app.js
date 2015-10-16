var app = angular.module("todolist", []);

app.controller("exempleCtrl", function($scope) {
    $scope.name = "World"
});

app.controller("todoListCtrl", function($scope) {
	$scope.todos = ["init"];
	
	if(!Array.indexOf){
		Array.prototype.indexOf = function(obj){
			for(var i=0; i<this.length; i++){
				if(this[i]==obj) return i;
			}
		return -1;
		}
	}
	
	$scope.addTodo = function($event) {
		if ($event.which === 13) {
			if ($scope.todos.indexOf($scope.todo)===-1)
				$scope.todos.push($scope.todo);
		}
	}
	
	
	
});
var app = angular.module("todolist", []);

app.controller("exempleCtrl", function($scope) {
    $scope.name = "World"
});

app.controller("todoListCtrl", function() {
	
	var nbTodo = 0;
	
	this.todo = {
		name
	}
	
	this.todos = [];
		
	this.addTodo = function($event) {
		if ($event.which === 13) {
			this.todos.push({id : nbTodo++, name:this.todo.name});			
		}
	}

});
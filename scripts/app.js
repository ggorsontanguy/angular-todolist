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
		if ($event.which === 13 && this.todo.name!=="") {
			this.todos.push({id : nbTodo++, name:this.todo.name});
			this.todo.name = "";
		}
	}
	
	this.delTodo = function(id) {
		console.log(id + " del " + this.todos.length )
		if (this.todos.length > 1) {
			this.todos.splice(id, 1);
		} else {
			this.todos = [];
			nbTodo = 0;
		}
	}

});
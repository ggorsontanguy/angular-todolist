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
	
	this.delTodo = function(todo) {
		console.log(todo + " del " + this.todos )
		if (this.todos.length > 1) {
			var position = this.todos.indexOf(todo);
			this.todos.splice(position, 1);
		} else {
			this.todos = [];
			nbTodo = 0;
		}
	}

});
var app = angular.module("todolist", []);

app.controller("exempleCtrl", function($scope) {
    $scope.name = "World... This a TodoList"
});

app.controller("todoListCtrl", function() {
	
	function ItemTodo(name, checked) {
		this.name = name;
		this.checked = checked;
	}
	
	this.todo = new ItemTodo("", false);
	
	this.todos = [];
		
	this.addTodo = function($event) {
		if ($event.which === 13 && this.todo.name!=="") {
			this.todos.push(new ItemTodo(this.todo.name, false));
			this.todo.name = "";
		}
	}
	
	this.delTodo = function(todo) {
		if (console) {
			console.info(todo);
			console.log("del");
			console.info(this.todos);
		}
		
		if (this.todos.length > 1) {
			var position = this.todos.indexOf(todo);
			this.todos.splice(position, 1);
		} else {
			this.todos = [];
		}
	}

});
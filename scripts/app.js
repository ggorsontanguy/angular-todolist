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
	
	if(!Array.indexOf){
		Array.prototype.indexOf = function(obj){
			for(var i=0; i<this.length; i++){
				if(this[i]==obj) return i;
			}
		return -1;
		}
	}
		
	this.addTodo = function($event) {
		if ($event.which === 13) {
			//if (this.todos.indexOf(this.todo)===-1) {
				this.todos.push({id : nbTodo++, name:this.todo.name});
			//	}
				
		}
	}

});
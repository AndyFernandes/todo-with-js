var containerElement = document.querySelector("#app");
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

renderTodos();
buttonElement.onclick = addTodo;

function renderTodos(){
	listElement.innerHTML = '';
	for (todo of todos) {
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#');

		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
		
		var linkText = document.createTextNode('Excluir');
		
		linkElement.appendChild(linkText);
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
	}
}

function addTodo(){
	var todoText = inputElement.value;

	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
	saveToStorage();
}

function deleteTodo(posicao){
	todos.splice(posicao, 1);
	renderTodos();
	saveToStorage();
}

function saveToStorage(){
	localStorage.setItem('list_todos', JSON.stringify(todos));
};

// ############ introdução a requisições ajax
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/andyfernandes');
// xhr.send(null);

// xhr.onreadystatechange = function(){
// 	if(xhr.readyState === 4){
// 		console.log(JSON.parse(xhr.responseText));
// 	}
// }

// ########## promises
// var minhaPromise = function(){
// 	return new Promise(function(resolve, reject){
// 		var xhr = new XMLHttpRequest();
// 		xhr.open('GET', 'https://api.gitb.com/users/andyfernandes');

// 		xhr.send(null);

// 		xhr.onreadystatechange = function(){
// 			if(xhr.readyState === 4){
// 				if(xhr.status === 200){
// 					resolve(JSON.parse(xhr.responseText));
// 				} else {
// 					reject('Erro na requisição');
// 				}
// 			} 
// 		}
// 	});
// }

// minhaPromise()
// 	.then(function(response){
// 		console.log(response);
// 	})
// 	.catch(function(error){
// 		console.warn(error);
// 	});

// ####### USANDO AXIOS: encapsulamento do promises acima 
// axios.get('https://api.github.com/users/andyfernandes')
// 	.then(function(response){
// 		console.log(response);
// 	})
// 	.catch(function(error){
// 		console.warn(error);
// 	});

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
   'Fazer café',
   'Estudar Javascript',
   'Conseguir meu primeiro emprego como desenvolvedor'
];

function render_to_dos() {
   listElement.innerHTML = '';
   
   for (todo of todos){
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

render_to_dos();

function addTodo(){
   var todoText = inputElement.value;

   todos.push(todoText);
   inputElement.value = '';
   render_to_dos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
   todos.splice(pos, 1);
   render_to_dos();
}



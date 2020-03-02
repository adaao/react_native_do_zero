var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var to_dos = [
   'Fazer café',
   'Estudar Javascript',
   'Conseguir meu primeiro emprego como desenvolvedor'
];

function render_to_dos() {
   listElement.innerHTML = '';
   
   for (to_do of to_dos){
      listElement.appendChild(createTodoLi(to_do));
   }
}

function createTodoLi(value){
   var li = document.createElement('li');
   var content = document.createTextNode(value);
   var linkElement = document.createElement('a');
   var linkText = document.createTextNode('Excluir');
   
   linkElement.setAttribute('href', '#');
   linkElement.appendChild(linkText);
   linkElement.onclick = function () {
      deleteTodo(to_dos.indexOf(value));
   }


   li.appendChild(content);
   li.appendChild(linkElement);

   return li;
}

render_to_dos();

function addTodo(){
   var todoText = inputElement.value;

   to_dos.push(todoText);
   inputElement.value = '';
   render_to_dos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
   to_dos.splice(pos, 1);
   render_to_dos();
}



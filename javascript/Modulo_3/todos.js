var btn = document.querySelector('#adicionar');
var input = document.querySelector('#todoInput');

btn.onclick = function (){
   var ul = document.querySelector('ul');
   ul.append(createLi(input.value));
   input.value = '';
}

function createLi(value){
   var li = document.createElement('li');
   var excluir = document.createElement('a');
   excluir.append(
      document.createTextNode(' Excluir')
   );
   excluir.setAttribute('href', '#');
   var content = document.createTextNode(value);
   li.append(content);
   li.append(excluir);
   return li;
}
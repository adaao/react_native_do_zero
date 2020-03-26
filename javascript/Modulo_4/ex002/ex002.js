/*
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
<li>repo1</li>
<li>repo2</li>
<li>repo3</li>
<li>repo4</li>
<li>repo5</li>
</ul>
*/

var input = document.querySelector('[name="user"]');
var button = document.querySelector('#submit');
var div = document.querySelector('#repositories_list');

const get_repositories = function (user){
   
   axios.get(`https://api.github.com/users/${user}/repos`)
      
   .then(function(response){
         var ul = document.createElement('ul');
         div.append(loading_repositories);
         for(i = 0; i < response.data.length; i++){
            ul.appendChild(
               generate_li_element(JSON.stringify(response.data[i].name))
            );
         }
         
         div.innerHTML = '';
         div.append(ul);
      })
      
      .catch(function(error){
         alert('Usuário não encontrado');
      });
}

const loading_repositories = () => {
   const ul = document.createElement('ul');
   const loading_li = generate_li_element('Carregando...');
   ul.appendChild(loading_li);
   return ul;
}

const generate_li_element = function (content){
   var li = document.createElement('li');
   var li_text = document.createTextNode(content);
   li.append(li_text);
   return li;
}

button.onclick = function(){
   get_repositories(input.value);
   //console.log(response);
}


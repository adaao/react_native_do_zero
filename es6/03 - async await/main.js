//###########################################################################################3
/*
Exercícios: Módulo 03

Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

Exercício
Transforme os seguintes trechos de código utilizando async/await:

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
   delay().then(() => {
      console.log('1s');
      delay().then(() => {
         console.log('2s');
         delay().then(() => {
            console.log('3s');
         });
      })
   });
}

umPorSegundo();
*/

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){
   await delay();
   console.log('1s');
   await delay();
   console.log('2s');
   await delay();
   console.log('3s');
}

umPorSegundo();

/*

import axios from 'axios';

function getUserFromGithub(user) {
   axios.get(`https://api.github.com/users/${user}`)
      .then(response => {
         console.log(response.data);
      })
      .catch(err => {
         console.log('Usuário não existe');
      })
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
*/

async function getUserFromGithub(user){
   try{
      const response = await axios.get(`http://api.github.com/users/${user}`);
      console.log(response);
   } catch(err){
      console.log(err);
   }
} 

getUserFromGithub('adaao');
getUserFromGithub('asdçfkljasdçlfjsadçlkfj');

/*

class Github {
   static getRepositories(repo) {
      axios.get(`https://api.github.com/repos/${repo}`)
         .then(response => {
            console.log(response.data);
         })
         .catch(err => {
            console.log('Repositório não existe');
         })
   }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
*/

class Github{
   static async getRepositories(repo){
      try{
         const response = await axios.get(`https://api.github.com/repos/${repo}`);
         console.log(response);
      } catch(err){
         console.log('repositorio não enconstrado');
      }
   }
}

Github.getRepositories('adaao/react_native_do_zero');
Github.getRepositories('rocketseat.com.br');
Github.getRepositories('asçdflkjasdçfkjasdçlkfjçasdf');

/*
const buscaUsuario = usuario => {
   axios.get(`https://api.github.com/users/${user}`)
      .then(response => {
         console.log(response.data);
      })
      .catch(err => {
         console.log('Usuário não existe');
      });
}

buscaUsuario('diego3g');
*/

const buscaUsuario = async usuario => {
   try{
      response = await axios.get(`https://api.github.com/users/${usuario}`);
      console.lot(response);
   }catch(err) { 
      console.log('Usuário não encontrado');
   }
}

buscaUsuario('akitaonrails');

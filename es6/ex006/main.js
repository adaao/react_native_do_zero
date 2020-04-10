// exercício 6 e 7...
/*
6o Exercício
Converta o seguinte trecho de código utilizando Template Literals:
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
*/

/*
7o exercício
Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

const nome = 'Diego';
const idade = 23;
const usuario = {
   nome: nome,
   idade: idade,
   cidade: 'Rio do Sul',
};
*/

const nome = 'Adaão';
const idade = 34;

const usuario = {
   nome, 
   idade, 
   cidade: 'Santos',
};

console.log(`O usuário ${nome} possui ${idade} anos.`);
console.log(usuario);
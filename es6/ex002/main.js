const usuarios = [
   { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
   { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
   { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/*
2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
*/

var idades = [];
usuarios.map(function({ idade }){
   idades.push(idade);
})

console.log(idades);

/*
2.2 Utilizando o filter
Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
*/

var users = usuarios.filter(
   ({ idade, empresa }) => idade > 18 && empresa === 'Rocketseat'
);

console.log(users);

/*
2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
*/

var googleEmployees = usuarios.find(({ empresa }) => empresa === 'Google');
console.log(googleEmployees);

/*
2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um 
filtro nos usuários que possuem no máximo 50 anos:
// Resultado:
[
   { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
   { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/

var usrs = usuarios.filter(({ idade }) => idade * 2 <= 50);
console.log(usrs);

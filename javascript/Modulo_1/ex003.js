/*
Escreva uma função que verifique se o vetor de habilidades passado 
possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
*/

function temHabilidade(skills){
   return skills.includes('Javascript');
}

habilidades = ['Javascript', 'ReactJs', 'NodeJs'];

console.log(temHabilidade(habilidades));

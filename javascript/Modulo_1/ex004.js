//Escreva uma função que dado um total de anos 
//de estudo retorna o quão experiente o usuário é:

/*
0-1 ano: Iniciante
1-3 anos: Intermediário
3-6 anos: Avançado
7 acima: Jedi Master
*/

let years_of_study = Array(10);

for(var i = 0; i < years_of_study.length; i++){
   years_of_study[i] = i;
   console.log(calculate_experience(years_of_study[i]));
}

function calculate_experience(yos){
   if(yos <= 1){
      return 'Iniciante';
   }else{
      if(yos > 1 && yos <= 3){
         return 'Intermediário';
      }else{
         if(yos > 3 && yos <= 6){
            return 'Avançado';
         }else{
            return 'Jedi Master'
         }
      }
   }
}

//console.log(years_of_study);



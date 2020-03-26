var button = document.querySelector('#submit');
var input = document.querySelector('#inputYearsOld');

function checkYearsOld(yearsOld){
   return new Promise(function (resolve, reject){
      setTimeout(function(){
         return yearsOld >= 18 ? resolve() : reject();
      }, 2000);
   });
}

button.onclick = function(){
   checkYearsOld(input.value)
      .then(function(){
         alert('Maior que 18');
      })
      .catch(function(){
         alert('Menor que 18');
      })
}

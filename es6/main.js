const arr = [1, 2, 3, 4, 5, 6];

//As anotações deste arquivo são para que eu, Adaão, 
//me lembre de como funciona, são uma espécie de
//mapa mental.


//basing on Haskell types:
//t: .map() :: (a -> b) -> a -> b
//or
//t: .map() :: (a -> b -> c) -> a -> b -> c
//where b is the index of an element


const newArr = arr.map(function(item, index){
   return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
   return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
   return item % 2 === 0;
})

console.log(filter);

const find = arr.find(function(item){
   return item === 2;
})

console.log(find);

function soma(a = 2, b = 3){
   return a + b;
}

const soma_ = (a = 2, b = 3) => a + b;

//====================================================================

const usuario = {
   nome: "Adaão", 
   idade: 34,
   empresa: "Rocketseat", 
   endereco: {
      cidade: "Santos",
      estado: "SP",

   },
};

//const { nome, idade, endereco: { cidade } } = usuario;

const mostraInfo = ({ nome, idade }) => console.log(nome, idade);

//==========================================================================

//REST

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

function fatorial(...params){
   return params.reduce((total, next) => total * next);
}

console.log(fatorial(1, 2, 3, 4, 5));

function leftovers(a, b, ...params){
   console.log(params);
}

leftovers(1, 2, 3, 4, 5, 6);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var arr3 = [...arr1, ...arr2];

const usuario2 = {...usuario, nome: "Raquel" }

console.log(usuario2);

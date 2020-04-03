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

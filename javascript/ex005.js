const users = [
   {
      name: "Diego",
      skills: ["Javascript", "ReactJS", "Redux"]
   }, 
   {
      name: "Gabriel",
      skills: ["VueJS", "Ruby on Rails", "Elixir"]
   }
];

/*
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

for(let user of users){
   console.log('O ' + user.name + ' possui as habilidades: ' + user.skills.join(', '));
}
   

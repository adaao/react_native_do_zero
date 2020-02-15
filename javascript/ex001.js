var endereco = {
   rua: "Rua XXX",
   numero: 1234,
   bairro: 'Centro',
   cidade: 'Santos', 
   uf: "SP"
};

function echo_informacoes(add){
   console.log(
      'O user mara em ' + 
      add.cidade +
       ' / ' + 
       add.uf + 
       ' no bairro ' + 
       add.bairro +
       ', na rua \"' +
       add.rua +
       '\" com numero ' +
       add.numero +
       '.' 
   );
}

echo_informacoes(endereco);

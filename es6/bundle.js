"use strict";

var usuario = {
  nome: "Adaao"
};
usuario.nome = "Raquel";
console.log(usuario.nome);

function teste(x) {
  var y = 5;

  if (x > y) {
    console.log(x, y);
  }

  x > y ? console.log(x, y) : console.log();
}

teste(10);

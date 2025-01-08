const estaAprovado = true;

if (estaAprovado === true) {
  console.log('aprovado');
}

if ('0' === 0) { //não compara apenas o valor, mas compara também o tipo de dado.
  console.log('Passou na comparação');
} else {
  console.log('Não passou na comparação');
}

if ('0' == 0) { //compara o valor
  console.log('Passou na comparação');
} else {
  console.log('Não passou na comparação');
}

const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
  console.log('Não precisa de autorização.');
} else {
  console.log('Precisa de autorização.');
}
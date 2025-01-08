//parâmetros/argumentos
//retorno
console.log(exibeInfosEstudante('Karolina', 10));
console.log(exibeInfosEstudante('Ana', 7));

function exibeInfosEstudante(nome, nota) {
  return `O nome é ${nome} e a nota é: ${nota}`;
}

//hoisting - içamento
//As funções declaradas e variáveis criadas com var, elas são puxadas, elas são levantadas para o começo, para o topo do arquivo.
//Quando executamos o console.log(), essa função já foi lida, a função exibirInfosEstudante() já foi indexada.
//Então o JavaScript já sabe o que ela é.
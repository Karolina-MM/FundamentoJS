const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
  console.log('Reprovado, boas festas!');
} else {
  console.log('Não foi reprovado por falta');
}

if (faltas >= 2 && !advertencias) {
  console.log('Recebeu bônus');
} else {
  console.log('Não recebeu bônus');
}


//Operador E (&&) = ambas as condições sejam verdadeiras
//Operador OU (||) = requer que apenas uma das condições seja verdadeira
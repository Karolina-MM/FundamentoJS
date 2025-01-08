const estudanteReprovou = function (notaFinal, faltas) { //const recebeu valor de uma função
    if (notaFinal < 7 && faltas > 4) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(estudanteReprovou(6, 5));
  console.log(estudanteReprovou(10, 2));

  //Se colocarmos o console.log antes da declaração da variável ñ dará certo 
const estudante = "Karolina";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log(`A estudante chama ${estudante}`); //outra forma de concatenar

// template string

const senha = 'SenhaSegura123' + estudante.toUpperCase(); // estudante em caixa alta
console.log(senha);

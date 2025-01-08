//Quando colocamos o let a variável pode ser alterada depois, usar apenas quando souber que será necessário mudar a variável.
//Utilizando const a variável não pode ser alterada (é uma constante), 
//Não é possível criar uma const sem atribuir valor 

//Hoje em dia não se utiliza mais o var. É muito solto.
//Var: permite fazer muitos outros tipos de alteração que normalmente não queremos fazer no código.

const estudante = 'Karolina';
let professora;

professora = 'Ana';

console.log(estudante, professora);
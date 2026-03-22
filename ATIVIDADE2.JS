
// Atividade: Cálculo de Média Escolar


let nomeAluno = "fabio";
let nota1 = 6.0;
let nota2 = 5.0;
let notarecuperacao = 7.0; 

let media = (nota1 + nota2) / 2;

console.log("Média: " + media);

if (media >= 7) {
    console.log("Aluno aprovado, " + nomeAluno + ".");
} else if (media >= 5 && media < 7){
    console.log("Aluno em recuperação, " + nomeAluno + ".");
   }   if (notarecuperacao >= 6) {
        console.log("Aluno aprovado na recuperação, " + nomeAluno + ".");
    } else {
        console.log("Aluno reprovado na recuperação, " + nomeAluno + ".");
    }   


// Atividade: Verificação de Idade e Autorização

let nome = "fabio";
let idade = 17;
let temAutorizacao = true;

if (idade >= 18) {
    console.log("Pode entrar, " + nome + ". estar autorizado.");
}else if (idade >= 16 && temAutorizacao) {
    console.log("Pode entrar, " + nome + ". estar autorizado.");
} else {
    console.log("acesso negado" + nome + "voce nao estar autorizado."); 
}
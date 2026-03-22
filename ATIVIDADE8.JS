//PLANO DE ASSINATURA



let tipoCliente = "PJ"; // PF ou PJ
let faturamento = 20000;

let valorPlano;
let categoria;

// Verificação
if (tipoCliente === "PF") {
    valorPlano = 29.90;
    categoria = "Plano Pessoa Física";
} 
else if (tipoCliente === "PJ") {

    if (faturamento < 10000) {
        valorPlano = 99;
        categoria = "PJ Básico";
    } 
    else if (faturamento <= 50000) {
        valorPlano = 199;
        categoria = "PJ Intermediário";
    } 
    else {
        valorPlano = 399;
        categoria = "PJ Premium";
    }
}

// Saída
console.log("Tipo: " + tipoCliente);
console.log("Categoria: " + categoria);
console.log("Valor do plano: R$ " + valorPlano);

//ATIVIDADE: SIMULAR CAIXA


let saldo = 120;
let valorCompra = 160.80;
let temLimite = true;
let limite = 89.90;
 let saldoFinal = saldo - valorCompra;

if (saldo >= valorCompra) {
    console.log("Aprovado");
    console.log("Saldo final: R$ " + saldoFinal);
} 
else if (temLimite && (saldo + limite) >= valorCompra) {
    console.log("Aprovado usando limite");
    console.log("Saldo final: R$ " + saldoFinal.toFixed(2));
} 
else {
    console.log("Negado");
}
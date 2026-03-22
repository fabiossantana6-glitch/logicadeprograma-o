
// Atividade: Cálculo de Conta de Energia


let consumo = 350;
let preco;
let total;


if (consumo <= 100) {
    preco = 0.60;
} 
else if (consumo <= 200) {
    preco = 0.75;
} 
else {
    preco = 0.90;
}



total = consumo * preco;

console.log("Consumo: " + consumo + " kWh");
console.log("Valor da conta: R$ " + total);

// Atividade: Cálculo de Frete



let valorCompra = 200;
let bairro = "itinga";
let frete = "";

if (bairro === "itinga") {
    frete = 50;
} else if (bairro === "portao") {
    frete = 30;
} else if (centro === "centro") {
    frete = 40;
}else if (valorCompra > 100) {
    frete = 0;
    console.log("Valor da compra: R$ " + valorCompra);
} else {
    frete = 20;
}
let valorTotal = valorCompra + frete;

console.log("Valor do frete: R$ " + frete);
console.log("Valor total: R$ " + valorTotal);
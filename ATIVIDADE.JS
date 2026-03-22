
// Atividade: Cálculo de Desconto
// Escreva um programa que calcule o desconto aplicado a uma compra com base no valor total. 
// As regras de desconto são as seguintes:


let valorCompra = 200;
let desconto = 0;

if (valorCompra < 100) {
    desconto = 0;
} else if (valorCompra < 300) {
    desconto = valorCompra * 0.05;
} else if (valorCompra < 500) {
    desconto = valorCompra * 0.10;
} else {
    desconto = valorCompra * 0.15;
}

let valorFinal = valorCompra - desconto;

console.log("Desconto: R$ " + desconto.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2));
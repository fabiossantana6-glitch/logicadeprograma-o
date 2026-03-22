
// Atividade: Escolha de Transporte


let distancia = 12;
let orcamento = 28;

if (distancia <= 2) {
    console.log("A pé");
} 
else if (distancia <= 8 && orcamento >= 10) {
    console.log("Ônibus");
} 
else if (distancia <= 15 && orcamento >= 25) {
    console.log("Moto/Carro por app");
} 
else {
    console.log("Não é possível com esse orçamento");
}
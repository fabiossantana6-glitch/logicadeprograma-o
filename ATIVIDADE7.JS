//ATIVIDADE: JUROS POR ATRASO

valor = 1000;
diasAtraso = 5;
juros = 0;
multa = 2;
jurosaodia = 0.1;

if (diasAtraso <= 0) {
    juros = 0; console.log("Valor a pagar: R$ " + valor);
} else if (diasAtraso > 0 && diasAtraso <= 3) {
    juros = valor * (jurosaodia / 100) * diasAtraso * multa;
    console.log("Valor a pagar: R$ " + (juros + valor));
    console.log("Valor da multa: R$ " + multa*jurosaodia*diasAtraso);
}
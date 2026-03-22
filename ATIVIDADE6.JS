
//ATVIDADE: VALIDACAO DE SENHA


senha = "fabio1584"; 


if (senha.length < 8) {
    console.log("Senha fraca: deve conter pelo menos 8 caracteres.");
} else if (senha.includes("123456789")) {
    console.log("Senha fraca: não deve conter sequências numéricas simples.");
} else {
    console.log("Senha forte.");
}
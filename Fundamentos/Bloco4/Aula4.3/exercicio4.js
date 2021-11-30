let number = 12;
let mensagem = ""
let espaco = Math.ceil(number / 2) - 1;
let inicio;

if (number % 2 === 0){
    inicio = 2;
} else {
    inicio = 1;
}

for(let i = inicio; i <= number; i += 2){

    mensagem = "";

    for(n = espaco; n > 0; n -= 1){
        mensagem = mensagem + " ";
    }

    for(n = i; n > 0; n -= 1){
        mensagem = mensagem + "*";
    }

    for(n = espaco; n > 0; n -= 1){
        mensagem = mensagem + " ";
    }

    espaco -= 1;

    console.log(mensagem);
}

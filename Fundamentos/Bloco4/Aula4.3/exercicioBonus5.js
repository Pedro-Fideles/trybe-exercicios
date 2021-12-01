let number = 11;
let mensagem = ""
let espaco = Math.ceil(number / 2) - 1;

for(let i = 1; i <= number; i += 2){

    mensagem = "";

    //espaço do lado esquerdo
    for(n = espaco; n > 0; n -= 1){
        mensagem = mensagem + " ";
    }

    //asteriscos do lado esquerdo ou total
    if (i != number){
        mensagem = mensagem + "*";
    } else {
        for(n = 0; n <= number; n += 1){
            mensagem = mensagem + "*";
        }
    }

    //espaço no meio
    for(n = 1; n <= i - 2; i += 1){
        mensagem = mensagem + " "
    }

    //asterisco do lado direito
    if ((i != number) && (i > 1)){
        mensagem = mensagem + "*";
    }

    //espaço da esquerda
    for(n = espaco; n > 0; n -= 1){
        mensagem = mensagem + " ";
    }

    espaco -= 1;

    console.log(mensagem);
}

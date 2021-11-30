let number = 5;
let mensagem;

for(let i = 1; i <= 5; i += 1){

    mensagem = ""

    for(let n = 5; n > i; n -= 1){
        mensagem = mensagem + " ";
    }

    for(n = 1; n <= i; n += 1){
        mensagem = mensagem + "*";
    }

    console.log(mensagem);
}
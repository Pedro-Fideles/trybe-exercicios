// Seletores e Variáveis:

const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


//Funções:

function naoClique(event) {
    event.preventDefault();
}

function naoDigita(event) {
    if (event.key !== 'a') {
        event.preventDefault();
    }
}


//Comandos:

HREF_LINK.addEventListener("click", naoClique);
INPUT_CHECKBOX.addEventListener("click", naoClique);
INPUT_TEXT.addEventListener("keypress", naoDigita);
// Variáveis e Seletores
const selecionaEstado = document.getElementById('estado');
const botaoForm = document.getElementById('enviar-form');

const estados = [
    {
        nome: 'Acre',
        sigla: 'ac'
    },
    {
        nome: 'Alagoas',
        sigla: 'al'
    },
    {
        nome: 'Amapá',
        sigla: 'ap'
    },
    {
        nome: 'Amazonas',
        sigla: 'am'
    },
    {
        nome: 'Bahia',
        sigla: 'ba'
    },
    {
        nome: 'Ceará',
        sigla: 'ce'
    },
    {
        nome: 'Espírito Santo',
        sigla: 'es'
    },
    {
        nome: 'Goiás',
        sigla: 'go'
    },
    {
        nome: 'Maranhão',
        sigla: 'ma'
    },
    {
        nome: 'Mato Grosso',
        sigla: 'mt'
    },
    {
        nome: 'Mato Grosso do Sul',
        sigla: 'ms'
    },
    {
        nome: 'Minas Gerais',
        sigla: 'mg'
    },
    {
        nome: 'Pará',
        sigla: 'pa'
    },
    {
        nome: 'Paraíba',
        sigla: 'pb'
    },
    {
        nome: 'Paraná',
        sigla: 'pr'
    },
    {
        nome: 'Pernambuco',
        sigla: 'pe'
    },
    {
        nome: 'Piauí',
        sigla: 'pi'
    },
    {
        nome: 'Rio de Janeiro',
        sigla: 'rj'
    },
    {
        nome: 'Rio Grande do Norte',
        sigla: 'rn'
    },
    {
        nome: 'Rio Grande do Sul',
        sigla: 'rs'
    },
    {
        nome: 'Rondônia',
        sigla: 'ro'
    },
    {
        nome: 'Roraima',
        sigla: 'rr'
    },
    {
        nome: 'Santa Catarina',
        sigla: 'sc'
    },
    {
        nome: 'São Paulo',
        sigla: 'sp'
    },
    {
        nome: 'Sergipe',
        sigla: 'se'
    },
    {
        nome: 'Tocantins',
        sigla: 'to'
    },
    {
        nome: 'Distrito Federal',
        sigla: 'df'
    },
]

// Funções
function gerarEstados(estados, elementoPai) {
    for(estado of estados){
        let criarEstado = document.createElement('option');
        criarEstado.innerText = estado['nome'];
        criarEstado.value = estado['sigla'];

        elementoPai.appendChild(criarEstado);
    }
}

function enviaForm (event) {
    event.preventDefault();
}

// Comandos
gerarEstados(estados, selecionaEstado);
botaoForm.addEventListener('click', enviaForm)

let situacao = "aprovada";

switch (situacao) {
    case 'aprovada':
        console.log('Aprovada(o)');
        break;
    case 'lista':
        console.log('Lista de Espera');
        break;
    case 'reprovada':
        console.log('Reprovada(o)');
    default:
        console.log('não se aplica');
        break;

}
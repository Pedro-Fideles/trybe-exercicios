let peca = 'Cavalo';

switch (peca.toLowerCase()) {
    case 'peão':
        console.log('Uma casa para frente, o primeiro movimento pode ser, opcionalmente, duas casas para frente. Somento come uma casa na diagonal, não come andando pra frente.');
        break;
    case 'torre':
        console.log('Qualquer quantidade de casas para os dois lados, para frente e para trás.');
        break;
    case 'cavalo':
        console.log('Se movimenta em L.');
        break;
    case 'bispo':
        console.log('Se movimenta na diagonal quantas casas quiser.');
        break;
    case 'Rainha':
        console.log('Qualquer direção quantas casas quiser.');
        break;
    case 'Rei':
        console.log('Qualquer direção somente uma casa.');
        break;
    default:
        console.log('Peça inválida.');
        break;
}
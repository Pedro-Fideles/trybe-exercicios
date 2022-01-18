const verificarIgualdade = (num1, num2) => num1 === num2 ? true : false;

const sorteio = (aposta, checar) => {
  const numSorteio = parseInt(Math.random() * 5) + 1;

  if (checar(aposta, numSorteio)) {
    return 'Parabéns, você ganhou!!';
  }

  return 'Tente novamente.';
}

console.log(sorteio(1, verificarIgualdade));
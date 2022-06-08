const { question } = require('readline-sync');

const questionWeight = () => {
  const weight = question('Qual seu peso em kilos? ');

  if (isNaN(weight) || weight < 0) {
    console.log('Peso inválido, digite um número em quilos!');
    return questionWeight();
  }

  return weight;
}

const questionHeight = () => {
  const height = question('Qual sua altura em metros? ');

  if (isNaN(height) || height < 0 || height > 3) {
    console.log('Peso inválido, digite um número em metros!');
    return questionHeight();
  }

  return height;
}

module.exports = { questionWeight, questionHeight };

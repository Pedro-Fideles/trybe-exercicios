const { questionWeight, questionHeight } = require('./inputs');
const { calcImc } = require('./calculations');
const generateMessage = require('./outputs');

const getImc = () => {
  const weight = questionWeight();
  const height = questionHeight();

  const imc = calcImc(weight, height);
  const message = generateMessage(imc);

  console.log(message);

  return { imc, message };
}

getImc();

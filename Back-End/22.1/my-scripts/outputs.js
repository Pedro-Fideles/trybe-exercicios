const messageImc = (imc) => {
  const preMessage = `Seu IMC é ${imc.toFixed(2)} e você está`;

  if (imc < 18.5) {
    return `${preMessage} abaixo do peso normal.`;
  }
  if (imc < 25) {
    return `${preMessage} no peso normal.`;
  }
  if (imc < 30) {
    return `${preMessage} acima do peso normal.`;
  }
  if (imc < 35) {
    return `${preMessage} com obesidade grau I.`;
  }
  if (imc < 40) {
    return `${preMessage} com obesidade grau II.`;
  }
  return `${preMessage} com obesidade grau III ou IV.`;
}

module.exports = messageImc;

const numbers = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3))
      reject(new Error("Informe apenas números."));
    
    const result = (num1 + num2) * num3;

    if(result < 5000) reject(new Error("Valor muito baixo."));

    resolve(result);
  });

  return promise;
}

const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

numbers(generateRandomNumber(), generateRandomNumber(), generateRandomNumber())
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((error) => console.error(error.message));
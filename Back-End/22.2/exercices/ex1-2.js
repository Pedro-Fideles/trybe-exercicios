const numbers = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (num1.isNaN() || num2.isNaN() || num3.isNaN())
      reject(new Error("Informe apenas números."));
    
    const result = (num1 + num2) * num3;

    if(result < 50) reject(new Error("Valor muito baixo."));

    resolve(result);
  })
}
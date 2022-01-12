const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

// Com o .sort:
console.log(`Os números ${oddsAndEvens.sort()} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Com bubble sort
const bubbleSort = (numbers) => {
    let numbersInOrder = numbers;
    for (let i1 = 1; i1 < numbersInOrder.length; i1 += 1) {
        for (let i2 = 0; i2 < numbersInOrder.length - i1; i2 += 1) {
            let num1 = numbersInOrder[i1];
            let num2 = numbersInOrder[i2];
            if (numbersInOrder[i2] > numbersInOrder[i2 + 1]) {
                let apoio = numbersInOrder[i2];
                numbersInOrder[i2] = numbersInOrder[i2 + 1];
                numbersInOrder[i2 + 1] = apoio;
            }
        }
        
    }
    return numbersInOrder;
}

console.log(`Os números ${bubbleSort(oddsAndEvens)} se encontram ordenados de forma crescente!`);
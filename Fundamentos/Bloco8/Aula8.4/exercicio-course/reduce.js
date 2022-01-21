/* const numbers = [50, 85, -30, 3, 15];

const maiorNum = numbers.reduce((maior, number) => maior < number ? number : maior); */

//console.log(maiorNum);

///////////////

//// Meu jeito
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54]

const sumEven = numbers.reduce((result, number) => number % 2 === 0 ? result + number : result);

console.log(sumEven);

//// Jeito do course
const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers));
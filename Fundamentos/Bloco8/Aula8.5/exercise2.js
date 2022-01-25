const sum = (result, number) => result + number;
const sumNumbers = (...numbers) => numbers.reduce(sum);

console.log(sumNumbers(1, 2, 5, 7));
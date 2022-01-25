// escreva greet abaixo
const greet = (namePerson, greting = 'Hi') => `${greting}, ${namePerson}!!`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

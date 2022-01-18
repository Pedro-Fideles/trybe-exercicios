const email = (name) => {
  let emailFormat = "";
  for (let char of name.toLowerCase()) {
    if (char === " ") {
      emailFormat += "_";
    } else {
      emailFormat += char;
    }
  }
  emailFormat += "@trybe.com";
  return emailFormat;
}

const person = (name) => ({ name, email: email(name) });

const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcao('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(person));
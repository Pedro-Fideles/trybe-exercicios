const addKey = (obj, key, value) => {
    obj[key] = value;
}

const pessoa = {
    firstName: "Roberto",
    lastName: "Carlos"
};

addKey(pessoa, 'fullName', `${pessoa.firstName} ${pessoa.lastName}`);

console.log(pessoa);
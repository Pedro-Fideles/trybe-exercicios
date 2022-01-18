const manha = () => {
  return 'Acordando!!';
}

const fome = () => {
  return 'Bora tomar café!!'
}

const noite = () => {
  return 'Partiu dormir!!'
}

const doingThing = (mensagem) => {
  console.log(mensagem());
}

doingThing(noite);
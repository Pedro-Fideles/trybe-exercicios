const manha = () => 'Acordando!!';
const fome = () => 'Bora tomar café!!';
const noite = () => 'Partiu dormir!!';

const doingThing = (mensagem) => {
  console.log(mensagem());
}

doingThing(noite);
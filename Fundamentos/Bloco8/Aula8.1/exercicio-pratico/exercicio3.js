const avaliador = (gabarito1, gabarito2) => {
  let pontos = 0;
  for(let index = 0; index < gabarito1.length; index += 1) {
    if (gabarito1[index] === gabarito2[index]) {
      pontos += 1;
    } else if (gabarito1[index] !== gabarito2[index] && gabarito2[index] !== 'N.A') {
      pontos -= 0.5;
    }
  }

  return pontos;
}

const avaliacao = (gabaritoCerto, gabaritoAluno, avaliador) => `Pontos: ${avaliador(gabaritoCerto, gabaritoAluno)}`;

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(avaliacao(RIGHT_ANSWERS, STUDENT_ANSWERS, avaliador));
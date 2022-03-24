// Helpers
function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const next = (array, index) => {
  if(array.length - 1 === index) {
    return 0;
  }

  return index + 1;
}

const previous = (array, index) => {
  if(index === 0) {
    return array.length - 1;
  }

  return index - 1;
}

// Actions
const nextColor = () => ({ type: 'NEXT_COLOR' });
const previousColor = () => ({ type: 'PREVIOUS_COLOR' });
const createRandomColor = () => ({
  type: 'RANDOM_COLOR',
  color: criarCor(),
})

// Reducer
const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: next(state.colors, state.index),
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: previous(state.colors, state.index),
      };
    case 'RANDOM_COLOR':
      const newColors = [...state.colors, action.color];
      return {
        ...state,
        colors: newColors,
        index: newColors.length - 1,
      }
    default:
      return state
  }
}

const store = Redux.createStore(reducer);

// Event listenners
const previousColorBtn = document.getElementById('previous');
const nextColorBtn = document.getElementById('next');
const randomColorBtn = document.getElementById('create-random');

previousColorBtn.addEventListener('click', () => store.dispatch(previousColor()));
nextColorBtn.addEventListener('click', () => store.dispatch(nextColor()));
randomColorBtn.addEventListener('click', () => store.dispatch(createRandomColor()));

// Subscribe
const value = document.getElementById('value');
const container = document.getElementById('container');

store.subscribe(() => {
  const { colors, index } = store.getState();
  value.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
});

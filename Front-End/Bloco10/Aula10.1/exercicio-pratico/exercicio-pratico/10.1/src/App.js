import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['estudar o course', 'arrumar a mesa', 'meditar', 'arrumar a cama'];

function App() {
  return (
    <ol className="App">
      { tarefas.map((tarefa) => Task(tarefa)) }
    </ol>
  );
}

export default App;

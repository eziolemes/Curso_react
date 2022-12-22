import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar Reactjs'
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');

    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas)); // transforma array em string
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando usuario</h1>

      <form onSubmit={handleRegister}>
        <label htmlFor="">Nome da tarefa:</label><br />
        <input 
          type="text" 
          placeholder='Digite uma tarefa' 
          value={input}
          onChange={ (e) => setInput(e.target.value) }
        /><br />

        <button type='submit'>Registrar</button>
      </form>

      <br /><br />

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
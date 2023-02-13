
import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import Counter from './component/Counter';
import Table from './component/Table';
import Todo from './component/Todo';

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      {state ? <Card /> : <Table />}
      <button onClick={() =>{
        setState(true)
      }
        
      }>show card</button>
      <button onClick={() =>
      {
        setState(false)
      }
        
      }>show Table</button>
      {/* <Counter />
      <Todo /> */}

    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import Counter from './component/Counter';
import Props from './component/Props';

import Table from './component/Table';
import Todo from './component/Todo';

function Greeting(props){
  return <h1>Hello {props.name}</h1>

}

function App() {

  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Greeting name="Prerna"></Greeting>
      
      
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
      {/* <Props/> */}

    </div>
  );
}

export default App;

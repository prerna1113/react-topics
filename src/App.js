
import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import Counter from './component/Counter';
import Table from './component/Table';
import Todo from './component/Todo';

function App() {
  const [state,setState]= useState("true");
  return (
    <div className="App">
     <div style={{display:"flex",justifyContent:"space-evenly",
     margin:"auto",
     padding:"40px"
     }}>
       <Card />
      <Table />
     
      </div>
      <button onClick={()=>{
        setState("false")
      }}>show card</button>
      <button>show Table</button>
      {/* <Counter />
      <Todo /> */}

    </div>
  );
}

export default App;

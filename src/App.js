

import './App.css';
import Navbar from './component/Api/Navbar';
import nav from './component/Api/Navbar';
import Profile from './component/Api/Profile';
import Text from './component/Child-Parent/Text';
import Card from './component/Phases/Card';
import Table from './component/Phases/Table';
import { useState } from 'react';
import Counter from './component/Timer/Counter';
import Dom from './component/Dom/Dom';
import Form from './component/Form/Form';


// import Input from './component/Parent-Child/Input';

// import Counterr from './Counterr';
// import Nav from './component/State-Api/Nav';
// import Profile from './component/State-Api/Profile';



// function Greeting(props){
//   return <h1>Hello {props.name}</h1>

// }

function App() {
  const [data,setData]=useState("true");


  return (
    <div className="App">
      <Navbar/>
      <Counter />
      <Dom />
      <Form />
     
      
      {/* <Text /> */}
      {/* <Input /> */}
      {/* <Profile/> */}
      {/* <Counterr/> */}
      {/* <Nav/>
      <Profile /> */}
      {/* {data ? <Card /> : <Table />}
      <div style={{textAlign:"center"}}>
        <button 
        onClick={()=>{setData(false)}}>Show table</button>

        <button  
         onClick={()=>{setData(true)}}
         >Show card</button> */}
      {/* </div> */}
      
    </div>
  );
}

export default App;

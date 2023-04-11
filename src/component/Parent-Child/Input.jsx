import {useState} from 'react'
import Text from './Text'

function Input(props) {
  const[input,setInput]=useState("No data");
  const [state,setState]=useState("NO data");
  const submitData=()=>{
    setState(input);

  }

  return (
    <div style={{margin:"40px auto",width:"300px",boxShadow:"0 0 10px crimson",padding:"50px"}}>
      <input type="text" placeholder="Enter some Text"
      onChange={(e)=>{setInput(e.target.value)}}/>
      <br></br>
      <br></br>
      <button onClick={submitData}>Submit</button>
      <Text data={state}/>
    </div>
  )
}

export default Input
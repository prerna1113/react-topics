import {useState} from 'react'
import Text from './Text'

function ParentChild(props) {
  const [state,setState]=useState("no data");
  const submitData=()=>{
    
  }
  return (
    <div style={{width:"300px",margin:"50px auto",padding:"50px",boxShadow:"0 0 10px blue"
    
    }}>
      <input type="Text" placeholder="Enter Some Text" 
       onChange={(e)=>{setState(e.target.value)}}
       />
      <br></br>
      <br></br>
      <button onClick={submitData}>Submit</button>
      <Text data={state}/>
      
    </div>
  )
}

export default ParentChild 
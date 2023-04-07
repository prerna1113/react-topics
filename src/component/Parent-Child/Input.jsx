import {useState} from 'react'
import Text from './Text';

function Input() {
    const [inputData,setInputData]=useState()
    const [state,setState] = useState("No Data")
   
    const getData= ()=>{
        setState(inputData)



    }
  return (
    <div style={{textAlign:"center",margin:" 20px auto",boxShadow:"0 0 10px black",
    width:"400px",height:"200px"}}>
        <h2>Input Component</h2>
        <input type="text" placeholder="Enter some text" style={{marginTop:"10px"}}
        onChange={(event)=>{ setInputData(event.target.value)}}/>
        <button onClick={getData}>Submit</button>
        <Text data={state}/>
    
    </div>
    
  )
}

export default Input
import {useState} from 'react'

function Input(props) {
    const [data,setData]=useState("")
    const getData=()=>{
        props.sendData(data);

    }
  return (
    <div>
        <input type="text" placeholder="Enter some data" onChange={(e)=>{setData(e.target.value)}} />
        <button onClick={getData}>Submit</button>
    </div>
  )
}

export default Input